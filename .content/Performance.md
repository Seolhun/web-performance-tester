# Web Performance list

## Performance

### "first-contentful-paint"
- id : "first-contentful-paint",
- title : "First Contentful Paint",
- description : "First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint).",
- score : 0.52,
- scoreDisplayMode  : "numeric",
- numericValue : 3905.0340000000006,

### "first-meaningful-paint"
- id : "first-meaningful-paint",
- title : "First Meaningful Paint",
- description : "First Meaningful Paint measures when the primary content of a page is visible. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/first-meaningful-paint).",
- score : 0.04,
- scoreDisplayMode  : "numeric",
- numericValue : 8549.8,
-
### "speed-index"
- id : "speed-index",
- title : "Speed Index",
- description : "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/speed-index).",
- score : 0.75,
- scoreDisplayMode  : "numeric",
- numericValue : 4382.116232468888,

Speed Index는 페이지 콘텐츠가 얼마나 빠르게 시각적으로 채워지는지 보여주는 페이지 로드 성능 지표입니다. 점수가 낮을수록 좋습니다.

### "estimated-input-latency"
- id : "estimated-input-latency",
- title : "Estimated Input Latency",
- description : "Estimated Input Latency is an estimate of how long your app takes to respond to user input, in milliseconds, during the busiest 5s window of page load. If your latency is higher than 50 ms, users may perceive your app as laggy. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/estimated-input-latency).",
- score : 1,
- scoreDisplayMode  : "numeric",
- numericValue : 12.8,

### "max-potential-fid(First Input Delay (FID))"
- id : "max-potential-fid",
- title : "Max Potential First Input Delay",
- description : "The maximum potential First Input Delay that your users could experience is the duration, in milliseconds, of the longest task. [Learn more](https://developers.google.com/web/updates/2018/05/first-input-delay).",
- score : 0.19,
- scoreDisplayMode  : "numeric",
- numericValue : 392,

The first impression users have of how fast your site loads can be measured with metrics like `First Paint (FP) and First Contentful Paint (FCP)`.
But how fast your site can paint pixels to the screen is just part of the story. Equally important is how responsive your site is when users try to interact with those pixels!

#### Why only consider the first input?
While a delay from any input can lead to a bad user experience, we primarily recommend measuring the first input delay for a few reasons:

1. The first input delay will be the user's first impression of your site's responsiveness, and first impressions are critical in shaping our overall impression of a site's quality and reliability.
2. The biggest interactivity issues we see on the web today occur during page load. Therefore, we believe initially focusing on improving site's first user interaction will have the greatest impact on improving the overall interactivity of the web.
3. The recommended solutions for how sites should fix high first input delays (code splitting, loading less JavaScript upfront, etc.) are not necessarily the same solutions for fixing slow input delays after page load. By separating out these metrics we'll be able to provide more specific performance guidelines to web developers.

### "time-to-first-byte"
- id : "time-to-first-byte",
- title : "Server response times are low (TTFB)",
- description : "Time To First Byte identifies the time at which your server sends a response. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/ttfb).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : 14.858000000000004,

### "first-cpu-idle"
- id : "first-cpu-idle",
- title : "First CPU Idle",
- description : "First CPU Idle marks the first time at which the page's main thread is quiet enough to handle input. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/first-interactive).",
- score : 0.28,
- scoreDisplayMode  : "numeric",
- numericValue : 8549.8,

이상적인 속도는 초당 60프레임입니다.

### "user-timings"
- id : "user-timings",
- title : "User Timing marks and measures",
- description : "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/user-timing).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "interactive"
- id : "interactive",
- title : "Time to Interactive",
- description : "Time to interactive is the amount of time it takes for the page to become fully interactive. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/consistently-interactive).",
- score : 0.38,
- scoreDisplayMode  : "numeric",
- numericValue : 8549.8,

Time to Interactive는 레이아웃이 안정되고, 주요 웹 글꼴이 보이고, 메인 스레드가 사용자 입력을 처리하기에 충분한 시점으로 정의됩니다.

### "critical-request-chains"
- id : "critical-request-chains",
- title : "Minimize Critical Requests Depth",
- description : "The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/critical-request-chains).",
- score : null,
- scoreDisplayMode  : "informative",
- numericValue : "undefined",

CRP를 사용하면 어떤 리소스가 로드되고 어떤 순서로 로드되는 지 순서를 정해 브라우저에서 최대한 빨리 페이지를 로딩할 수 있습니다.

- 주요 리소스 갯수 최적화: 리소스를 제거하고, 다운로드를 연기하고, 비동기로 표기하는 등의 작업을 수행할 수 있습니다.
- 다운로드 시간(왕복 횟수)를 줄이기 위해 주요 바이트 수를 최적화합니다.
- 나머지 주요 리소스가 로드되는 순서 최적화: 주요한 경로 길이를 줄이려면 가능한 빨리 모든 주요 자산을 다운로드 하십시오.

