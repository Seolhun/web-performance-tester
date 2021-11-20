// @ts-ignore
import lighthouse from 'lighthouse'
import { launch } from 'chrome-launcher'
import chalk from 'chalk'

import {
  AuditorBuilder,
  IAuditorBuilder,
  IReporterBuilder,
  ReporterBuilder
} from './builders'
import { WptLighthouseConfigProps } from './configs'
import { WptTestFieldType } from './constants'
import WptConfig from './WptConfig'

interface WebPerformanceTesterProps {
  auditor?: IAuditorBuilder;
  reporter?: IReporterBuilder;
}

class WebPerformanceTester {
  private config: WptConfig;
  private auditor: IAuditorBuilder;
  private reporter: IReporterBuilder;

  constructor (props?: WebPerformanceTesterProps) {
    this.config = new WptConfig()
    this.auditor = props?.auditor ?? new AuditorBuilder()
    this.reporter = props?.reporter ?? new ReporterBuilder(this.config.options)
  }

  private createLighthouseReport (lighthouseResult: any) {
    console.log(chalk.yellow('SaveReport Start'))
    this.reporter.saveReport(lighthouseResult.report)
    console.log(chalk.yellow('SaveReport End'))

    console.log(chalk.yellow('CreateCustomReport Start'))
    const customReport = Object.values(WptTestFieldType).reduce((obj, value) => {
      const auditedFields = this.auditor.getTestFieldList(value)
      const result = this.reporter.createReport(
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
    console.log(chalk.yellow('CreateCustomReport End'))
  }

  private async runLighthouse (url: string, options: WptLighthouseConfigProps, config = null) {
    const result = await lighthouse(url, options, config)
    console.log('@@@', result)
    return result
  }

  private async runPathnames (
    pathnames: string[] | undefined,
    options: WptLighthouseConfigProps,
    config = null,
    currentIndex = 0
  ): Promise<boolean> {
    if (!Array.isArray(pathnames)) {
      return true
    }
    if (pathnames.length - 1 < currentIndex) {
      return true
    }

    const { origin } = this.config
    const route = pathnames[currentIndex]
    const targetUrl = `${origin}${route}`
    await this.runLighthouse(targetUrl, options, config)
    return await this.runPathnames(pathnames, options, config, currentIndex + 1)
  }

  private async launchChromeLighthouse (
    origin: string,
    options: WptLighthouseConfigProps,
    config = null
  ) {
    const { pathnames } = this.config
    const chrome = await launch({ chromeFlags: options.chromeFlags, port: options.port })

    const result = await this.runLighthouse(origin, options, config)
    this.createLighthouseReport(result)
    const isDone = await this.runPathnames(pathnames, options, config)
    if (isDone) {
      chrome.kill()
    }
  }

  async run () {
    const { origin, options } = this.config
    await this.launchChromeLighthouse(origin, options || {})
  }
}

export { WebPerformanceTester }
export default WebPerformanceTester
