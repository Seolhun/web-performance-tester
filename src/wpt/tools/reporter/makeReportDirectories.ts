import fs from 'fs';
import path from 'path';
import { pipe, filter, join } from '@fxts/core';

import { WptContext } from '../../context';

const context = WptContext();

const rootDirectoryPath = path.resolve(
  process.cwd(),
  context.lighthouseConfig.outputPath,
);

export function makeReportDirectories(directoryName: string) {
  const reportDirectoryPath = pipe(
    [rootDirectoryPath, directoryName],
    filter((value) => value),
    join('/'),
  );

  if (!fs.existsSync(reportDirectoryPath)) {
    fs.mkdirSync(reportDirectoryPath, { recursive: true });
  }
  return reportDirectoryPath;
}
