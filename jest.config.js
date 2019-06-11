module.exports = {
  globalSetup: './src/__config__/SetupPuppeteer.js',
  testEnvironment: './src/__config__/SetupPuppeteerEnvironment.js',
  globalTeardown: './src/__config__/Teardown.js',
  // setupFilesAfterEnv: [
  //   './src/__config__/SetupTestFrameworkScriptFile.js',
  // ],
  rootDir: '.',
  transform: {
    '^.+\\.ts?(x)$': 'ts-jest',
    '^.+\\.js?(x)$': 'jest',
  },
  testMatch: [
    '<rootDir>/src/__test__/**/*.(test|spec).ts?(x)',
    '<rootDir>/src/__test__/**/*.(test|spec).js?(x)',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
  ],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
    '^builders/(.*)$': '<rootDir>/src/builders/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^models/(.*)$': '<rootDir>/src/models/$1',
    '^types/(.*)$': '<rootDir>/src/types/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/__config__/',
  ],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: 'tsconfig.json',
    },
  },
  cacheDirectory: '<rootDir>/.cache/unit',
};
