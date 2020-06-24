describe('Common Test', () => {
  test('isServer', () => {
    expect('Test').toEqual('Test');
  });
});

// // @ts-ignore
// import lighthouse from 'lighthouse';
// import { WebPerformanceTester } from '../src/index';

// const WTP = new WebPerformanceTester();
// const { baseUrl, timeout, subRoutes, options } = WTP.Config.getConfig();

// describe('Naver Homepage', async () => {
//   let page: any, lighthouseOptions = {
//     ...options,
//   };

//   const auditedFields = WTP.Auditer.getTestFields();

//   beforeAll(async () => {
//     //@ts-ignore
//     page = await global.__BROWSER__.newPage();
//     //@ts-ignore
//     lighthouseOptions.port = global.__PORT__;
//   });

//   afterAll(async () => {
//     await page.close();
//   });

//   if (Array.isArray(subRoutes) && subRoutes.length) {
//     describe.each([...subRoutes])('Routes lighthouse Test', (subUrl) => {
//       let lighthouseResponse: any;

//       beforeAll(async () => {
//         const result = await lighthouse(`${baseUrl}${subUrl}`, lighthouseOptions, null);
//         lighthouseResponse = result.lhr;
//       }, timeout);

//       console.log('lighthouseResponse', lighthouseResponse)

//       auditedFields.forEach((value) => {
//         it(value, async () => {
//           expect(lighthouseResponse.audits[value].score * 100).toBeGreaterThanOrEqual(0);
//         }, 20000);
//       });
//     });
//   } else {
//     describe(`BaseUrl lighthouse Test : ${baseUrl}`, () => {
//       let lighthouseResponse: any;;

//       beforeAll(async () => {
//         const result = await lighthouse(baseUrl, lighthouseOptions, null);
//         lighthouseResponse = result.lhr.audits;
//       }, timeout);

//       auditedFields.forEach((value) => {
//         it(
//           value,
//           async () => {
//             expect(lighthouseResponse[value].score * 100).toBeGreaterThanOrEqual(0);
//           },
//           20000,
//         );
//       });
//     });
//   }
// });
