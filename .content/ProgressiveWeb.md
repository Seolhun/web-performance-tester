# Web Performance list

## Progressive Web app

### "is-on-https"
- id : "is-on-https",
- title : "Uses HTTPS",
- description : "All sites should be protected with HTTPS, even ones that don't handle sensitive data. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/https).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "redirects-http"
- id : "redirects-http",
- title : "Redirects HTTP traffic to HTTPS",
- description : "If you've already set up HTTPS, make sure that you redirect all HTTP traffic to HTTPS. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/http-redirects-to-https).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "service-worker"
- id : "service-worker",
- title : "Does not register a service worker that controls page and start_url",
- description : "The service worker is the technology that enables your app to use many Progressive Web App features, such as offline, add to homescreen, and push notifications. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/registered-service-worker).",
- score : 0,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "works-offline"
- id : "works-offline",
- title : "Current page does not respond with a 200 when offline",
- description : "If you're building a Progressive Web App, consider using a service worker so that your app can work offline. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/http-200-when-offline).",
- score : 0,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "without-javascript"
- id : "without-javascript",
- title : "Does not provide fallback content when JavaScript is not available",
- description : "Your app should display some content when JavaScript is disabled, even if it's just a warning to the user that JavaScript is required to use the app. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/no-js).",
- score : 0,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "installable-manifest"
- id : "installable-manifest",
- title : "Web app manifest does not meet the installability requirements",
- description : "Browsers can proactively prompt users to add your app to their homescreen, which can lead to higher engagement. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/install-prompt).",
- score : 0,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "splash-screen"
- id : "splash-screen",
- title : "Is not configured for a custom splash screen",
- description : "A themed splash screen ensures a high-quality experience when users launch your app from their homescreens. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/custom-splash-screen).",
- score : 0,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "themed-omnibox"
- id : "themed-omnibox",
- title : "Does not set an address-bar theme color",
- description : "The browser address bar can be themed to match your site. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/address-bar).",
- score : 0,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "content-width"
- id : "content-width",
- title : "Content is sized correctly for the viewport",
- description : "If the width of your app's content doesn't match the width of the viewport, your app might not be optimized for mobile screens. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/content-sized-correctly-for-viewport).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "offline-start-url"
- id : "offline-start-url",
- title : "start_url does not respond with a 200 when offline",
- description : "A service worker enables your web app to be reliable in unpredictable network conditions. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/http-200-when-offline).",
- score : 0,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "pwa-cross-browser"
- id : "pwa-cross-browser",
- title : "Site works cross-browser",
- description : "To reach the most number of users, sites should work across every major browser. [Learn more](https://developers.google.com/web/progressive-web-apps/checklist#site-works-cross-browser).",
- score : null,
- scoreDisplayMode  : "manual",
- numericValue : "undefined",

### "pwa-page-transitions"
- id : "pwa-page-transitions",
- title : "Page transitions don't feel like they block on the network",
- description : "Transitions should feel snappy as you tap around, even on a slow network, a key to perceived performance. [Learn more](https://developers.google.com/web/progressive-web-apps/checklist#page-transitions-dont-feel-like-they-block-on-the-network).",
- score : null,
- scoreDisplayMode  : "manual",
- numericValue : "undefined",

### "pwa-each-page-has-url"
- id : "pwa-each-page-has-url",
- title : "Each page has a URL",
- description : "Ensure individual pages are deep linkable via the URLs and that URLs are unique for the purpose of shareability on social media. [Learn more](https://developers.google.com/web/progressive-web-apps/checklist#each-page-has-a-url).",
- score : null,
- scoreDisplayMode  : "manual",
- numericValue : "undefined",

### "apple-touch-icon"
- id : "apple-touch-icon",
- title : "Does not provide a valid `apple-touch-icon`",
- description : "For ideal appearance on iOS when users add to the home screen, define an apple-touch-icon. It must point to a non-transparent 192px (or 180px) square PNG. [Learn More](https://developers.google.com/web/fundamentals/design-and-ux/browser-customization/).",
- score : 0,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "load-fast-enough-for-pwa"
- id : "load-fast-enough-for-pwa",
- title : "Page load is fast enough on mobile networks",
- description : "A fast page load over a cellular network ensures a good mobile user experience. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/fast-3g).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : 8549.8,
