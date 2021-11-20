// import chalk from 'chalk'
// import NodeEnvironment from 'jest-environment-node'
// import puppeteer from 'puppeteer'
// import fs from 'fs'
// import os from 'os'
// import path from 'path'

// const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

// class SetupPuppeteerEnvironment extends NodeEnvironment {
//   async setup () {
//     await super.setup()
//     console.log(chalk.yellow('=*=*=*= Setup Puppeteer Environment =*=*=*='))

//     const wsEndpoint = fs.readFileSync(path.join(DIR, 'wsEndpoint'), 'utf8')
//     if (!wsEndpoint) {
//       throw new Error('wsEndpoint not found')
//     }

//     this.global.__BROWSER__ = await puppeteer.connect({
//       browserWSEndpoint: wsEndpoint
//     })

//     const port = fs.readFileSync(path.join(DIR, 'port'), 'utf8')
//     this.global.__PORT__ = port
//   }

//   async teardown () {
//     console.log(chalk.yellow('Teardown Test Environment.'))
//     await super.teardown()
//   }

//   runScript (script) {
//     return super.runScript(script)
//   }
// }

// module.exports = SetupPuppeteerEnvironment
