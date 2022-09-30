import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';

import { IReporterBuilder, ReporterBuilder } from './builders';
import * as constants from './constants';
import WptConfig from './WptConfig';

export interface WebPerformanceTesterProps {
  reporter?: IReporterBuilder;
}

type WptAuditPathQueueItem = {
  name: string;
  url: string;
};

class WebPerformanceTester {
  private config: WptConfig;
  private auditPathsQueue: WptAuditPathQueueItem[] = [];
  private reporter: IReporterBuilder;

  constructor(props?: WebPerformanceTesterProps) {
    this.config = new WptConfig();
    this.auditPathsQueue = this.config.auditPaths.map((auditPath) => {
      return {
        ...auditPath,
        url: `${this.config.origin}${auditPath.pathname}`,
      };
    });
    this.reporter = props?.reporter ?? new ReporterBuilder(this.config.options);
  }

  private async createLighthouseReport(
    lighthouseResult: any,
    auditPath: WptAuditPathQueueItem,
  ) {
    console.log('Lighthouse report - Start');
    this.reporter.saveReportFile(lighthouseResult.report, auditPath.name);
    await this.reporter.createAuditsReport(lighthouseResult.lhr.audits);
    console.log('Lighthouse report - End');
  }

  private async runLighthouse(
    auditPath: WptAuditPathQueueItem,
    index: number,
    options: WptConfig['options'],
  ) {
    const chrome = await launch({
      chromeFlags: options.chromeFlags,
      port: options.port + index,
    });
    try {
      const lighthouseResult = await lighthouse(auditPath.url, {
        ...options,
        screenEmulation:
          options.formFactor === 'desktop' &&
          constants.ScreenEmulationMetrics.desktop,
        maxWaitForLoad: this.config.timeout,
        port: options.port + index,
      });
      await this.createLighthouseReport(lighthouseResult, auditPath);
    } catch (error) {
      console.log('lighthouse was failed', auditPath.name);
      console.log(error);
    } finally {
      chrome.kill();
    }
  }

  private async processTaskQueue(): Promise<boolean> {
    if (!this.auditPathsQueue.length) {
      return true;
    }

    const { concurrency, options } = this.config;
    const processingAuditPaths = this.auditPathsQueue.splice(0, concurrency);
    await Promise.all(
      processingAuditPaths.map((auditPath, i) =>
        this.runLighthouse(auditPath, i, options),
      ),
    );
    return await this.processTaskQueue();
  }

  async run() {
    try {
      const isDone = await this.processTaskQueue();
      if (isDone) {
        console.log('All test tasks were finished');
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export { WebPerformanceTester };
export default WebPerformanceTester;
