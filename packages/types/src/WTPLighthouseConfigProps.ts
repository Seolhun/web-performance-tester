export interface WTPLighthouseConfigProps {
  chromeFlags?: string[];
  emulatedFormFactor?: EmulatedFormFactorType;
  output?: string;
  outputPath?: string;
  port?: number;
}

export type EmulatedFormFactorType = 'mobile' | 'desktop';

export type OutputType = 'csv' | 'html' | 'json';
