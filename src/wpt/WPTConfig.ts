import { WPTLighthouseConfig, WPTLighthouseConfigProps } from './WPTLighthouseConfig';

import { WPTTestTypes } from '../constants';

/**
 * for JS configuration
 */
export interface WPTBuilderConfigProps {}

/**
 * for JS configuration
 */
export interface WPTAuditerConfigProps {}

/**
 * for JS configuration
 */
export interface WPTTesterConfigProps {}

/**
 * for JS configuration
 */
export interface WPTReporterConfigProps {}

export interface WPTConfigProps {
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
   * @see packages/models/src/WPT/WPTLighthouseConfig.ts
   */
  options?: WPTLighthouseConfigProps;

  /**
   * @default {}
   */
  builder?: WPTBuilderConfigProps;

  /**
   * @default {}
   */
  auditer?: WPTAuditerConfigProps;

  /**
   * @default {}
   */
  tester?: WPTTesterConfigProps;

  /**
   * @default {}
   */
  reporter?: WPTReporterConfigProps;
}

export type WPTTestType =
  | WPTTestTypes
  | 'ACCESSIBILITY'
  | 'BEST_PRACTICES'
  | 'PERFORMANCES'
  | 'PWA'
  | 'SEO';

export type WPTEmulatedFormFactorType = 'mobile' | 'desktop';

export type WPTOutputType = 'csv' | 'html' | 'json';

export class WPTConfig implements WPTConfigProps {
  baseUrl: string;
  subRoutes: string[] | undefined;
  timeout: number | undefined;
  options: WPTLighthouseConfigProps | undefined;
  builder: WPTBuilderConfigProps | undefined;
  auditer: WPTAuditerConfigProps | undefined;
  tester: WPTTesterConfigProps | undefined;
  reporter: WPTReporterConfigProps | undefined;

  constructor(props: WPTConfigProps) {
    this.baseUrl = props.baseUrl;
    this.subRoutes = props.subRoutes || [];
    this.timeout = props.timeout || 10000;
    this.options = props.options || new WPTLighthouseConfig(props.options || {});
    this.builder = props.builder || {};
    this.auditer = props.auditer || {};
    this.tester = props.tester || {};
    this.reporter = props.reporter || {};
  }
}

export default WPTConfig;
