const SITE_CONFIGS = [
  {
    hostnames: ['duckduckgo.com'],
    selectors: ['.result--ad', '[data-testid="ad"]', '.badge--ad'],
    cssClass: 'ads-standout-highlighted--ddg',
  },
  {
    // X のプロモーションツイートを検出：
    // data-testid="placementTracking" がプロモーションツイートのコンテナ
    hostnames: ['x.com', 'twitter.com'],
    selectors: ['[data-testid="placementTracking"]'],
    cssClass: 'ads-standout-highlighted--x',
  },
];

function highlightElement(el, cssClass = null) {
  if (el.parentElement?.closest('.ads-standout-highlighted')) return;
  el.classList.add('ads-standout-highlighted');
  if (cssClass) el.classList.add(cssClass);
}

function highlightAds() {
  const host = location.hostname;
  const config = SITE_CONFIGS.find(c => c.hostnames.some(h => host.includes(h)));
  if (!config) return;
  config.selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => highlightElement(el, config.cssClass));
  });
}

// 初回実行
highlightAds();

// 動的に追加される要素にも対応
const observer = new MutationObserver(highlightAds);
observer.observe(document.body, { childList: true, subtree: true });
