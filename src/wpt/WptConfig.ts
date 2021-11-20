import fs from 'fs'
import { WptLighthouseConfig, WptLighthouseConfigProps } from './configs'

export type WptAuditPath = {
  name: string;
  pathname: string;
}

export interface WptConfigProps {
  name: string;

  origin: string;

  auditPaths: WptAuditPath[];

  /**
   * @default 20000
   */
  timeout?: number;

  /**
   * @default 1
   * Current concurrency has error because of lighthouse concurrency
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

  constructor () {
    const jsonConfigPath = `${process.cwd()}/wpt.config.json`
    const configString = fs.readFileSync(jsonConfigPath, 'utf8') ?? '{}'
    const config = JSON.parse(configString) as WptConfigProps
    if (!config?.name) {
      throw new Error('name is required')
    }
    if (!config?.origin) {
      throw new Error('origin is required')
    }
    if (!config?.auditPaths) {
      throw new Error('auditPaths are required')
    }

    this.name = config.name
    this.origin = config.origin
    this.auditPaths = config.auditPaths ?? []
    this.timeout = config.timeout ?? 20000
    this.concurrency = config.concurrency ?? 1
    this.options = new WptLighthouseConfig(config.options ?? {})
  }
}

export { WptConfig }
export default WptConfig
