# Web-Performance-Tester

This is automation performance tester using lighthouse and chrome-launcher

## Goal

- One configuration, All routes are audited.
- Simple testing flow with the json file configuration

## About Lighthouse contents

Read lighthouse contents, [Here](https://developer.chrome.com/docs/lighthouse/overview/)

- [Performance](https://developer.chrome.com/docs/lighthouse/performance/)
- [Accessibility](https://developer.chrome.com/docs/lighthouse/accessibility/)
- [BestPractices](https://developer.chrome.com/docs/lighthouse/best-practices/)
- [SEO](https://developer.chrome.com/docs/lighthouse/seo/)
- [ProgressiveWeb](https://developer.chrome.com/docs/lighthouse/pwa/)

## Config Options

### JSON

> Set WPT configuration

```js
// wpt.config.json
{
  "name": "Seolhun_Github"                  // Required
  "origin": "https://github.com/Seolhun",   // Required
  "auditPaths": [{
    {
      "name": "web-performance-tester",
      "pathname": "/web-performance-tester"
    }
  }],                                       // Required                        
  "timeout": 30000,                         // default : 30000
  "useReporter": true,                      // default : true
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

### Codes

- Examples Code [here](https://github.com/Seolhun/web-performance-tester/tree/master/examples)
- See [Default Example](https://github.com/Seolhun/web-performance-tester/tree/develop/examples/default)!
