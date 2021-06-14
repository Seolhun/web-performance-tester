const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
import chalk from 'chalk';

import {
  ConfigurationBuilder,
  AuditerBuilder,
  TesterBuilder,
  ReporterBuilder,
} from '@seolhun/web-performance-tester-builder';
import { WTPLighthouseConfigProps } from '@seolhun/web-performance-tester-models';

class WebPerformanceTester {
  config: ConfigurationBuilder;
  auditer: AuditerBuilder;
  tester: TesterBuilder;
  reporter: ReporterBuilder;

  constructor() {
    this.config = new ConfigurationBuilder();
    this.auditer = new AuditerBuilder();
    this.tester = new TesterBuilder();
    this.reporter = new ReporterBuilder(this.config.getConfig());
  }

  private createLighthouseReport(lighthouseResult: any) {
    const auditedFields = this.auditer.getTestFields();
    console.log(chalk.yellow('=*=*=*= SaveReport Start =*=*=*='));
    this.reporter.saveReport(lighthouseResult.report);
    console.log(chalk.yellow('=*=*=*= SaveReport End =*=*=*='));

    console.log(chalk.yellow('=*=*=*= CreateCustomReport Start =*=*=*='));
    this.reporter.createCustomReport(lighthouseResult.lhr.audits, auditedFields);
    console.log(chalk.yellow('=*=*=*= CreateCustomReport End =*=*=*='));
  }

  private async runLighthouse(url: string, options: WTPLighthouseConfigProps, config = null) {
    const result = await lighthouse(url, options, config);
    this.createLighthouseReport(result);
    return true;
  }

  private async runSubRoutes(
    subRoutes: string[] | undefined,
    options: WTPLighthouseConfigProps,
    config = null,
    currentIndex = 0,
  ): Promise<boolean> {
    if (!Array.isArray(subRoutes)) {
      return true;
    }
    if (subRoutes.length - 1 < currentIndex) {
      return true;
    }

    const { baseUrl } = this.config.getConfig();
    const route = subRoutes[currentIndex];
    const targetUrl = `${baseUrl}${route}`;
    await this.runLighthouse(targetUrl, options, config);
    return await this.runSubRoutes(subRoutes, options, config, currentIndex + 1);
  }

  private async launchChromeAndRunLighthouse(
    baseUrl: string,
    options: WTPLighthouseConfigProps,
    config = null,
  ) {
    const { subRoutes } = this.config.getConfig();
    const chrome = await chromeLauncher.launch({ chromeFlags: options.chromeFlags });
    options.port = chrome.port;

    await this.runLighthouse(baseUrl, options, config);
    const isDone = await this.runSubRoutes(subRoutes, options, config);
    if (isDone) {
      chrome.kill();
    }
  }

  run() {
    const { baseUrl, options } = this.config.getConfig();
    this.launchChromeAndRunLighthouse(baseUrl, options || {});
  }
}

export { WebPerformanceTester };
export default WebPerformanceTester;
