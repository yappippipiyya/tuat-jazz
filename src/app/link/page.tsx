import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Link",
  description: "他大学のジャズ研究会や、日頃お世話になっているライブ・セッションハウスへのリンク集。",
};

const jazzClubs = [
  { name: "電通大ジャズ研", url: "https://x.com/uecjazz" },
  { name: "東京外国語大学モダンジャズ研究所", url: "https://x.com/tufs_jazz_lab" },
  { name: "東京学芸大学軽音楽部JAZZ研", url: "https://x.com/Key_Cocko" },
  { name: "東京大学ジャズ研究会", url: "https://x.com/utokyojazz" },
  { name: "一橋大学モダンジャズ研究会", url: "https://x.com/hit_jazz" },
];

const liveHouses = [
  { name: "GINZ - Jazz & Soul Live -", url: "http://www.sam.hi-ho.ne.jp/ginz/" },
  { name: "Tea&Jazz Bar 停車場", url: "https://www.teishabajazz.com/" },
];

function LinkList({ items }: { items: { name: string; url: string }[] }) {
  return (
    <ul className="mt-8 divide-y divide-border/80 border-y border-border/80">
      {items.map((item) => (
        <li key={item.url}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 py-4 text-sm text-foreground transition-colors hover:text-accent sm:text-base"
          >
            <span>{item.name}</span>
            <span aria-hidden className="text-muted">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function LinkPage() {
  return (
    <>
      <PageHeader
        eyebrow="LINK"
        title="リンク"
        description="日頃交流のある他大学のジャズ研究会や、お世話になっているライブ・セッションハウスをご紹介します。"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-2xl text-foreground sm:text-3xl">
          他大学ジャズ研
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          合同セッションなどで交流のあるジャズ研究会です。ジャズ研といえばTwitterなので(偏見)、Twitterアカウントを掲載しておきます。
        </p>
        <LinkList items={jazzClubs} />
      </section>

      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">
            ライブ・セッションハウス
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            定期演奏会などでお世話になっています。
          </p>
          <LinkList items={liveHouses} />
        </div>
      </section>
    </>
  );
}
