const chalk = require('chalk')
const puppeteer = require('puppeteer')
const fs = require('fs')
const mkdirp = require('mkdirp')
const os = require('os')
const path = require('path')
const chromeLauncher = require('chrome-launcher')
const util = require('util')
const request = require('request')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

const OPTIONS = {
  output: 'json'
};

module.exports = async function() {
  console.log(chalk.yellow('=*=*=*= Setup Puppeteer =*=*=*='));

  // Chrome Launch
  const chrome = await chromeLauncher.launch(OPTIONS);
  OPTIONS.port = chrome.port;

  // Puppeteer Connection
  const resp = await util.promisify(request)(`http://localhost:${OPTIONS.port}/json/version`);
  const { webSocketDebuggerUrl } = JSON.parse(resp.body);
  const browser = await puppeteer.connect({browserWSEndpoint: webSocketDebuggerUrl});

  // This global is not available inside tests but only in global teardown
  global.__BROWSER_GLOBAL__ = browser;
  global.__BROWSER_CHROME__ = chrome;

  // Instead, we expose the connection details via file system to be used in tests
  mkdirp.sync(DIR);
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
  fs.writeFileSync(path.join(DIR, 'port'), chrome.port);

  // // 나중에 환경변수로 입력해야함
  // const id = 'demo@ab180.co'; // process.env.AIRBRIDGE_TEST_USER
  // const pw = 'public_demo'; // process.env.AIRBRIDGE_TEST_PW

  // // login
  // const page = await browser.newPage()
  // await page.goto('https://airbridge.io/d/#/signin', {waitUntil: 'networkidle0'})
  // await page.type('[name="email"]', id)
  // await page.type('[name="password"]', pw)
  // await page.click('.submit-btn')
  // await page.goto('https://google.com')
  // await page.close();
}
