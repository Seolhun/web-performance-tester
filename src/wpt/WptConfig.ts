import fs from 'fs'
import { WptLighthouseConfig, WptLighthouseConfigProps } from './configs'

export interface WptConfigProps {
  origin: string;

  /**
   * @default []
   */
  pathnames?: string[];

  /**
   * @default 10000
   */
  timeout?: number;

  /**
   * lighthouse Option
   */
  options?: WptLighthouseConfigProps;
}

export type WPTOutputType = 'csv' | 'html' | 'json';

class WptConfig implements WptConfigProps {
  origin: string;
  pathnames: string[];
  timeout?: number;
  options: WptLighthouseConfigProps;

  constructor () {
    const jsonConfigPath = `${process.cwd()}/wpt.config.json`
    const configString = fs.readFileSync(jsonConfigPath, 'utf8') ?? '{}'
    const config = JSON.parse(configString) as WptConfigProps
    if (!config?.origin) {
      throw new Error('origin is required')
    }
    this.origin = config.origin
    this.pathnames = config.pathnames || []
    this.timeout = config.timeout || 10000
    this.options = new WptLighthouseConfig(config.options || {})
  }
}

export { WptConfig }
export default WptConfig
