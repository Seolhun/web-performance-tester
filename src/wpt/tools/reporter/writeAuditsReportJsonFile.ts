import fs from 'fs';
import dayjs from 'dayjs';
import { pipe, join } from '@fxts/core';

import { makeReportDirectories } from './makeReportDirectories';
import { WptLightAuditResult } from './Reporter.types';

export function writeAuditsReportJsonFile(
  lighthouseAudits: WptLightAuditResult,
  directoryName = '',
) {
  const targetDirectoryPath = makeReportDirectories(directoryName);

  const outputName = dayjs().format('YY-MM-DD_HH:mm');
  const reportFile = `${outputName}_audits.json`;
  const targetPath = pipe([targetDirectoryPath, reportFile], join('/'));

  const data = JSON.stringify(lighthouseAudits, null, 2);
  fs.writeFileSync(targetPath, data, 'utf-8');
}
