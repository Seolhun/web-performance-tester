const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

import chalk from 'chalk';

import ConfigurationBuilder from './builders/ConfigurationBuilder';
import AuditerBuilder from './builders/AuditerBuilder';
import TesterBuilder from './builders/TesterBuilder';
import ReporterBuilder from './builders/ReporterBuilder';
import { WTPLighthouseConfigProps } from './types';

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

  launchChromeAndRunLighthouse = (url: string, options: WTPLighthouseConfigProps, config = null) => {
    return chromeLauncher.launch({ chromeFlags: options.chromeFlags }).then((chrome: any) => {
      options.port = chrome.port;
      return lighthouse(url, options, config).then((results: any) => {
        return chrome.kill().then(() => results);
      });
    });
  }

  async run() {
    const config = this.Config.getConfig();
    const auditedFields = this.Auditer.getTestFields();

    const lighthouse = await this.launchChromeAndRunLighthouse(config.baseUrl, config.options || {});

    console.log(chalk.yellow('=*=*=*= SaveReport Start =*=*=*='));
    this.Reporter.saveReport(lighthouse.report);
    console.log(chalk.yellow('=*=*=*= SaveReport End =*=*=*='));

    console.log(chalk.yellow('=*=*=*= CreateCustomReport Start =*=*=*='));
    this.Reporter.createCustomReport(lighthouse.lhr.audits, auditedFields);
    console.log(chalk.yellow('=*=*=*= CreateCustomReport End =*=*=*='));
  }
}

export default WebPerformanceTester;
