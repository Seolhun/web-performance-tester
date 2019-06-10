const lighthouse = require('lighthouse');

const timeout = 100000

const BASE_URL = 'http://airbridge.io'
// https://jestjs.io/docs/en/api#describeeachtable-name-fn-timeout
const TEST_PAGES = [
  '/',
  // '/pricing',
  // '/aboutus',
]

describe.skip('/ (Home Page)', () => {
	let page
	opts = {}
	beforeAll(async () => {
		page = await global.__BROWSER__.newPage()
		opts.port = global.__PORT__
	})

	afterAll(async () => {
		await page.close()
	})

	describe.each([...TEST_PAGES])(
		'lighthouse',
		(subURL) => {
			console.log(subURL)
			let lhr;
			beforeAll(async () => {
				const result = await lighthouse(`${BASE_URL}${subURL}`, opts, null);
				lhr = result.lhr;
			}, timeout)
			it('first-contentful-paint', async () => {
				expect(lhr.audits['first-meaningful-paint'].score * 100).toBeGreaterThan(0);
			}, 20000)
			it('first-contentful-paint', async () => {
				expect(lhr.audits['first-contentful-paint'].score * 100).toBeGreaterThan(0);
			}, 20000)
			it('Time to Interactive', async () => {
				expect(lhr.audits['interactive'].score * 100).toBeGreaterThan(0);
			}, 20000)
	})
}, timeout);
