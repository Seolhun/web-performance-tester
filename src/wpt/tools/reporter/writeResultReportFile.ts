import fs from 'fs';
import dayjs from 'dayjs';
import { pipe, join } from '@fxts/core';

import { WptContext } from '../../context';
import { makeReportDirectories } from './makeReportDirectories';

const context = WptContext();

export function writeResultReportFile(
  lighthouseResultReport: string | string[],
  directoryName = '',
) {
  const targetDirectoryPath = makeReportDirectories(directoryName);

  const outputName = dayjs().format('YY-MM-DD_HH:mm');
  const outputType = context.lighthouseConfig.output;
  const reportFile = `${outputName}.${outputType}`;

  const targetPath = pipe([targetDirectoryPath, reportFile], join('/'));
  const data = `${lighthouseResultReport}`;
  fs.writeFileSync(targetPath, data, 'utf-8');
}
