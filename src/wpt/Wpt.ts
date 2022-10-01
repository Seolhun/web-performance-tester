import lighthouse from 'lighthouse';
import { RunnerResult } from 'lighthouse/types/externs';
import { launch } from 'chrome-launcher';
import { pipe, concurrent, toAsync, toArray, map } from '@fxts/core';
import EventEmitter from 'events';

import { WptContext, WptConfig } from './context';
import * as constants from './constants';
import { WptAuditPathItem, WptEventHandlersEventMap } from './Wpt.types';
import { writeAuditsReportJsonFile, writeResultReportFile } from './tools';

const context = WptContext();

class WebPerformanceTester extends EventEmitter {
  constructor() {
    super();
    this._emit('onReadyWpt', { context });
  }

  private _emit(
    eventName: keyof WptEventHandlersEventMap,
    eventArgs: WptEventHandlersEventMap[keyof WptEventHandlersEventMap],
  ) {
    this.emit(eventName, eventArgs);
  }

  private async createLighthouseReport(
    lighthouseResult: RunnerResult,
    auditPath: WptAuditPathItem,
  ) {
    if (context.config.useReporter) {
      this._emit('onReportStart', { auditPath, context });
      writeResultReportFile(lighthouseResult.report, auditPath.name);
      writeAuditsReportJsonFile(lighthouseResult.lhr.audits, auditPath.name);
      this._emit('onReportEnd', { auditPath, context });
    }
  }

  private async runLighthouse(
    auditPath: WptAuditPathItem,
    index: number,
    options: WptConfig['options'],
  ) {
    const chrome = await launch({
      chromeFlags: options.chromeFlags,
      port: options.port + index,
    });
    try {
      this._emit('onStartedLighthouse', { auditPath, context });
      const isDesktop = options.formFactor === 'desktop';
      const lighthouseResult: RunnerResult = await lighthouse(auditPath.url, {
        ...options,
        screenEmulation: isDesktop && constants.ScreenEmulationMetrics.desktop,
        maxWaitForLoad: context.config.timeout,
        port: options.port + index,
      });
      await this.createLighthouseReport(lighthouseResult, auditPath);
      this._emit('onFinishedLighthouse', { auditPath, context });
    } catch (error) {
      if (error instanceof Error) {
        this._emit('onErrorLighthouse', { auditPath, context, error });
      } else {
        this._emit('onErrorLighthouse', { auditPath, context });
      }
    } finally {
      chrome.kill();
    }
  }

  async run() {
    try {
      this._emit('onStartedWpt', { context });
      let index = 0;
      const { concurrency, options } = context.config;
      await pipe(
        context.auditPathsItems,
        toAsync,
        map((auditPath) => {
          index += 1;
          return this.runLighthouse(auditPath, index, options);
        }),
        concurrent(concurrency),
        (values) => toArray(values),
      );
      this._emit('onFinishedWpt', { context });
    } catch (error) {
      if (error instanceof Error) {
        this._emit('onErrorWpt', { context, error });
      } else {
        this._emit('onErrorWpt', { context });
      }
    }
  }
}

export { WebPerformanceTester };
export default WebPerformanceTester;
