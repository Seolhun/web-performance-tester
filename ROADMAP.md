# RoadMap

All notable changes to this project will be documented in this file.

## To Do List

- Mono Repo
  - builder
  - auditer
  - reporter
  - tester
  - server
    - condition resizer
    - mail
    - cron
    - Google CSV parser
- JS configuration
- Cron Server
- Dashboard
  - Data Table
  - Visualization
  - Conditional Tester Module
  - Mailing Service module
- docker-compose

## Next release Version

### 1.0.9

- Add Javascript configuration for hooks

```js
// wtp.config.js
const config = (defaultConfig) => {
  ...defaultConfig,
  "baseUrl": "https://github.com/Seolhun",  // Required
  "subRoutes": [
    "/web-performance-tester",
  ],                                        // default : []
  "timeout": 100000,                        // default : 100000
  "options": {
    "chromeFlags": ["--headless", "--show-paint-rects"],  // default : ["--headless"]  - ["--show-paint-rects", "--headless", "--disable-gpu"]
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

### 1.1.0

- Add `Dashboard` and `File Manager` modules

### 1.2.0

- Add `Reporter` modules
  - Data table
  - Visualization

### 1.4.0

- Add `Exporting` and `Parsing` modules
  - JSON
  - CSV(Google)
  - HTML(?)

### 1.5.0

- Add `Tester` modules to filter result with Jest

```bash
npm run test
```
