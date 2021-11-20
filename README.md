# Web-Performance-Tester

This is an example of using the global setup/teardown apis alone with the async test-environment apis to make jest work smoothly with puppeteer.

## Goal

- One configuration, All routes are audited.
- Simple and Powerful testing flow with the configuration
  - Setting > Auditing > Testing > Reporting

## About Lighthouse contents

- [Accessibility](https://github.com/Seolhun/web-performance-tester/blob/master/.content/Accessibility.md)
- [BestPractices](https://github.com/Seolhun/web-performance-tester/blob/master/.content/BestPractices.md)
- [Performance](https://github.com/Seolhun/web-performance-tester/blob/master/.content/Performance.md)
- [ProgressiveWeb](https://github.com/Seolhun/web-performance-tester/blob/master/.content/ProgressiveWeb.md)

## Architectures

### 1. Configuration Builder

Configuration Builder is watching and checking config files validation.

### 2. Auditor

Auditor is lighthouse builder that setting test configuration.

### 3. Tester

Tester is lighthouse test runner that executing test files with jest.

### 4. Reporter

Reporter make and send analytics report as CSV, JSON or other ways.

## Config Options

### JSON

> Set WPT configuration

```js
// wpt.config.json
{
  "name": ""                                // Required
  "origin": "",                             // Required
  "auditPaths": [],                         // Required
  "timeout": 20000,                         // default : 20000
  "concurrency": 1,                         // default : 5
  "options": {
    "chromeFlags": ["--headless"],          // default : ["--headless"]  - ["--show-paint-rects", "--headless", "--disable-gpu"]
    "formFactor": "desktop",                // default : "mobile"       - desktop, mobile
    "output": "html",                       // default : "html"         - json, html, csv
    "outputPath": "reports",                // default : "reports"
    "port": 8080                            // default : 8080
  },
}
```

## How to

### Install

```bash
npm install
```

### Build

```bash
npm run build
```

### Run

```bash
npm run lh
```

### Codes

- Examples Code [here](https://github.com/Seolhun/web-performance-tester/tree/master/examples)
