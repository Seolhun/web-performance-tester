import ejs, { Data, Options } from 'ejs';

import template from './template.ejs';

type ParseHtmlOptions = Options & { async: true; client?: false | undefined };

export function parseToHtml(
  str: string,
  data: Data | undefined,
  options: ParseHtmlOptions,
) {
  ejs.render(str, data, options);
}
