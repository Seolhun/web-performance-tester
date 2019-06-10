const lighthouse = require('lighthouse');

const timeout = 100000

const BASE_URL = 'https://airbridge.io/d/#/app'
const TARGET_APP = 'airbridge_demo'

const TEST_PAGES = [
  '/reports/actual/reports/actual',
  '/reports/retention',
  '/log/log-export/request',
  '/log/realtime-log/',
  '/fraud/time-lag',
  // '/integrated-channel',
  // '/third-party/google-analytics',
  '/config/setting',
  '/config/tracking',
  '/config/deep-link',
  '/config/contribution',
]

const config = {
  extends: 'lighthouse:default',
  settings: {
    onlyAudits: [
      'first-contentful-paint',
      'first-meaningful-paint',
      'first-interactive',
      'speed-index-metric',
      'estimated-input-latency',
      'interactive',
      'consistently-interactive',
    ],
  },
}

describe(
  'DashBoard',
  () => {
    let page
    opts = {
      disableStorageReset: true,
      // chromeFlags: ['--show-paint-rects'],
      // emulatedFormFactor: 'desktop',
      // logLevel: 'info',
      output: 'json',
    }
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      opts.port = global.__PORT__
    })

    afterAll(async () => {
      await page.close()
    })

    describe.each([...TEST_PAGES])(
      `%s performance`,
      (subURL) => {
        let lhr;
        beforeAll(async () => {
          const result = await lighthouse(`${BASE_URL}/${TARGET_APP}${subURL}`, opts, config);
          lhr = result.lhr;
        }, timeout)
        it('first-meaningful-paint', async () => {
          expect(lhr.audits['first-meaningful-paint'].score * 100).toBeGreaterThan(0);
        }, 20000)
        it('first-contentful-paint', async () => {
          expect(lhr.audits['first-contentful-paint'].score * 100).toBeGreaterThan(0);
        }, 20000)
        it('Time to Interactive', async () => {
          expect(lhr.audits['interactive'].score * 100).toBeGreaterThan(0);
          console.log(`${subURL}`, lhr.audits['interactive'].score * 100)
        }, 20000)
    })
  },
  timeout
)
