const chalk = require('chalk');
const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer');
const fs = require('fs');
const os = require('os');
const path = require('path');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

class SetupPuppeteerEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    console.log(chalk.yellow('=*=*=*= Setup Puppeteer Environment =*=*=*='));

    const wsEndpoint = fs.readFileSync(path.join(DIR, 'wsEndpoint'), 'utf8');
    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found');
    }

    this.global.__BROWSER__ = await puppeteer.connect({
      browserWSEndpoint: wsEndpoint,
    });

    const port = fs.readFileSync(path.join(DIR, 'port'), 'utf8');
    this.global.__PORT__ = port;
  }

  async teardown() {
    console.log(chalk.yellow('Teardown Test Environment.'));
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = SetupPuppeteerEnvironment;
