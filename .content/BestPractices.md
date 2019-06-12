## Web Performance list


## Best Practices

### "image-aspect-ratio"
- id : "image-aspect-ratio",
- title : "Displays images with correct aspect ratio",
- description : "Image display dimensions should match natural aspect ratio. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/aspect-ratio).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "appcache-manifest"
- id : "appcache-manifest",
- title : "Avoids Application Cache",
- description : "Application Cache is deprecated. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/appcache).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "uses-http2"
- id : "uses-http2",
- title : "Uses HTTP/2 for its own resources",
- description : "HTTP/2 offers many benefits over HTTP/1.1, including binary headers, multiplexing, and server push. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/http2).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "uses-passive-event-listeners"
- id : "uses-passive-event-listeners",
- title : "Uses passive listeners to improve scrolling performance",
- description : "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/passive-event-listeners).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "password-inputs-can-be-pasted-into"
- id : "password-inputs-can-be-pasted-into",
- title : "Allows users to paste into password fields",
- description : "Preventing password pasting undermines good security policy. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/password-pasting).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "notification-on-start"
- id : "notification-on-start",
- title : "Avoids requesting the notification permission on page load",
- description : "Users are mistrustful of or confused by sites that request to send notifications without context. Consider tying the request to user gestures instead. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/notifications-on-load).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "no-vulnerable-libraries"
- id : "no-vulnerable-libraries",
- title : "Avoids front-end JavaScript libraries with known security vulnerabilities",
- description : "Some third-party scripts may contain known security vulnerabilities that are easily identified and exploited by attackers. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/vulnerabilities).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "no-document-write"
- id : "no-document-write",
- title : "Avoids `document.write()`",
- description : "For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/document-write).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "external-anchors-use-rel-noopener"
- id : "external-anchors-use-rel-noopener",
- title : "Links to cross-origin destinations are unsafe",
- description : "Add `rel=\"noopener\"` or `rel=\"noreferrer\"` to any external links to improve performance and prevent security vulnerabilities. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/noopener).",
- score : 0,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "geolocation-on-start"
- id : "geolocation-on-start",
- title : "Avoids requesting the geolocation permission on page load",
- description : "Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to user gestures instead. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/geolocation-on-load).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "doctype"
- id : "doctype",
- title : "Page has the HTML doctype",
- description : "Specifying a doctype prevents the browser from switching to quirks-mode.Read more on the [MDN Web Docs page](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "deprecations"
- id : "deprecations",
- title : "Avoids deprecated APIs",
- description : "Deprecated APIs will eventually be removed from the browser. [Learn more](https://www.chromestatus.com/features#deprecated).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "js-libraries"
- id : "js-libraries",
- title : "Detected JavaScript libraries",
- description : "All front-end JavaScript libraries detected on the page.",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",


### "errors-in-console"
- id : "errors-in-console",
- title : "No browser errors logged to the console",
- description : "Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns.",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : 0,
