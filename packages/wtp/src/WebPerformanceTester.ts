const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

import chalk from 'chalk';

import {
  ConfigurationBuilder,
  AuditerBuilder,
  TesterBuilder,
  ReporterBuilder,
} from '@seolhun/web-performance-tester-builder';
import { WTPLighthouseConfigProps } from '@seolhun/web-performance-tester-types';

class WebPerformanceTester {
  Config: ConfigurationBuilder;
  Auditer: AuditerBuilder;
  Tester: TesterBuilder;
  Reporter: ReporterBuilder;

  constructor() {
    this.Config = new ConfigurationBuilder();
    this.Auditer = new AuditerBuilder();
    this.Tester = new TesterBuilder();
    this.Reporter = new ReporterBuilder(this.Config.getConfig());
  }

  async launchChromeAndRunLighthouse(
    baseUrl: string,
    options: WTPLighthouseConfigProps,
    config = null,
  ) {
    const { subRoutes } = this.Config.getConfig();

    const chrome = await chromeLauncher.launch({ chromeFlags: options.chromeFlags });
    options.port = chrome.port;

    await this.runLighthouse(baseUrl, options, config);
    const isDone = await this.runSubRoutes(subRoutes, options, config);
    if (isDone) {
      chrome.kill();
    }
  }

  async runLighthouse(url: string, options: WTPLighthouseConfigProps, config = null) {
    const results = await lighthouse(url, options, config);
    this.createLighthouseReport(results);
    return true;
  }

  async runSubRoutes(
    subRoutes: string[] | undefined,
    options: WTPLighthouseConfigProps,
    config = null,
    currentIndex = 0,
  ): Promise<boolean> {
    if (!Array.isArray(subRoutes)) {
      return await true;
    }

    if (subRoutes.length - 1 < currentIndex) {
      return await true;
    }

    const { baseUrl } = this.Config.getConfig();

    const route = subRoutes[currentIndex];
    const targetUrl = `${baseUrl}${route}`;
    const result = await this.runLighthouse(targetUrl, options, config);
    if (result) {
      return await this.runSubRoutes(subRoutes, options, config, currentIndex + 1);
    }
    return await true;
  }

  createLighthouseReport(lighthouseResult: any) {
    const auditedFields = this.Auditer.getTestFields();

    console.log(chalk.yellow('=*=*=*= SaveReport Start =*=*=*='));
    this.Reporter.saveReport(lighthouseResult.report);
    console.log(chalk.yellow('=*=*=*= SaveReport End =*=*=*='));

    console.log(chalk.yellow('=*=*=*= CreateCustomReport Start =*=*=*='));
    this.Reporter.createCustomReport(lighthouseResult.lhr.audits, auditedFields);
    console.log(chalk.yellow('=*=*=*= CreateCustomReport End =*=*=*='));
  }

  run() {
    const { baseUrl, options } = this.Config.getConfig();

    this.launchChromeAndRunLighthouse(baseUrl, options || {});
  }
}

export default WebPerformanceTester;
