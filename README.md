# Web-Performance-Tester

This is automation performance tester using lighthouse and chrome-launcher

## Goal

- One configuration, All routes are audited.
- Simple testing flow with the json file configuration

## About Lighthouse contents

- [Accessibility](https://github.com/Seolhun/web-performance-tester/blob/master/.content/Accessibility.md)
- [BestPractices](https://github.com/Seolhun/web-performance-tester/blob/master/.content/BestPractices.md)
- [Performance](https://github.com/Seolhun/web-performance-tester/blob/master/.content/Performance.md)
- [ProgressiveWeb](https://github.com/Seolhun/web-performance-tester/blob/master/.content/ProgressiveWeb.md)

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
  "concurrency": 1,                         // default : 1
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
