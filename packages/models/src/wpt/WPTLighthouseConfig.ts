import { WPTEmulatedFormFactorType } from './WPTConfig';

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

interface WPTLighthouseConfigProps {
  chromeFlags?: string[];
  emulatedFormFactor?: WPTEmulatedFormFactorType;
  output?: string;
  outputPath?: string;
  port?: number;
}

/**
 * @see https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically
 */
class WPTLighthouseConfig implements WPTLighthouseConfigProps {
  chromeFlags?: string[];
  emulatedFormFactor?: 'mobile' | 'desktop' | undefined;
  output?: string;
  outputPath?: string | undefined;
  port?: number | undefined;

  constructor(props: WPTLighthouseConfigProps) {
    this.chromeFlags = props.chromeFlags || ['--headless'];
    this.emulatedFormFactor = props.emulatedFormFactor || 'mobile';
    this.output = props.output || 'html';
    this.outputPath = props.outputPath || './reports';
    this.port = props.port || 8080;
  }
}

export { WPTLighthouseConfig, WPTLighthouseConfigProps };
export default WPTLighthouseConfig;
