import fs from 'fs';

import { WTPConfig } from '@seolhun/web-performance-tester-models';

interface ConfigurationBuilderProps {}

class ConfigurationBuilder implements ConfigurationBuilderProps {
  private config: WTPConfig;

  constructor() {
    const jsonConfigPath = `${process.cwd()}/wpt.config.json`;
    const configString = fs.readFileSync(jsonConfigPath, 'utf8');
    const config = JSON.parse(configString);
    this.config = new WTPConfig(config);
  }

  getConfig(): WTPConfig {
    return this.config;
  }
}

export { ConfigurationBuilder, ConfigurationBuilderProps };
export default ConfigurationBuilder;
