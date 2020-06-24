import { WTPLighthouseConfig, WTPLighthouseConfigProps } from './WTPLighthouseConfig';

import { TestTypes } from '../constants';

interface WTPConfigProps {
  baseUrl: string;

  subRoutes?: string[];
  timeout?: number;
  options?: WTPLighthouseConfigProps;
  builder?: BuilderConfigProps;
  auditer?: AuditerConfigProps;
  tester?: TesterConfigProps;
  reporter?: ReporterConfigProps;
}

interface BuilderConfigProps {}

interface AuditerConfigProps {}

interface TesterConfigProps {}

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
    this.timeout = props.timeout || 100000;
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
