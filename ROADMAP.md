# RoadMap

All notable changes to this project will be documented in this file.

## To Do List

- Mono Repo
  - builder
  - auditor
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
// wpt.config.js
const config = (defaultConfig) => {
  ...defaultConfig,
  "origin": "https://github.com/Seolhun",  // Required
  "pathnames": [
    "/web-performance-tester",
  ],                                        // default : []
  "timeout": 10000,                         // default : 10000
  "options": {
    "chromeFlags": ["--headless"],          // default : ["--headless"]  - ["--show-paint-rects", "--headless", "--disable-gpu"]
    "formFactor": "desktop",                // default : "mobile"       - desktop, mobile
    "output": "html",                       // default : "html"         - json, html, csv
    "outputPath": "reports",                // default : "reports"
    "port": 8080                            // default : 8080
  },
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
