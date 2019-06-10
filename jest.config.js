module.exports = {
  globalSetup: './src/__config__/Setup.js',
  testEnvironment: './src/__config__/PuppeteerEnvironment.js',
  globalTeardown: './src/__config__/Teardown.js',
  setupFilesAfterEnv: [
    './src/__config__/SetupTestFrameworkScriptFile.js',
  ],
}
