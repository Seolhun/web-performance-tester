# Web Performance list

## Accessibility

### "accesskeys"
- id : "accesskeys",
- title : "`[accesskey]` values are unique",
- description : "Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more](https://dequeuniversity.com/rules/axe/3.1/accesskeys?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "aria-allowed-attr"
- id : "aria-allowed-attr",
- title : "`[aria-*]` attributes match their roles",
- description : "Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-allowed-attr?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "aria-required-attr"
- id : "aria-required-attr",
- title : "`[role]`s have all required `[aria-*]` attributes",
- description : "Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-required-attr?application=lighthouse).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "aria-required-children"
- id : "aria-required-children",
- title : "Elements with `[role]` that require specific children `[role]`s, are present",
- description : "Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-required-children?application=lighthouse).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "aria-required-parent"
- id : "aria-required-parent",
- title : "`[role]`s are contained by their required parent element",
- description : "Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-required-parent?application=lighthouse).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "aria-roles"
- id : "aria-roles",
- title : "`[role]` values are valid",
- description : "ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-roles?application=lighthouse).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "aria-valid-attr-value"
- id : "aria-valid-attr-value",
- title : "`[aria-*]` attributes have valid values",
- description : "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-valid-attr-value?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "aria-valid-attr"
- id : "aria-valid-attr",
- title : "`[aria-*]` attributes are valid and not misspelled",
- description : "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-valid-attr?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "audio-caption"
- id : "audio-caption",
- title : "`<audio>` elements contain a `<track>` element with `[kind=\"captions\"]`",
- description : "Captions make audio elements usable for deaf or hearing-impaired users, providing critical information such as who is talking, what they're saying, and other non-speech information. [Learn more](https://dequeuniversity.com/rules/axe/3.1/audio-caption?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "button-name"
- id : "button-name",
- title : "Buttons have an accessible name",
- description : "When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn more](https://dequeuniversity.com/rules/axe/3.1/button-name?application=lighthouse).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "bypass"
- id : "bypass",
- title : "The page contains a heading, skip link, or landmark region",
- description : "Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more](https://dequeuniversity.com/rules/axe/3.1/bypass?application=lighthouse).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "color-contrast"
- id : "color-contrast",
- title : "Background and foreground colors do not have a sufficient contrast ratio.",
- description : "Low-contrast text is difficult or impossible for many users to read. [Learn more](https://dequeuniversity.com/rules/axe/3.1/color-contrast?application=lighthouse).",
- score : 0,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "definition-list"
- id : "definition-list",
- title : "`<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>` or `<template>` elements.",
- description : "When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn more](https://dequeuniversity.com/rules/axe/3.1/definition-list?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "dlitem"
- id : "dlitem",
- title : "Definition list items are wrapped in `<dl>` elements",
- description : "Definition list items (`<dt>` and `<dd>`) must be wrapped in a parent `<dl>` element to ensure that screen readers can properly announce them. [Learn more](https://dequeuniversity.com/rules/axe/3.1/dlitem?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "duplicate-id"
- id : "duplicate-id",
- title : "`[id]` attributes on the page are unique",
- description : "The value of an id attribute must be unique to prevent other instances from being overlooked by assistive technologies. [Learn more](https://dequeuniversity.com/rules/axe/3.1/duplicate-id?application=lighthouse).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "frame-title"
- id : "frame-title",
- title : "`<frame>` or `<iframe>` elements do not have a title",
- description : "Screen reader users rely on frame titles to describe the contents of frames. [Learn more](https://dequeuniversity.com/rules/axe/3.1/frame-title?application=lighthouse).",
- score : 0,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "html-has-lang"
- id : "html-has-lang",
- title : "`<html>` element has a `[lang]` attribute",
- description : "If a page doesn't specify a lang attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more](https://dequeuniversity.com/rules/axe/3.1/html-has-lang?application=lighthouse).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "html-lang-valid"
- id : "html-lang-valid",
- title : "`<html>` element has a valid value for its `[lang]` attribute",
- description : "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn more](https://dequeuniversity.com/rules/axe/3.1/valid-lang?application=lighthouse).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "label"
- id : "label",
- title : "Form elements have associated labels",
- description : "Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more](https://dequeuniversity.com/rules/axe/3.1/label?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "layout-table"
- id : "layout-table",
- title : "Presentational `<table>` elements avoid using `<th>`, `<caption>` or the `[summary]` attribute.",
- description : "A table being used for layout purposes should not include data elements, such as the th or caption elements or the summary attribute, because this can create a confusing experience for screen reader users. [Learn more](https://dequeuniversity.com/rules/axe/3.1/layout-table?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "link-name"
- id : "link-name",
- title : "Links have a discernible name",
- description : "Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn more](https://dequeuniversity.com/rules/axe/3.1/link-name?application=lighthouse).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "list"
- id : "list",
- title : "Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).",
- description : "Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more](https://dequeuniversity.com/rules/axe/3.1/list?application=lighthouse).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "listitem"
- id : "listitem",
- title : "List items (`<li>`) are contained within `<ul>` or `<ol>` parent elements",
- description : "Screen readers require list items (`<li>`) to be contained within a parent `<ul>` or `<ol>` to be announced properly. [Learn more](https://dequeuniversity.com/rules/axe/3.1/listitem?application=lighthouse).",
- score : 1,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "meta-refresh"
- id : "meta-refresh",
- title : "The document does not use `<meta http-equiv=\"refresh\">`",
- description : "Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more](https://dequeuniversity.com/rules/axe/3.1/meta-refresh?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "meta-viewport"
- id : "meta-viewport",
- title : "`[user-scalable=\"no\"]` is used in the `<meta name=\"viewport\">` element or the `[maximum-scale]` attribute is less than 5.",
- description : "Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more](https://dequeuniversity.com/rules/axe/3.1/meta-viewport?application=lighthouse).",
- score : 0,
- scoreDisplayMode  : "binary",
- numericValue : "undefined",

