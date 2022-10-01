import lighthouse from 'lighthouse';
import { RunnerResult } from 'lighthouse/types/externs';
import { launch } from 'chrome-launcher';
import { pipe, concurrent, toAsync, toArray, map } from '@fxts/core';
import EventEmitter from 'events';

import { Reporter } from './tools';
import { WptContext, WptConfig, WptAuditPath } from './context';
import * as constants from './constants';
import { WptEventHandlersEventMap } from './Wpt.types';

export interface WebPerformanceTesterProps {
  reporter?: Reporter;
}

export interface WptAuditPathItem extends WptAuditPath {
  url: string;
}

const context = WptContext();

class WebPerformanceTester extends EventEmitter {
  private reporter: Reporter;

  constructor(props?: WebPerformanceTesterProps) {
    super();
    this.reporter = props?.reporter ?? new Reporter();
    this.typedEmit('onReadyWpt', { context });
  }

  private typedEmit(
    eventName: keyof WptEventHandlersEventMap,
    eventArgs: WptEventHandlersEventMap[keyof WptEventHandlersEventMap],
  ) {
    this.emit(eventName, eventArgs);
  }

  private async createLighthouseReport(
    lighthouseResult: RunnerResult,
    auditPath: WptAuditPathItem,
  ) {
    this.typedEmit('onReportStart', { auditPath, context });
    this.reporter.saveAuditsReportFile(lighthouseResult.report, auditPath.name);
    await this.reporter.createAuditsReport(lighthouseResult.lhr.audits);
    this.typedEmit('onReportEnd', { auditPath, context });
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
      this.typedEmit('onStartedLighthouse', { auditPath, context });
      const lighthouseResult: RunnerResult = await lighthouse(auditPath.url, {
        ...options,
        screenEmulation:
          options.formFactor === 'desktop' &&
          constants.ScreenEmulationMetrics.desktop,
        maxWaitForLoad: context.config.timeout,
        port: options.port + index,
      });
      await this.createLighthouseReport(lighthouseResult, auditPath);
      this.typedEmit('onFinishedLighthouse', { auditPath, context });
    } catch (error) {
      if (error instanceof Error) {
        this.typedEmit('onErrorLighthouse', { auditPath, context, error });
      } else {
        this.typedEmit('onErrorLighthouse', { auditPath, context });
      }
    } finally {
      chrome.kill();
    }
  }

  async run() {
    try {
      this.typedEmit('onStartedWpt', { context });
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
      this.typedEmit('onFinishedWpt', { context });
    } catch (error) {
      if (error instanceof Error) {
        this.typedEmit('onErrorWpt', { context, error });
      } else {
        this.typedEmit('onErrorWpt', { context });
      }
    }
  }
}

export { WebPerformanceTester };
export default WebPerformanceTester;
