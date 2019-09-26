const lighthouse = require('lighthouse');

const WebPerformanceTester = require('../index').default;
const WTP = new WebPerformanceTester();
const { baseUrl, timeout, subRoutes, options } = WTP.Config.getConfig();

describe(
  'Naver Homepage',
  () => {
    console.error('@@@', options);
    let page,
      lighthouseOptions = {
        ...options,
      };

    const auditedFields = WTP.Auditer.getTestFields();

    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      lighthouseOptions.port = global.__PORT__;
    });

    afterAll(async () => {
      await page.close();
    });

    if (Array.isArray(subRoutes) && subRoutes.length) {
      describe.each([...subRoutes])('Routes lighthouse Test', (subUrl) => {
        let lighthouseResponse;

        beforeAll(async () => {
          const result = await lighthouse(`${baseUrl}${subUrl}`, lighthouseOptions, null);
          lighthouseResponse = result.lhr;
        }, timeout);

        auditedFields.forEach((value) => {
          it(
            value,
            async () => {
              expect(lighthouseResponse.audits[value].score * 100).toBeGreaterThanOrEqual(0);
            },
            20000,
          );
        });
      });
    } else {
      describe(`BaseUrl lighthouse Test : ${baseUrl}`, () => {
        let lighthouseResponse;

        beforeAll(async () => {
          const result = await lighthouse(baseUrl, lighthouseOptions, null);
          lighthouseResponse = result.lhr.audits;
        }, timeout);

        auditedFields.forEach((value) => {
          it(
            value,
            async () => {
              expect(lighthouseResponse[value].score * 100).toBeGreaterThanOrEqual(0);
            },
            20000,
          );
        });
      });
    }
  },
  timeout,
);
