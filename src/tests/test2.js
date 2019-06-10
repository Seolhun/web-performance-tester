const lighthouse = require('lighthouse');

const timeout = 100000
const id = 'demo@ab180.co' // process.env.AIRBRIDGE_TEST_USER
const pw = 'public_demo' // process.env.AIRBRIDGE_TEST_PW

const BASE_URL = 'https://airbridge.io/d/#/app/'
const TARGET_APP = 'airbridge_demo'

// https://jestjs.io/docs/en/api#describeeachtable-name-fn-timeout
const TEST_PAGES = [
  '/reports/actual',
  '/reports/retention',
  '/aboutus',
  '/log/log-export/',
  '/log/realtime-log/',
  '/fraud/time-lag',
  '/integrated-channel',
  '/third-party/google-analytics',
  '/config/setting',
  '/config/tracking',
  '/config/deep-link',
  '/config/contribution',
]

let lhr;

describe(
  '/ (Home Page)',
  () => {
    let page
    opts = {}
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      // login
      await page.goto('https://airbridge.io/d/#/signin')
      await page.type('[name="email"]', id)
      await page.type('[name="password"]', pw)
      await page.click('.submit-btn')
      await page.waitForNavigation()
      opts.port = global.__PORT__
    })

    afterAll(async () => {
      await page.close()
    })

    describe.each([...TEST_PAGES])(
      'lighthouse',
      (subURL) => {
        console.log(subURL)

        jest.setTimeout(40000)
        beforeAll(async () => {
          const result = await lighthouse(`${BASE_URL}/${TARGET_APP}${subURL}`, opts, null);
          lhr = result.lhr;
          console.log(lhr);
        }, 200000)

        it('first-contentful-paint', async () => {
          expect(lhr.audits['first-meaningful-paint'].score * 100).toBeGreaterThan(0);
        })
        it('first-contentful-paint', async () => {
          expect(lhr.audits['first-contentful-paint'].score * 100).toBeGreaterThan(0);
        })
        it('Time to Interactive', async () => {
          expect(lhr.audits['interactive'].score * 100).toBeGreaterThan(0);
        })
    }, 200000)
  },
  200000
)
