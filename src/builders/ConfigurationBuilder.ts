import fs from 'fs';
import path from 'path';

import { WTPConfig } from '../models';
import { WTPConfigProps } from '../types';
import { getRootPath } from '../utils';

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
