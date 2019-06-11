import { TestTypes } from '../constants';
import { WTPLighthouseConfigProps } from '../types';

export interface WTPConfigProps {
  baseUrl: string;

  subRoutes?: string[];
  timeout?: number;
  options?: WTPLighthouseConfigProps,
  builder?: BuilderConfigProps;
  auditer?: AuditerConfigProps;
  tester?: TesterConfigProps;
  reporter?: ReporterConfigProps;
}

export interface BuilderConfigProps {

}

export interface AuditerConfigProps {

}

export interface TesterConfigProps {

}

export interface ReporterConfigProps {

}

export type TestType = TestTypes | 'ACCESSIBILITY' | 'BEST_PRACTICES' | 'PERFORMANCES' | 'PWA' | 'SEO';
