// DuckDuckGo の広告要素を検出するセレクタ
const DDG_AD_SELECTORS = [
  '.result--ad',
  '[data-testid="ad"]',
  '.badge--ad',
];


function highlightElement(el) {
  el.classList.add('ads-standout-highlighted');
}

function highlightDDGAds() {
  DDG_AD_SELECTORS.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => highlightElement(el));
  });
}

// X のプロモーションツイートを検出：
// data-testid="placementTracking" がプロモーションツイートのコンテナ
function highlightXAds() {
  document.querySelectorAll('[data-testid="placementTracking"]').forEach(el => {
    highlightElement(el);
  });
}

function highlightAds() {
  const host = location.hostname;
  if (host.includes('duckduckgo.com')) {
    highlightDDGAds();
  } else if (host.includes('x.com') || host.includes('twitter.com')) {
    highlightXAds();
  }
}

// 初回実行
highlightAds();

// 動的に追加される要素にも対応
const observer = new MutationObserver(highlightAds);
observer.observe(document.body, { childList: true, subtree: true });
