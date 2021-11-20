import chromeLauncher from 'chrome-launcher'
import chalk from 'chalk'

import {
  ConfigurationBuilder,
  AuditorBuilder,
  TesterBuilder,
  ReporterBuilder
} from '../builders'
import { WPTLighthouseConfigProps } from '../wpt'
import { WPTTestTypes } from '../constants'

const lighthouse = require('lighthouse')

class WebPerformanceTester {
  config: ConfigurationBuilder;
  auditor: AuditorBuilder;
  tester: TesterBuilder;
  reporter: ReporterBuilder;

  constructor () {
    this.config = new ConfigurationBuilder()
    this.auditor = new AuditorBuilder()
    this.tester = new TesterBuilder()
    this.reporter = new ReporterBuilder(this.config.getConfig())
  }

  private createLighthouseReport (lighthouseResult: any) {
    console.log(chalk.yellow('=*=*=*= SaveReport Start =*=*=*='))
    this.reporter.saveReport(lighthouseResult.report)
    console.log(chalk.yellow('=*=*=*= SaveReport End =*=*=*='))

    console.log(chalk.yellow('=*=*=*= CreateCustomReport Start =*=*=*='))
    const customReport = Object.values(WPTTestTypes).reduce((obj, value) => {
      const auditedFields = this.auditor.getTestFields(value)
      const result = this.reporter.createCustomReport(
        lighthouseResult.lhr.audits,
        value,
        auditedFields
      )
      return {
        ...obj,
        ...result
      }
    }, {})
    console.log(customReport)
    console.log(chalk.yellow('=*=*=*= CreateCustomReport End =*=*=*='))
  }

  private async runLighthouse (url: string, options: WPTLighthouseConfigProps, config = null) {
    const result = await lighthouse(url, options, config)
    this.createLighthouseReport(result)
    return true
  }

  private async runSubRoutes (
    subRoutes: string[] | undefined,
    options: WPTLighthouseConfigProps,
    config = null,
    currentIndex = 0
  ): Promise<boolean> {
    if (!Array.isArray(subRoutes)) {
      return true
    }
    if (subRoutes.length - 1 < currentIndex) {
      return true
    }

    const { baseUrl } = this.config.getConfig()
    const route = subRoutes[currentIndex]
    const targetUrl = `${baseUrl}${route}`
    await this.runLighthouse(targetUrl, options, config)
    return await this.runSubRoutes(subRoutes, options, config, currentIndex + 1)
  }

  private async launchChromeAndRunLighthouse (
    baseUrl: string,
    options: WPTLighthouseConfigProps,
    config = null
  ) {
    const { subRoutes } = this.config.getConfig()
    const chrome = await chromeLauncher.launch({ chromeFlags: options.chromeFlags })
    options.port = chrome.port

    await this.runLighthouse(baseUrl, options, config)
    const isDone = await this.runSubRoutes(subRoutes, options, config)
    if (isDone) {
      chrome.kill()
    }
  }

  run () {
    const { baseUrl, options } = this.config.getConfig()
    this.launchChromeAndRunLighthouse(baseUrl, options || {})
  }
}

export { WebPerformanceTester }
export default WebPerformanceTester
