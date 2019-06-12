# Web-Performance-Tester

This is an example of using the global setup/teardown apis alone with the async test-environment apis to make jest work smoothly with puppeteer.

## Goal
- One configuration, All routes are audited. 
- Simple and Powerful testing flow with the configuration
  - Setting > Auditing > Testing > Reporting


![Test Result](./.github/images/screenshot.png)

## Architectures

### 1. Configuration Builder
Configuration Builder is watching and checking config files validation.

### 2. Auditer
Auditer is lighthouse builder that setting test configuration.

### 3. Tester
Tester is lighthoust test runner that executing test files with jest.

### 4. Reporter
Reporter make and send analytics report as CSV, JSON or other ways.


## Config Options

> Important configuration json files

```js
// wtp.config.json
{
  "baseUrl": "https://github.com/Seolhun",  // Required
  "subRoutes": [],                          // default : []
  "timeout": 100000,                        // default : 100000
  "options": {
    "chromeFlags": ["--headless", "--show-paint-rects"],  // default : ["--show-paint-rects"]  - ["--headless", "--disable-gpu"]
    "mulatedFormFactor": "mobile",          // default : "mobile"       - desktop, mobile
    "output": "html",                       // default : "html"         - json, html, csv
    "outputPath": "reports",                // default : "reports"
    "port": 8080                            // default : 8080
  },
  "builder": {},                            // default : {}
  "auditer": {},                            // default : {}
  "tester": {},                             // default : {}
  "reporter": {}                            // default : {}
}
```

## How to

### Install
```bash
yarn install
```

### Run
```bash
yarn lh
```

### Test - be completed at 1.5.0
```bash
yarn test
```