### "mainthread-work-breakdown"
- id : "mainthread-work-breakdown",
- title : "Minimizes main-thread work",
- description : "`Consider reducing the time spent parsing, compiling and executing JS`. You may find delivering smaller JS payloads helps with this.",
- score : 0.93,
- scoreDisplayMode  : "numeric",
- numericValue : 1813.651999999998,

### "bootup-time"
- id : "bootup-time",
- title : "JavaScript execution time",
- description : "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/bootup).",
- score : 0.98,
- scoreDisplayMode  : "numeric",
- numericValue : 690.416,

This audit measures the total impact of JavaScript on your page's load performance. JavaScript can slow down your page in many ways:

- `Network cost.` More bytes equals longer download times.
- `Parse and compile cost.` JavaScript gets parsed and compiled on the main thread. When the main thread is busy, the page can't respond to user input.
- `Execution cost.` JavaScript is also executed on the main thread. If your page runs a lot of code before it's really needed, that also delays your Time To Interactive, which is one of the key metrics related to how users perceive your page speed.
- `Memory cost.` If your JavaScript holds on to a lot of references, it can potentially consume a lot of memory. Pages appear janky or slow when they consume a lot of memory. Memory leaks can cause your page to freeze up completely.

### "uses-rel-preload"
- id : "uses-rel-preload",
- title : "Preload key requests",
- description : "Consider using <link rel=preload> to prioritize fetching resources that are currently requested later in page load. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/preload).",
- score : 1,
- scoreDisplayMode  : "numeric",
- numericValue : 0,

### "uses-rel-preconnect"
- id : "uses-rel-preconnect",
- title : "Preconnect to required origins",
- description : "Consider adding preconnect or dns-prefetch resource hints to establish early connections to important third-party origins. [Learn more](https://developers.google.com/web/fundamentals/performance/resource-prioritization#preconnect).",
- score : 0.58,
- scoreDisplayMode  : "numeric",
- numericValue : 613.8199999999999,

#### 미리 연결
<link rel="preconnect">는 브라우저에 여러분의 페이지가 다른 출발지에 연결하도록 구축되었다는 것과, 가능한 한 빠르게 처리를 시작하고자 한다는 것을 알립니다.

#### 미리 가져오기
`prefetch는 사용자가 다음에 할 행동을 선점하여 준비하는 데 가장 적합`하다는 것을 의미합니다.
예를 들어, 결과 목록에서 첫 번째 제품 상세 페이지를 가져오거나 페이지 번호가 있는 콘텐츠의 다음 페이지를 가져오는 것이 여기에 해당합니다.

### "font-display"
- id : "font-display",
- title : "Ensure text remains visible during webfont load",
- description : "Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. [Learn more](https://developers.google.com/web/updates/2016/02/font-display).",
- score : 0,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "performance-budget"
- id : "performance-budget",
- title : "Performance budget",
- description : "Keep the quantity and size of network requests under the targets set by the provided performance budget. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "resource-summary"
- id : "resource-summary",
- title : "Keep request counts low and transfer sizes small",
- description : "To set budgets for the quantity and size of page resources, add a budget.json file. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
- score : null,
- scoreDisplayMode  : "informative",
- numericValue : "undefined",

### "network-requests"
- id : "network-requests",
- title : "Network Requests",
- description : "Lists the network requests that were made during page load.",
- score : null,
- scoreDisplayMode  : "informative",
- numericValue : 57,

### "network-rtt"
- id : "network-rtt",
- title : "Network Round Trip Times",
- description : "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more](https://hpbn.co/primer-on-latency-and-bandwidth/).",
- score : null,
- scoreDisplayMode  : "informative",
- numericValue : 161.964,

### "network-server-latency"
- id : "network-server-latency",
- title : "Server Backend Latencies",
- description : "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
- score : null,
- scoreDisplayMode  : "informative",
- numericValue : 68.55699999999999,

### "main-thread-tasks"
- id : "main-thread-tasks",
- title : "Tasks",
- description : "Lists the toplevel main thread tasks that executed during page load.",
- score : null,
- scoreDisplayMode  : "informative",
- numericValue : 13,

### "metrics"
- id : "metrics",
- title : "Metrics",
- description : "Collects all available metrics.",
- score : null,
- scoreDisplayMode  : "informative",
- numericValue : 8549.8,

### "uses-long-cache-ttl"
- id : "uses-long-cache-ttl",
- title : "Serve static assets with an efficient cache policy",
- description : "A long cache lifetime can speed up repeat visits to your page. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/cache-policy).",
- score : 0,
- scoreDisplayMode  : "numeric",
- numericValue : 3822472.121365741,

### "total-byte-weight"
- id : "total-byte-weight",
- title : "Avoid enormous network payloads",
- description : "Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/network-payloads).",
- score : 0.4,
- scoreDisplayMode  : "numeric",
- numericValue : 4441342,

### "offscreen-images"
- id : "offscreen-images",
- title : "Defer offscreen images",
- description : "Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/offscreen-images).",
- score : 1,
- scoreDisplayMode  : "numeric",
- numericValue : 0,

