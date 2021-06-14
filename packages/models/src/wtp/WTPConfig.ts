import { WTPLighthouseConfig, WTPLighthouseConfigProps } from './WTPLighthouseConfig';

import { TestTypes } from '../constants';

interface WTPConfigProps {
  baseUrl: string;

  /**
   * @default []
   */
  subRoutes?: string[];

  /**
   * @default 10000
   */
  timeout?: number;

  /**
   * @see packages/models/src/wtp/WTPLighthouseConfig.ts
   */
  options?: WTPLighthouseConfigProps;

  /**
   * @default {}
   */
  builder?: BuilderConfigProps;

  /**
   * @default {}
   */
  auditer?: AuditerConfigProps;

  /**
   * @default {}
   */
  tester?: TesterConfigProps;

  /**
   * @default {}
   */
  reporter?: ReporterConfigProps;
}

/**
 * for JS configuration
 */
interface BuilderConfigProps {}

/**
 * for JS configuration
 */
interface AuditerConfigProps {}

/**
 * for JS configuration
 */
interface TesterConfigProps {}

/**
 * for JS configuration
 */
interface ReporterConfigProps {}

type TestType = TestTypes | 'ACCESSIBILITY' | 'BEST_PRACTICES' | 'PERFORMANCES' | 'PWA' | 'SEO';

export type EmulatedFormFactorType = 'mobile' | 'desktop';

export type OutputType = 'csv' | 'html' | 'json';

class WTPConfig implements WTPConfigProps {
  baseUrl: string;
  subRoutes: string[] | undefined;
  timeout: number | undefined;
  options: WTPLighthouseConfigProps | undefined;
  builder: BuilderConfigProps | undefined;
  auditer: AuditerConfigProps | undefined;
  tester: TesterConfigProps | undefined;
  reporter: ReporterConfigProps | undefined;

  constructor(props: WTPConfigProps) {
    this.baseUrl = props.baseUrl;
    this.subRoutes = props.subRoutes || [];
    this.timeout = props.timeout || 10000;
    this.options = props.options || new WTPLighthouseConfig(props.options || {});
    this.builder = props.builder || {};
    this.auditer = props.auditer || {};
    this.tester = props.tester || {};
    this.reporter = props.reporter || {};
  }
}

export {
  WTPConfig,
  WTPConfigProps,
  BuilderConfigProps,
  AuditerConfigProps,
  TesterConfigProps,
  ReporterConfigProps,
  TestType,
};
export default WTPConfig;
