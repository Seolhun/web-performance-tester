import fs from 'fs';
import path from 'path';
import dayjs, { Dayjs } from 'dayjs';
import { pipe, filter, join } from '@fxts/core';

import { WptOutputType, WptContext } from '../../context';
import { WptLightAuditResult } from './Reporter.types';
import { aggregate } from '../../../statistics';

const context = WptContext();

export interface IReporter {
  createAuditsReport: (lighthouseAudits: WptLightAuditResult) => Promise<void>;
  saveAuditsReportFile: (
    lighthouseResultReport: string | string[],
    reportFileName: string,
    type?: WptOutputType,
  ) => void;
}

class Reporter implements IReporter {
  private reportAt: Dayjs;
  private directoryPath: string;

  constructor() {
    this.reportAt = dayjs();
    this.directoryPath = path.resolve(
      process.cwd(),
      context.lighthouseConfig.outputPath,
    );
  }

  private makeDirectories(directoryName: string) {
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

  private writeReportFile(path: string, data: string | NodeJS.ArrayBufferView) {
    fs.writeFileSync(path, data, 'utf-8');
  }

  async createAuditsReport(lighthouseAudits: WptLightAuditResult) {
    console.debug(lighthouseAudits);
    aggregate(lighthouseAudits);
  }

  saveAuditsReportFile(
    lighthouseResultReport: string | string[],
    directoryName = '',
  ) {
    const targetDirectoryPath = this.makeDirectories(directoryName);

    const outputName = this.reportAt.format('YY-MM-DD_HH:mm');
    const outputType = context.lighthouseConfig.output;
    const reportFile = `${outputName}.${outputType}`;
    const targetPath = pipe([targetDirectoryPath, reportFile], join('/'));

    this.writeReportFile(targetPath, `${lighthouseResultReport}`);
  }
}

export { Reporter };
export default Reporter;
