import fs from 'fs'
import dayjs from 'dayjs'

import { LighthouseField } from '../models'
import { WPTOutputType } from '../WptConfig'
import { WptLighthouseConfig, WptLighthouseConfigProps } from '../configs'

export interface IReporterBuilder {
  createReport: (audits: any, auditKey: string, auditItemKeys: string[]) => any;
  saveReport: (report: any, type?: WPTOutputType) => void;
}

class ReporterBuilder implements IReporterBuilder {
  private config: WptLighthouseConfig;
  private rootPath: string;

  constructor (props: WptLighthouseConfigProps) {
    this.config = new WptLighthouseConfig(props)
    this.rootPath = `${process.cwd()}/${this.config.outputPath}`
  }

  createReport = (audits: any, auditKey: string, auditItemKeys: string[]) => {
    const report = auditItemKeys.reduce((obj, key) => {
      return {
        ...obj,
        [key]: new LighthouseField(audits[key])
      }
    }, {})
    return {
      [auditKey]: report
    }
  };

  saveReport (report: any, type: WPTOutputType = this.config.output) {
    if (!fs.existsSync(this.rootPath)) {
      fs.mkdirSync(this.rootPath)
    }
    fs.writeFileSync(
      `${this.rootPath}/${dayjs().format('YYYY-MM-DD HH:mm:ss')}.${type}`,
      report,
      'utf8'
    )
  }
}

export { ReporterBuilder }
export default ReporterBuilder
