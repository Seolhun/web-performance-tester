export enum TestTypes {
  ACCESSIBILITY,
  BEST_PRACTICES,
  PERFORMANCES,
  PWA,
  SEO,
}

export enum Accessibility {
  ACCESSKEYS = 'accesskeys',
  ARIA_ALLOWED_ATTR = 'aria-allowed-attr',
  ARIA_REQUIRED_ATTR = 'aria-required-attr',
  ARIA_REQUIRED_CHILDREN = 'aria-required-children',
  ARIA_REQUIRED_PARENT = 'aria-required-parent',
  ARIA_ROLES = 'aria-roles',
  ARIA_VALID_ATTR = 'aria-valid-attr',
  ARIA_VALID_ATTR_VALUE = 'aria-valid-attr-value',
  AUDIO_CAPTION = 'audio-caption',
  BUTTON_NAME = 'button-name',
  BYPASS = 'bypass',
  COLOR_CONTRAST = 'color-contrast',
  CUSTOM_CONTROLS_LABELS = 'custom-controls-labels',
  CUSTOM_CONTROLS_ROLES = 'custom-controls-roles',
  DEFINITION_LIST = 'definition-list',
  DLITEM = 'dlitem',
  DOCUMENT_TITLE = 'document-title',
  DUPLICATE_ID = 'duplicate-id',
  FOCUS_TRAPS = 'focus-traps',
  FOCUSABLE_CONTROLS = 'focusable-controls',
  FRAME_TITLE = 'frame-title',
  HEADING_LEVELS = 'heading-levels',
  HTML_HAS_LANG = 'html-has-lang',
  HTML_LANG_VALID = 'html-lang-valid',
  IMAGE_ALT = 'image-alt',
  INPUT_IMAGE_ALT = 'input-image-alt',
  INTERACTIVE_ELEMENT_AFFORDANCE = 'interactive-element-affordance',
  LABEL = 'label',
  LAYOUT_TABLE = 'layout-table',
  LINK_NAME = 'link-name',
  LIST = 'list',
  LISTITEM = 'listitem',
  LOGICAL_TAB_ORDER = 'logical-tab-order',
  MANAGED_FOCUS = 'managed-focus',
  META_REFRESH = 'meta-refresh',
  META_VIEWPORT = 'meta-viewport',
  OBJECT_ALT = 'object-alt',
  OFFSCREEN_CONTENT_HIDDEN = 'offscreen-content-hidden',
  TABINDEX = 'tabindex',
  TD_HEADERS_ATTR = 'td-headers-attr',
  TH_HAS_DATA_CELLS = 'th-has-data-cells',
  USE_LANDMARKS = 'use-landmarks',
  VALID_LANG = 'valid-lang',
  VIDEO_CAPTION = 'video-caption',
  VIDEO_DESCRIPTION = 'video-description',
  VISUAL_ORDER_FOLLOWS_DOM = 'visual-order-follows-dom',
}

export enum BestPractices {
  APPCACHE_MANIFEST = 'appcache-manifest',
  DEPRECATIONS = 'deprecations',
  DOCTYPE = 'doctype',
  ERRORS_IN_CONSOLE = 'errors-in-console',
  EXTERNAL_ANCHORS_USE_REL_NOOPENER = 'external-anchors-use-rel-noopener',
  GEOLOCATION_ON_START = 'geolocation-on-start',
  IMAGE_ASPECT_RATIO = 'image-aspect-ratio',
  JS_LIBRARIES = 'js-libraries',
  NO_DOCUMENT_WRITE = 'no-document-write',
  NO_VULNERABLE_LIBRARIES = 'no-vulnerable-libraries',
  NOTIFICATION_ON_START = 'notification-on-start',
  PASSWORD_INPUTS_CAN_BE_PASTED_INTO = 'password-inputs-can-be-pasted-into',
  USES_HTTP2 = 'uses-http2',
  USES_PASSIVE_EVENT_LISTENERS = 'uses-passive-event-listeners',
}

