import { WptOutputType } from './Wpt.Config';

export type ChromeFlagType =
  | '--headless'
  | '--show-paint-rects'
  | '--disable-gpu';

export type FormFactorType = 'mobile' | 'desktop';

export interface WptLighthouseConfigProps {
  /**
   * @default [--headless]
   */
  chromeFlags?: ChromeFlagType[];

  /**
   * @default desktop
   */
  formFactor?: FormFactorType;

  /**
   * @default json
   */
  output?: WptOutputType;

  /**
   * @default ./reports
   */
  outputPath?: string;

  /**
   * @default 8080
   */
  port?: number;
}

/**
 * @see https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically
 */
class WptLighthouseConfig implements WptLighthouseConfigProps {
  chromeFlags: ChromeFlagType[];
  formFactor: FormFactorType;
  output: WptOutputType;
  outputPath: string;
  port: number;

  constructor(props?: WptLighthouseConfigProps) {
    this.chromeFlags = props?.chromeFlags ?? ['--headless'];
    this.formFactor = props?.formFactor ?? 'desktop';
    this.output = props?.output ?? 'json';
    this.outputPath = props?.outputPath ?? './reports';
    this.port = props?.port ?? 8080;
  }
}

export { WptLighthouseConfig };
export default WptLighthouseConfig;
