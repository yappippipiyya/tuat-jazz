import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

const features = [
  {
    title: "練習し放題",
    body: "スタジオ3部屋を、平日も休日も毎日9:00〜20:00で自由に使用可能。空いていればいつでも音出しできます。",
  },
  {
    title: "共用楽器が充実",
    body: "アップライトピアノ、ドラムセット、コントラバス、エレキベース、ビブラフォンや、サックス、トランペット、クラリネットなどの管楽器まで一通り揃っています。",
  },
  {
    title: "初心者も大歓迎",
    body: "楽器経験がなくても大丈夫。先輩たちが基礎から丁寧にサポートします。まずは見学だけでも大歓迎です。",
  },
  {
    title: "兼部・兼サーOK",
    body: "他のサークルや部活と掛け持ちしているメンバーも多く、学業やアルバイトとの両立も可能です。",
  },
];

const events = [
  { month: "5月", name: "新歓定期演奏会" },
  { month: "7月", name: "学祭（工学部キャンパス）" },
  { month: "9月", name: "夏合宿" },
  { month: "11月", name: "学祭（農学部キャンパス）" },
  { month: "12月", name: "クリスマス定期演奏会" },
  { month: "3月", name: "追い出し定期演奏会" },
];

export default function Home() {
  return (
    <>
      <section className="relative flex h-[86vh] min-h-[520px] w-full items-end overflow-hidden">
        <Image
          src="/images/bgimg.jpg"
          alt="ジャズライブハウスのステージに置かれたトランペットとドラムセット"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />
        <div
          className="absolute inset-x-0 bottom-0 h-24 sm:h-32"
          style={{ background: "linear-gradient(to bottom, transparent, var(--background))" }}
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-38 sm:px-6 sm:pb-25">
          <p className="text-sm tracking-[0.3em] text-amber-100/80">
            TUAT MODERN JAZZ LAB
          </p>
          <h1 className="mt-4 text-[40px] font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            {siteConfig.catchphrase.split("、").map((line, i) => (
              <span key={line} className="block">
                {i === 0 ? `${line}、` : line}
              </span>
            ))}
          </h1>
          <p className="mt-5 mr-10 max-w-xl text-base leading-relaxed text-white/80 sm:text-base">
            {siteConfig.name}は、楽器経験を問わず音楽が好きな仲間が集まってジャズを演奏するサークルです。
          </p>
        </div>

        <div className="absolute bottom-5 right-4 z-10 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-xs text-white/70 backdrop-blur-sm sm:right-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            className="h-3.5 w-3.5 shrink-0"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"
            />
            <circle cx="12" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="tracking-wide">工学部 音楽サークル棟</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100} className="border-l-2 border-accent/60 pl-6">
              <h2 className="text-xl font-semibold text-foreground">{f.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border/80 bg-surface">
        <Reveal className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            セッションは毎週水・土
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            セッションとは、その場に集まったメンバーで即興的にバンドを組んで演奏すること。曲やメンバーはその場で決まるので、初めてでも気軽に参加できます。その日部室にいるメンバーで自由に演奏を楽しんでいます。
          </p>
          <Link
            href="/session"
            className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
          >
            セッションについて詳しく見る →
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            年間の主なイベント
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.month} delay={i * 80}>
              <p className="text-lg font-semibold text-accent">{e.month}</p>
              <p className="mt-1 text-sm text-muted">{e.name}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          各演奏会ではバンドを組んで演奏することができます。
        </p>
      </section>

      <section className="border-t border-border/80 bg-surface">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-20 sm:px-6">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            見学・体験はSNSからお気軽に
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            入部希望の方はもちろん、見学だけでも大歓迎です。まずは公式Xをフォローして、お気軽にDMしてください。
          </p>
          <Link
            href="/contact"
            className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            連絡先を見る
          </Link>
        </Reveal>
      </section>
    </>
  );
}