export enum Performances {
  BOOTUP_TIME = 'bootup-time',
  CRITICAL_REQUEST_CHAINS = 'critical-request-chains',
  DIAGNOSTICS = 'diagnostics',
  DOM_SIZE = 'dom-size',
  EFFICIENT_ANIMATED_CONTENT = 'efficient-animated-content',
  ESTIMATED_INPUT_LATENCY = 'estimated-input-latency',
  FINAL_SCREENSHOT = 'final-screenshot',
  FIRST_CONTENTFUL_PAINT = 'first-contentful-paint',
  FIRST_CPU_IDLE = 'first-cpu-idle',
  FIRST_MEANINGFUL_PAINT = 'first-meaningful-paint',
  FONT_DISPLAY = 'font-display',
  INTERACTIVE = 'interactive',
  MAIN_THREAD_TASKS = 'main-thread-tasks',
  MAINTHREAD_WORK_BREAKDOWN = 'mainthread-work-breakdown',
  MAX_POTENTIAL_FID = 'max-potential-fid',
  METRICS = 'metrics',
  NETWORK_REQUESTS = 'network-requests',
  NETWORK_RTT = 'network-rtt',
  NETWORK_SERVER_LATENCY = 'network-server-latency',
  OFFSCREEN_IMAGES = 'offscreen-images',
  PERFORMANCE_BUDGET = 'performance-budget',
  REDIRECTS = 'redirects',
  RENDER_BLOCKING_RESOURCES = 'render-blocking-resources',
  RESOURCE_SUMMARY = 'resource-summary',
  SCREENSHOT_THUMBNAILS = 'screenshot-thumbnails',
  SPEED_INDEX = 'speed-index',
  TIME_TO_FIRST_BYTE = 'time-to-first-byte',
  TOTAL_BYTE_WEIGHT = 'total-byte-weight',
  UNMINIFIED_CSS = 'unminified-css',
  UNMINIFIED_JAVASCRIPT = 'unminified-javascript',
  UNUSED_CSS_RULES = 'unused-css-rules',
  USER_TIMINGS = 'user-timings',
  USES_LONG_CACHE_TTL = 'uses-long-cache-ttl',
  USES_OPTIMIZED_IMAGES = 'uses-optimized-images',
  USES_REL_PRECONNECT = 'uses-rel-preconnect',
  USES_REL_PRELOAD = 'uses-rel-preload',
  USES_RESPONSIVE_IMAGES = 'uses-responsive-images',
  USES_TEXT_COMPRESSION = 'uses-text-compression',
  USES_WEBP_IMAGES = 'uses-webp-images',
}

export enum PWA {
  APPLE_TOUCH_ICON = 'apple-touch-icon',
  CONTENT_WIDTH = 'content-width',
  INSTALLABLE_MANIFEST = 'installable-manifest',
  IS_ON_HTTPS = 'is-on-https',
  LOAD_FAST_ENOUGH_FOR_PWA = 'load-fast-enough-for-pwa',
  OFFLINE_START_URL = 'offline-start-url',
  PWA_CROSS_BROWSER = 'pwa-cross-browser',
  PWA_EACH_PAGE_HAS_URL = 'pwa-each-page-has-url',
  PWA_PAGE_TRANSITIONS = 'pwa-page-transitions',
  REDIRECTS_HTTP = 'redirects-http',
  SERVICE_WORKER = 'service-worker',
  SPLASH_SCREEN = 'splash-screen',
  THEMED_OMNIBOX = 'themed-omnibox',
  WITHOUT_JAVASCRIPT = 'without-javascript',
  WORKS_OFFLINE = 'works-offline',
}

export enum SEO {
  CANONICAL = 'canonical',
  DOCUMENT_TITLE = 'document-title',
  FONT_SIZE = 'font-size',
  HREFLANG = 'hreflang',
  HTTP_STATUS_CODE = 'http-status-code',
  IMAGE_ALT = 'image-alt',
  IS_CRAWLABLE = 'is-crawlable',
  LINK_TEXT = 'link-text',
  META_DESCRIPTION = 'meta-description',
  PLUGINS = 'plugins',
  ROBOTS_TXT = 'robots-txt',
  STRUCTURED_DATA = 'structured-data',
  TAP_TARGETS = 'tap-targets',
  VIEWPORT = 'viewport',
}
