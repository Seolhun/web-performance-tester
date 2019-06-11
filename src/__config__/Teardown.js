const chalk = require('chalk')
const rimraf = require('rimraf')
const os = require('os')
const path = require('path')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

module.exports = async function() {
  console.log(chalk.yellow('=*=*=*= Teardown Puppeteer =*=*=*='));
  await global.__BROWSER_GLOBAL__.disconnect();
  await global.__BROWSER_CHROME__.kill();
  rimraf.sync(DIR);
}
