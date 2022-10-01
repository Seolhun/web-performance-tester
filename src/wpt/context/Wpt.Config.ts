import fs from 'fs';
import {
  WptLighthouseConfig,
  WptLighthouseConfigProps,
} from './Wpt.LighthouseConfig';

export interface WptAuditPath {
  name: string;
  pathname: string;
}

export interface WptConfigProps {
  name: string;

  origin: string;

  auditPaths: WptAuditPath[];

  /**
   * @default 30000
   */
  timeout?: number;

  /**
   * @see https://github.com/GoogleChrome/lighthouse/issues/7187#issuecomment-569133443
   * @default 1
   * @todo Current concurrency has error because of lighthouse concurrency
   * ! SyntaxError: The "start lh:gather:loadPage-offlinePass" performance mark has not been set
   */
  concurrency?: number;

  /**
   * lighthouse Option
   */
  options?: WptLighthouseConfigProps;
}

export type WptOutputType = 'csv' | 'html' | 'json';

class WptConfig implements WptConfigProps {
  name: string;
  origin: string;
  auditPaths: WptAuditPath[];
  timeout: number;
  concurrency: number;
  options: WptLighthouseConfig;

  constructor() {
    const jsonConfigPath = `${process.cwd()}/wpt.config.json`;
    const configString = fs.readFileSync(jsonConfigPath, 'utf-8') ?? '{}';
    const config = JSON.parse(configString) as WptConfigProps;
    if (!config?.name) {
      throw new Error('name is required');
    }
    if (!config?.origin) {
      throw new Error('origin is required');
    }
    if (!config?.auditPaths) {
      throw new Error('auditPaths are required');
    }

    this.name = config.name;
    this.origin = config.origin;
    this.auditPaths = config.auditPaths ?? [];
    this.timeout = config.timeout ?? 30000;
    this.concurrency = config.concurrency ?? 1;
    this.options = new WptLighthouseConfig(config.options ?? {});
  }
}

export { WptConfig };
export default WptConfig;
