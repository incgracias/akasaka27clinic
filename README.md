# Akasaka27美容クリニック ランディングページ

GitHub Pagesで公開できる、HTML5 / CSS3 / Vanilla JavaScriptのみの静的ランディングページです。

## 構成

- `index.html` - ページ本体
- `style.css` - レスポンシブ対応スタイル
- `script.js` - モバイルナビゲーションなどの最小限の動作
- `images/hero-clinic.png` - Hero用ビジュアル
- `images/price-list.jpg` - 料金表JPEG
- `images/price-list-source.svg` - 料金表の編集用ソース
- `favicon.svg` - favicon

## 公開方法

1. このディレクトリをGitHubリポジトリにpushします。
2. GitHubの `Settings` → `Pages` で公開ブランチを選択します。
3. 公開後、`index.html` の `og:url` をGitHub Pagesの公開URLに変更します。

## メンテナンス

- 予約URLを変更する場合は、`index.html` 内のLINE予約・WEB予約リンクを更新してください。
- 料金表を変更する場合は、`images/price-list-source.svg` を編集し、JPEGへ再変換してください。
- Google Mapを変更する場合は、`index.html` 内のiframe `src` を更新してください。
