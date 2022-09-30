import fs from 'fs';
import path from 'path';
import dayjs, { Dayjs } from 'dayjs';

import { WptOutputType } from '../WptConfig';
import { WptLighthouseConfig, WptLighthouseConfigProps } from '../configs';

export interface IReporterBuilder {
  createAuditsReport: (lighthouseAudits: any) => Promise<void>;
  saveReportFile: (
    lighthouseResult: any,
    reportFileName: string,
    type?: WptOutputType,
  ) => void;
}

class ReporterBuilder implements IReporterBuilder {
  private lighthouseConfig: WptLighthouseConfig;
  private reportAt: Dayjs;
  private directoryPath: string;

  constructor(lighthouseConfig: WptLighthouseConfigProps) {
    this.lighthouseConfig = new WptLighthouseConfig(lighthouseConfig);
    this.reportAt = dayjs();
    this.directoryPath = path.resolve(
      process.cwd(),
      this.lighthouseConfig.outputPath,
      this.reportAt.format('YY-MM-DD_HH:mm'),
    );
  }

  async createAuditsReport(_lighthouseAudits: any) {
    console.log('createAuditsReport');
  }

  saveReportFile(
    lighthouseResult: any,
    reportFileName: string,
    type: WptOutputType = this.lighthouseConfig.output,
  ) {
    if (!fs.existsSync(this.directoryPath)) {
      fs.mkdirSync(this.directoryPath, { recursive: true });
    }

    fs.writeFileSync(
      `${this.directoryPath}/${reportFileName}.${type}`,
      lighthouseResult,
      'utf8',
    );
  }
}

export { ReporterBuilder };
export default ReporterBuilder;
