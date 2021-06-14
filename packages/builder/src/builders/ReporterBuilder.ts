import fs from 'fs';

import dayjs from 'dayjs';

import { LighthouseField, OutputType } from '@seolhun/web-performance-tester-models';

interface ReporterBuilderProps {}

class ReporterBuilder implements ReporterBuilderProps {
  private config: any;
  private rootPath: string;

  constructor(config: any) {
    this.config = config;
    this.rootPath = `${process.cwd()}/${config.options.outputPath}`;
  }

  createCustomReport = (response: any, auditedFields: string[]) => {
    const report = auditedFields.reduce((obj, key) => {
      return {
        ...obj,
        [key]: new LighthouseField(response[key]),
      };
    }, {});
    return report;
  };

  saveReport(report: any, type: OutputType = this.config.options.output) {
    if (!fs.existsSync(this.rootPath)) {
      fs.mkdirSync(this.rootPath);
    }
    fs.writeFileSync(
      `${this.rootPath}/${dayjs().format('YYYY-MM-DD HH:mm:ss')}.${type}`,
      report,
      'utf8',
    );
  }
}

export { ReporterBuilder, ReporterBuilderProps };
export default ReporterBuilder;
