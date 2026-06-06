# 信州のご隠居ファーム 公式サイト

Next.js 15 / TypeScript / App Router / Tailwind CSS / microCMS で実装した農園公式サイトです。
EC 機能は持たず、農園紹介、農園の日々、作物紹介、販売場所、お問い合わせに絞った 1 ページ LP を主導線にしています。

## セットアップ

```bash
npm install
cp .env.example .env.local
npm run dev
```

http://localhost:3000 を開きます。

## 環境変数

```bash
MICROCMS_SERVICE_DOMAIN=
MICROCMS_API_KEY=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GOOGLE_FORM_URL=
```

- `MICROCMS_SERVICE_DOMAIN`: microCMS のサービスドメイン
- `MICROCMS_API_KEY`: microCMS の API キー
- `NEXT_PUBLIC_SITE_URL`: canonical / OGP / sitemap で使う公開 URL
- `NEXT_PUBLIC_GOOGLE_FORM_URL`: お問い合わせで使う Google フォームの公開 URL

`.env.local` は `.gitignore` 対象です。API キーやフォーム URL を GitHub へコミットしないでください。

## ページ内アンカー設計

TOP ページを主導線にした LP として、Header / Footer は以下のアンカーに遷移します。

- `#about`: ごあいさつ
- `#diary`: 農園の日々
- `#crops`: 育てているもの
- `#sales`: 販売場所
- `#contact`: お問い合わせ

`/diary` と `/diary/[slug]` は microCMS の記事一覧・詳細ページとして残しています。

## microCMS

CMS 管理対象は `diary` と `news` のみです。
`crops` と `sales` は API を作らず、コード内の固定コンテンツとして管理します。

### diary

- API ID: `diary`
- `title`: string
- `slug`: string
- `eyecatch`: image optional
- `body`: richEditor
- `publishedAt`: microCMS 標準フィールド

### news

- API ID: `news`
- `title`: string
- `body`: richEditor
- `publishedAt`: microCMS 標準フィールド

## お問い合わせ

お問い合わせは Google フォームへの外部リンクで運用します。
Google フォームを公開し、取得した URL を `NEXT_PUBLIC_GOOGLE_FORM_URL` に設定してください。

未設定の場合も本番画面が壊れないよう、準備中の案内を表示します。

## 画像差し替え

固定コンテンツの代替画像は `src/lib/microcms.ts` の `fallbackImages` で管理しています。

- `hero`: TOP のメイン画像
- `rice`: お米、diary 空状態
- `grapes`: ぶどう
- `vegetables`: 夏野菜
- `winter`: 冬野菜
- `field`: ごあいさつ
- `market`: 販売情報などの追加用

microCMS の diary に `eyecatch` が設定されている場合は、記事カードと詳細ページでその画像を優先します。

## 今後の拡張候補

- ご隠居本人や農作業の実写真への差し替え
- Google フォームの正式URL設定
- diary 記事のカテゴリやタグ追加
- news のTOP表示
- 独自ドメイン設定
- OGP画像の専用制作

## デプロイ

Vercel に連携し、必要な環境変数を設定してください。

```bash
npm run lint
npm run build
```

ビルドが成功すれば Vercel へデプロイ可能です。
