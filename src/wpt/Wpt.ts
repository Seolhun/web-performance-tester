import lighthouse from 'lighthouse';
import { RunnerResult } from 'lighthouse/types/externs';
import { launch } from 'chrome-launcher';
import { pipe, concurrent, toAsync, toArray, map } from '@fxts/core';

import { Reporter } from './tools';
import { WptContext, WptConfig, WptAuditPath } from './context';
import * as constants from './constants';

export interface WebPerformanceTesterProps {
  reporter?: Reporter;
}

export interface WptAuditPathItem extends WptAuditPath {
  url: string;
}

const context = WptContext();

class WebPerformanceTester {
  private reporter: Reporter;

  constructor(props?: WebPerformanceTesterProps) {
    this.reporter = props?.reporter ?? new Reporter();
  }

  private async createLighthouseReport(
    lighthouseResult: RunnerResult,
    auditPath: WptAuditPathItem,
  ) {
    console.log(`Reporter:start - "${auditPath.name}"`);
    this.reporter.saveAuditsReportFile(lighthouseResult.report, auditPath.name);
    await this.reporter.createAuditsReport(lighthouseResult.lhr.audits);
    console.log(`Reporter:success - "${auditPath.name}"`);
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
      console.log(`Lighthouse:start - "${auditPath.name}"`);
      const lighthouseResult: RunnerResult = await lighthouse(auditPath.url, {
        ...options,
        screenEmulation:
          options.formFactor === 'desktop' &&
          constants.ScreenEmulationMetrics.desktop,
        maxWaitForLoad: context.config.timeout,
        port: options.port + index,
      });
      await this.createLighthouseReport(lighthouseResult, auditPath);
      console.log(
        `Lighthouse:success - Finish the "${auditPath.name}" wpt test`,
      );
    } catch (error) {
      console.error(`Lighthouse:fail - "${auditPath.name}"`);
      console.error('Lighthouse:fail - ', error);
    } finally {
      chrome.kill();
    }
  }

  async run() {
    try {
      let index = 0;

      console.log('Run:start');
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
      console.log('Run:success - All wpt tests were finished');
    } catch (error) {
      console.error('Run:fail - ', error);
    }
  }
}

export { WebPerformanceTester };
export default WebPerformanceTester;
