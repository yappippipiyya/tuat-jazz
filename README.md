# 東京農工大学モダンジャズ研究会 公式サイト

キャッチコピー「ハモればハッケン、揃えばコウケン」

## 技術スタック

- [Next.js](https://nextjs.org) 16 (App Router)
- [Tailwind CSS](https://tailwindcss.com) v4
- TypeScript
- パッケージ管理は [pnpm](https://pnpm.io) を使用（npm/yarnは使わない）
- デプロイ先: [Vercel](https://vercel.com)

## セットアップ

```bash
pnpm install
pnpm dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。

> **Note:** `pnpm dev` は Turbopack ではなく `next dev --webpack` を実行します。この環境では
> Turbopack 版 `next dev` が `next/font/google`（本文フォントの Noto Sans JP）を解決できず、
> 全ルートが 500 エラーになる不具合があるための回避策です。`pnpm build`（本番ビルド）は
> Turbopack のままで問題なく動作します。

## 主なコマンド

```bash
pnpm dev     # 開発サーバー起動（--webpack）
pnpm build   # 本番ビルド（Turbopack）
pnpm start   # ビルド済みアプリの起動
pnpm lint    # ESLint
```

## ページ構成

- `/` — トップページ（ヒーロー、活動内容、セッション案内、年間イベント）
- `/schedule` — 活動日程（毎週水・土のセッション、年間イベント一覧）
- `/access` — アクセス（小金井キャンパス・府中キャンパスの地図）
- `/link` — 他大学ジャズ研・ライブハウスへのリンク集
- `/contact` — 連絡先（X / Instagram / LINE。問い合わせフォームは設置していません）

## ディレクトリ構成（抜粋）

```
src/
  app/            各ページ（App Router）
  components/     Header, Footer, Reveal（スクロール表示アニメーション）など
  lib/site.ts     サークル名・SNSリンクなどのサイト共通設定
public/images/    ヒーロー画像・活動写真・地図・QRコードなど
```

サイト名やSNSリンクなど共通情報は `src/lib/site.ts` にまとまっているので、変更する場合はここを編集してください。

## デプロイ

[Vercel](https://vercel.com) にこのリポジトリを連携すれば、`main` ブランチへの push で自動ビルド・デプロイされます（フレームワークはNext.jsとして自動検出されます）。