### "object-alt"
- id : "object-alt",
- title : "`<object>` elements have `[alt]` text",
- description : "Screen readers cannot translate non-text content. Adding alt text to `<object>` elements helps screen readers convey meaning to users. [Learn more](https://dequeuniversity.com/rules/axe/3.1/object-alt?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "tabindex"
- id : "tabindex",
- title : "No element has a `[tabindex]` value greater than 0",
- description : "A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more](https://dequeuniversity.com/rules/axe/3.1/tabindex?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "td-headers-attr"
- id : "td-headers-attr",
- title : "Cells in a `<table>` element that use the `[headers]` attribute only refer to other cells of that same table.",
- description : "Screen readers have features to make navigating tables easier. Ensuring `<td>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more](https://dequeuniversity.com/rules/axe/3.1/td-headers-attr?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "th-has-data-cells"
- id : "th-has-data-cells",
- title : "`<th>` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.",
- description : "Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more](https://dequeuniversity.com/rules/axe/3.1/th-has-data-cells?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "valid-lang"
- id : "valid-lang",
- title : "`[lang]` attributes have a valid value",
- description : "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn more](https://dequeuniversity.com/rules/axe/3.1/valid-lang?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "video-caption"
- id : "video-caption",
- title : "`<video>` elements contain a `<track>` element with `[kind=\"captions\"]`",
- description : "When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more](https://dequeuniversity.com/rules/axe/3.1/video-caption?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",

### "video-description"
- id : "video-description",
- title : "`<video>` elements contain a `<track>` element with `[kind=\"description\"]`",
- description : "Audio descriptions provide relevant information for videos that dialogue cannot, such as facial expressions and scenes. [Learn more](https://dequeuniversity.com/rules/axe/3.1/video-description?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",



### "custom-controls-labels"
- id : "custom-controls-labels",
- title : "Custom controls have associated labels",
- description : "Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader).",
- score : null,
- scoreDisplayMode  : "manual",
- numericValue : "undefined",

### "custom-controls-roles"
- id : "custom-controls-roles",
- title : "Custom controls have ARIA roles",
- description : "Custom interactive controls have appropriate ARIA roles. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader).",
- score : null,
- scoreDisplayMode  : "manual",
- numericValue : "undefined",

### "focus-traps"
- id : "focus-traps",
- title : "User focus is not accidentally trapped in a region",
- description : "A user can tab into and out of any control or region without accidentally trapping their focus. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard).",
- score : null,
- scoreDisplayMode  : "manual",
- numericValue : "undefined",

### "focusable-controls"
- id : "focusable-controls",
- title : "Interactive controls are keyboard focusable",
- description : "Custom interactive controls are keyboard focusable and display a focus indicator. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard).",
- score : null,
- scoreDisplayMode  : "manual",
- numericValue : "undefined",

### "heading-levels"
- id : "heading-levels",
- title : "Headings don't skip levels",
- description : "Headings are used to create an outline for the page and heading levels are not skipped. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#take_advantage_of_headings_and_landmarks).",
- score : null,
- scoreDisplayMode  : "manual",
- numericValue : "undefined",

### "interactive-element-affordance"
- id : "interactive-element-affordance",
- title : "Interactive elements indicate their purpose and state",
- description : "Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#interactive_elements_like_links_and_buttons_should_indicate_their_purpose_and_state).",
- score : null,
- scoreDisplayMode  : "manual",
- numericValue : "undefined",

### "logical-tab-order"
- id : "logical-tab-order",
- title : "The page has a logical tab order",
- description : "Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard).",
- score : null,
- scoreDisplayMode  : "manual",
- numericValue : "undefined",

### "managed-focus"
- id : "managed-focus",
- title : "The user's focus is directed to new content added to the page",
- description : "If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard).",
- score : null,
- scoreDisplayMode  : "manual",
- numericValue : "undefined",

### "offscreen-content-hidden"
- id : "offscreen-content-hidden",
- title : "Offscreen content is hidden from assistive technology",
- description : "Offscreen content is hidden with display: none or aria-hidden=true. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader).",
- score : null,
- scoreDisplayMode  : "manual",
- numericValue : "undefined",

### "use-landmarks"
- id : "use-landmarks",
- title : "HTML5 landmark elements are used to improve navigation",
- description : "Landmark elements (<main>, <nav>, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#take_advantage_of_headings_and_landmarks).",
- score : null,
- scoreDisplayMode  : "manual",
- numericValue : "undefined",

### "visual-order-follows-dom"
- id : "visual-order-follows-dom",
- title : "Visual order on the page follows DOM order",
- description : "DOM order matches the visual order, improving navigation for assistive technology. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader).",
- score : null,
- scoreDisplayMode  : "manual",
- numericValue : "undefined",

### "input-image-alt"
- id : "input-image-alt",
- title : "`<input type=\"image\">` elements have `[alt]` text",
- description : "When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn more](https://dequeuniversity.com/rules/axe/3.1/input-image-alt?application=lighthouse).",
- score : null,
- scoreDisplayMode  : "notApplicable",
- numericValue : "undefined",
