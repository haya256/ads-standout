# Ads Standout

DuckDuckGo・X(Twitter) の広告を赤枠でハイライトし、「広告」バッジを表示するブラウザ拡張機能です。

## 対応サイト

- **DuckDuckGo** — 検索結果のスポンサーリンク
- **X (Twitter)** — タイムラインのプロモーションツイート

## インストール

### Chrome / Edge

1. このリポジトリをクローンまたはZIPでダウンロード
2. `chrome://extensions/`（Edgeは `edge://extensions/`）を開く
3. 「デベロッパーモード」をオン
4. 「パッケージ化されていない拡張機能を読み込む」→ このフォルダを選択

## 動作

- 広告要素に赤枠と薄赤の背景を付加
- 「広告」バッジを表示
- 動的に追加される広告にも対応（MutationObserver）

## ライセンス

[MIT](LICENSE)
