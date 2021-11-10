import fs from 'fs';

import { WPTConfig } from '@seolhun/web-performance-tester-models';

export interface ConfigurationBuilderProps {}

class ConfigurationBuilder implements ConfigurationBuilderProps {
  private config: WPTConfig;

  constructor() {
    const jsonConfigPath = `${process.cwd()}/wpt.config.json`;
    const configString = fs.readFileSync(jsonConfigPath, 'utf8') ?? "{}";
    const config = JSON.parse(configString);
    this.config = new WPTConfig(config);
  }

  getConfig(): WPTConfig {
    return this.config;
  }
}

export { ConfigurationBuilder };
export default ConfigurationBuilder;
