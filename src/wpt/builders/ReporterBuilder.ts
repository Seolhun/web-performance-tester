import fs from 'fs';
import path from 'path';
import dayjs, { Dayjs } from 'dayjs';
import { Result as AuditResult } from 'lighthouse/types/lhr/audit-result';
import { pipe, filter, join } from '@fxts/core';

import { WptOutputType } from '../context/Wpt.Config';
import { WptContext } from '../context';

const context = WptContext();

export interface IReporterBuilder {
  createAuditsReport: (
    lighthouseAudits: Record<string, AuditResult>,
  ) => Promise<void>;
  saveAuditsReportFile: (
    lighthouseResultReport: string | string[],
    reportFileName: string,
    type?: WptOutputType,
  ) => void;
}

class ReporterBuilder implements IReporterBuilder {
  private reportAt: Dayjs;
  private directoryPath: string;

  constructor() {
    this.reportAt = dayjs();
    this.directoryPath = path.resolve(
      process.cwd(),
      context.lighthouseConfig.outputPath,
    );
  }

  private createDirectoryPath(directoryName: string) {
    const targetDirectoryPath = pipe(
      [this.directoryPath, directoryName],
      filter((value) => value),
      join('/'),
    );

    if (!fs.existsSync(targetDirectoryPath)) {
      fs.mkdirSync(targetDirectoryPath, { recursive: true });
    }

    return targetDirectoryPath;
  }

  async createAuditsReport(_lighthouseAudits: Record<string, AuditResult>) {
    console.log(_lighthouseAudits);
  }

  saveAuditsReportFile(
    lighthouseResultReport: string | string[],
    directoryName = '',
  ) {
    const targetDirectoryPath = this.createDirectoryPath(directoryName);

    const outputName = this.reportAt.format('YY-MM-DD_HH:mm');
    const outputType = context.lighthouseConfig.output;
    const reportFile = `${outputName}.${outputType}`;
    const targetPath = pipe([targetDirectoryPath, reportFile], join('/'));

    fs.writeFileSync(targetPath, `${lighthouseResultReport}`, 'utf-8');
  }
}

export { ReporterBuilder };
export default ReporterBuilder;
