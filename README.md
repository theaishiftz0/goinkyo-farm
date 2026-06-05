# 信州のご隠居ファーム 公式サイト

Next.js 15 / TypeScript / App Router / Tailwind CSS で実装した農園公式サイトです。
EC 機能は持たず、農園紹介、作物紹介、農園の日々、販売情報、お問い合わせに絞っています。

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
NEXT_PUBLIC_FORMSPREE_ENDPOINT=
```

- `MICROCMS_SERVICE_DOMAIN`: microCMS のサービスドメイン
- `MICROCMS_API_KEY`: microCMS の API キー
- `NEXT_PUBLIC_SITE_URL`: canonical / OGP / sitemap で使う公開 URL
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT`: Formspree のフォーム送信先

microCMS または Formspree の環境変数が未設定でも、ページ表示は壊れないようにしています。

## microCMS

CMS 管理対象は `diary` と `news` のみです。

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

`crops` と `sales` は API を作らず、コード内の固定コンテンツとして管理します。

## デプロイ

Vercel に連携し、上記環境変数を設定してください。

```bash
npm run build
```

ビルドが成功すれば Vercel へデプロイ可能です。