Offscreen images are images that appear below the fold. Since users can't see offscreen images when they load a page, there's no reason to download the offscreen images as part of the initial page load. In other words, deferring the load of offscreen images can speed up page load time and time to interactive.

### "render-blocking-resources"
- id : "render-blocking-resources",
- title : "Eliminate render-blocking resources",
- description : "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/blocking-resources).",
- score : 0.67,
- scoreDisplayMode  : "numeric",
- numericValue : 452,

첫 번째 페인트에 필요한 링크와 스크립트를 인라인 처리하고 그렇지 않은 링크와 스크립트는 지연시켜서 페이지 로드 속도를 개선할 수 있습니다.

- 중요한 스크립트는 HTML에 인라인 처리하는 것을 고려해보세요. 중요하지 않은 스크립트의 경우 async 또는 defer 속성으로 표시하는 방안을 고려해보세요. 자세한 내용은 자바스크립트로 상호작용 추가를 참조하세요.
- 스타일시트는 스타일을 여러 개의 파일로 분리하고 미디어 쿼리로 구성한 다음, 각 스타일시트 링크에 media 속성을 추가하는 방법을 고려해보세요. 페이지를 로드할 때 브라우저는 첫 번째 페인트만 차단하고 사용자의 기기와 일치하는 스타일시트를 검색합니다. 자세한 내용은 렌더링 차단 CSS를 참조하세요.
- 중요하지 않은 HTML 가져오기는 async 속성으로 표시합니다. 통상 async는 최대한 HTML 가져오기와 함께 사용해야 합니다.

### "unminified-css"
- id : "unminified-css",
- title : "Minify CSS",
- description : "Minifying CSS files can reduce network payload sizes. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/minify-css).",
- score : 1,
- scoreDisplayMode  : "numeric",
- numericValue : 0,

### "unminified-javascript"
- id : "unminified-javascript",
- title : "Minify JavaScript",
- description : "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://developers.google.com/speed/docs/insights/MinifyResources).",
- score : 1,
- scoreDisplayMode  : "numeric",
- numericValue : 0,

### "unused-css-rules"
- id : "unused-css-rules",
- title : "Remove unused CSS",
- description : "Remove dead rules from stylesheets and defer the loading of CSS not used for above-the-fold content to reduce unnecessary bytes consumed by network activity. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/unused-css).",
- score : 1,
- scoreDisplayMode  : "numeric",
- numericValue : 0,

### "uses-webp-images"
- id : "uses-webp-images",
- title : "Serve images in next-gen formats",
- description : "Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/webp).",
- score : 0.06,
- scoreDisplayMode  : "numeric",
- numericValue : 4500,

### "uses-optimized-images"
- id : "uses-optimized-images",
- title : "Efficiently encode images",
- description : "Optimized images load faster and consume less cellular data. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/optimize-images).",
- score : 0.45,
- scoreDisplayMode  : "numeric",
- numericValue : 1200,

### "uses-text-compression"
- id : "uses-text-compression",
- title : "Enable text compression",
- description : "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/text-compression).",
- score : 1,
- scoreDisplayMode  : "numeric",
- numericValue : 0,

### "uses-responsive-images"
- id : "uses-responsive-images",
- title : "Properly size images",
- description : "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/oversized-images).",
- score : 1,
- scoreDisplayMode  : "numeric",
- numericValue : 0,

### "efficient-animated-content"
- id : "efficient-animated-content",
- title : "Use video formats for animated content",
- description : "Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/)",
- score : 1,
- scoreDisplayMode  : "numeric",
- numericValue : 0,

### "dom-size"
- id : "dom-size",
- title : "Avoids an excessive DOM size",
- description : "Browser engineers recommend pages contain fewer than ~1,500 DOM elements. The sweet spot is a tree depth < 32 elements and fewer than 60 children/parent element. A large DOM can increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn more](https://developers.google.com/web/tools/lighthouse/audits/dom-size).",
- score : 1,
- scoreDisplayMode  : "numeric",
- numericValue : 206,

#### Recommendations
- Has less than 1500 nodes total.
- Has a maximum depth of 32 nodes.
- Has no parent node with more than 60 child nodes.

### "final-screenshot"
- id : "final-screenshot",
- title : "Final Screenshot",
- description : "The last screenshot captured of the pageload.",
- score : null,
- scoreDisplayMode  : "informative",
- numericValue : "undefined",

### "screenshot-thumbnails"
- id : "screenshot-thumbnails",
- title : "Screenshot Thumbnails",
- description : "This is what the load of your site looked like.",
- score : null,
- scoreDisplayMode  : "informative",
- numericValue : "undefined",

### "diagnostics"
- id : "diagnostics",
- title : "Diagnostics",
- description : "Collection of useful page vitals.",
- score : null,
- scoreDisplayMode  : "informative",
- numericValue : "undefined",

### "redirects"
- id : "redirects",
- title : "Avoid multiple page redirects",
- description : "Redirects introduce additional delays before the page can be loaded. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/redirects).",
- score : 1,
- scoreDisplayMode  : "numeric",
- numericValue : 0,
