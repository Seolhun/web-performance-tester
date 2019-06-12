import fs from 'fs';

import dayjs from 'dayjs';

import { LighthouseFieldResponse, WTPConfig } from '../models';
import { OutputType } from '../types';
import { getRootPath } from '../utils';

export interface ReporterBuilderProps {

}

class ReporterBuilder implements ReporterBuilderProps {
  private config: any;
  private rootPath: string;

  constructor(config: any) {
    this.config = config;
    this.rootPath = `${getRootPath()}/${config.options.outputPath}`;
  }

  createCustomReport = (response: any, auditedFields: string[]) => {
    const report = auditedFields.reduce((obj, key) => {
      return {
        ...obj,
        [key]: new LighthouseFieldResponse(response[key]),
      };
    }, {});
    return report;
  }

  saveReport(report: any, type: OutputType = this.config.options.output) {
    if (!fs.existsSync(this.rootPath)) {
      fs.mkdirSync(this.rootPath);
    }
    fs.writeFileSync(`${this.rootPath}/${dayjs().format('YYYY-MM-DD HH:mm:ss')}.${type}`, report, 'utf8');
  }

  sendToServer() {
    // Implementation
  }
}

export default ReporterBuilder;
