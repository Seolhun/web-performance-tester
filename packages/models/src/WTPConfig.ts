import { WTPConfigProps } from '@seolhun/web-performance-tester-types';

import WTPLighthouseConfig from './WTPLighthouseConfig';

class WTPConfig implements WTPConfigProps {
  baseUrl: string;
  subRoutes: string[] | undefined;
  timeout: number | undefined;
  options: import('@seolhun/web-performance-tester-types').WTPLighthouseConfigProps | undefined;
  builder: import('@seolhun/web-performance-tester-types').BuilderConfigProps | undefined;
  auditer: import('@seolhun/web-performance-tester-types').AuditerConfigProps | undefined;
  tester: import('@seolhun/web-performance-tester-types').TesterConfigProps | undefined;
  reporter: import('@seolhun/web-performance-tester-types').ReporterConfigProps | undefined;

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

export default WTPConfig;
