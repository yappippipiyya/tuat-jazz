import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Session",
  description:
    "ジャズセッションの流れを詳しく解説。イントロからテーマ、ソロ、バース、エンディングまでの進行を紹介します。",
};

const steps = [
  {
    number: "0",
    title: "イントロ",
    body: "ピアノなどが短い前奏を演奏してから始まることもあれば、カウントだけですぐにテーマへ入ることもあります。",
  },
  {
    number: "1",
    title: "前テーマ",
    body: "まず全員で曲のメロディ（テーマ）を演奏します。テーマは12小節～32小節がほとんどです。",
  },
  {
    number: "2",
    title: "ソロ",
    body: "テーマのコード進行に沿って、一人ずつ即興演奏（アドリブ）をしていきます。順番に厳密なルールはありませんが、フロント楽器（トランペット・サックス・クラリネットなど）→ギター・ピアノ→ベース（→ドラム）の順で回っていくことが多いです。",
  },
  {
    number: "3",
    title: "バース（トレード）",
    body: "曲によっては、ソロの後に「バース」と呼ばれるパートが入ることがあります。これは4小節や8小節毎に、ドラムと他の楽器が交互にフレーズを演奏し合うことです。",
  },
  {
    number: "4",
    title: "後テーマ",
    body: "ソロが一巡したら（バースが終わったら）、最初と同じように全員でテーマを演奏して曲を締めくくります。前テーマと同じメロディですが、ソロを経てバンドの一体感が増した状態で演奏するため、また違った聞こえ方になります。",
  },
  {
    number: "5",
    title: "エンディング",
    body: "曲の最後の締めです。同じフレーズを繰り返して盛り上げる「タグエンディング」や、だんだんゆっくりになっていく「リタルダンド」、リーダー役の合図（キュー）で全員一斉に音を止めるパターンなど、曲や演奏者によって様々です。この合図もその場のアイコンタクトで決まることが多く、セッションの醍醐味のひとつです。",
  },
];

export default function SessionPage() {
  return (
    <>
      <PageHeader
        eyebrow="SESSION"
        title="セッションの流れ"
        description="曲によって多少の違いはありますが、セッションでは大まかに次のような流れで演奏が進みます。"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            「セッション」とは、その場に集まったメンバーで即興的に演奏することです。テーマとする曲はその場の流れで決まり、演奏中の掛け合いはすべて即興。だからこそ毎回違う音楽が生まれる、ジャズならではの楽しみ方です。
          </p>
        </Reveal>

        <div className="relative mt-14 ml-3 space-y-10 border-l-2 border-border/80 pl-10">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80} className="relative">
              <span className="absolute -left-14 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-background text-sm font-semibold text-accent">
                {step.number}
              </span>
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                {step.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/80 bg-surface">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            言葉で見るとちょっと難しそう…と思ったら
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            実際に見学に来ていただくのが一番早いです。毎週水・土にセッションしているので、気軽に連絡してください！
          </p>
          <Link
            href="/contact"
            className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            連絡する
          </Link>
        </Reveal>
      </section>
    </>
  );
}
