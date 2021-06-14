import fs from 'fs';
import dayjs from 'dayjs';

import { WPTLighthouseField, WPTOutputType } from '@seolhun/web-performance-tester-models';

interface ReporterBuilderProps {}

class ReporterBuilder implements ReporterBuilderProps {
  private config: any;
  private rootPath: string;

  constructor(config: any) {
    this.config = config;
    this.rootPath = `${process.cwd()}/${config.options.outputPath}`;
  }

  createCustomReport = (audits: any, auditKey: string, auditItemKeys: string[]) => {
    const report = auditItemKeys.reduce((obj, key) => {
      return {
        ...obj,
        [key]: new WPTLighthouseField(audits[key]),
      };
    }, {});
    return {
      [auditKey]: report,
    };
  };

  saveReport(report: any, type: WPTOutputType = this.config.options.output) {
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
