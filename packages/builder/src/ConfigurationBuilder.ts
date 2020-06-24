import fs from 'fs';

import { WTPConfig } from '@seolhun/web-performance-tester-models';
import { WTPConfigProps } from '@seolhun/web-performance-tester-types';
import { getRootPath } from '@seolhun/web-performance-tester-utils';

export interface ConfigurationBuilderProps {
  getConfig: () => WTPConfigProps;
}

class ConfigurationBuilder implements ConfigurationBuilderProps {
  private config: WTPConfig;

  constructor() {
    this.config = this.readConfiguration();
  }

  private readConfiguration(): WTPConfig {
    // Will be updated root path using configuration root
    const jsonConfigPath = `${getRootPath()}/wpt.config.json`;
    const configString = fs.readFileSync(jsonConfigPath, 'utf8');
    const config = JSON.parse(configString);
    return new WTPConfig(config);
  }

  getConfig(): WTPConfig {
    return this.config;
  }
}

export default ConfigurationBuilder;
