import { EmulatedFormFactorType } from './WTPConfig';

// port	                  Only specifies which port to use, Chrome is not launched for you.
// chromeFlags	          Ignored, Chrome is not launched for you.
// outputPath	            Ignored, output is returned as string in .report property.
// saveAssets	            Ignored, artifacts are returned in .artifacts property.
// view	                  Ignored, use the opn npm module if you want this functionality.
// enableErrorReporting	  Ignored, error reporting is always disabled for node.
// listAllAudits	        Ignored, not relevant in programmatic use.
// listTraceCategories	  Ignored, not relevant in programmatic use.
// configPath	            Ignored, pass the config in as the 3rd argument to lighthouse.
// preset	                Ignored, pass the config in as the 3rd argument to lighthouse.
// verbose	              Ignored, use logLevel instead.
// quiet	                Ignored, use logLevel instead.

interface WTPLighthouseConfigProps {
  chromeFlags?: string[];
  emulatedFormFactor?: EmulatedFormFactorType;
  output?: string;
  outputPath?: string;
  port?: number;
}

/**
 * @see https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically
 */
class WTPLighthouseConfig implements WTPLighthouseConfigProps {
  chromeFlags?: string[];
  emulatedFormFactor?: 'mobile' | 'desktop' | undefined;
  output?: string;
  outputPath?: string | undefined;
  port?: number | undefined;

  constructor(props: WTPLighthouseConfigProps) {
    this.chromeFlags = props.chromeFlags || ['--show-paint-rects'];
    this.emulatedFormFactor = props.emulatedFormFactor || 'mobile';
    this.output = props.output || 'html';
    this.outputPath = props.outputPath || './reports';
    this.port = props.port || 8080;
  }
}

export { WTPLighthouseConfig, WTPLighthouseConfigProps };
export default WTPLighthouseConfig;
