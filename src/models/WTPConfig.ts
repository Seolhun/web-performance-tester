import { WTPConfigProps } from '../types';
import WTPLighthouseConfig from './WTPLighthouseConfig';
;

class WTPConfig implements WTPConfigProps {
  baseUrl: string;
  subRoutes: string[] | undefined;
  timeout: number | undefined;
  options: import('../types').WTPLighthouseConfigProps | undefined;
  builder: import('../types').BuilderConfigProps | undefined;
  auditer: import('../types').AuditerConfigProps | undefined;
  tester: import('../types').TesterConfigProps | undefined;
  reporter: import('../types').ReporterConfigProps | undefined;

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
