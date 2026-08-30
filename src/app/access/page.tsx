import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Access",
  description: "東京農工大学 小金井キャンパス・府中キャンパスへのアクセスと、部室・演奏会場へのご案内。",
};

function MapEmbed({ address, title }: { address: string; title: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg border border-border/80">
      <iframe
        title={title}
        src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
        className="h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default function AccessPage() {
  return (
    <>
      <PageHeader
        eyebrow="ACCESS"
        title="アクセス"
        description="普段の活動場所は小金井キャンパス、学園祭時は府中キャンパスでも演奏しています。"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            小金井キャンパス（工学部）
          </h2>
          <p className="mt-2 text-sm text-muted">〒184-8588 東京都小金井市中町2-24-16</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            JR中央線「東小金井駅」下車、徒歩約10分。東門（銀色のアーチが目印）から入り、まっすぐ進んで図書館前を通過。十字路も曲がらずに進むと右手に体育館が見えます。さらに奥の道を右に曲がると音楽サークル棟があり、そこが普段の活動場所です。
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <MapEmbed
              address="東京農工大学 小金井キャンパス"
              title="東京農工大学 小金井キャンパスの地図"
            />
            <div className="overflow-hidden rounded-lg border border-border/80 bg-white p-3">
              <Image
                src="/images/map-koganei.png"
                alt="小金井キャンパス内の音楽サークル棟までの案内図"
                width={1066}
                height={800}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border/80 bg-surface">
        <Reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            府中キャンパス（農学部）（学園祭）
          </h2>
          <p className="mt-2 text-sm text-muted">〒183-8509 東京都府中市幸町3-5-8</p>
          <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted sm:text-base">
            <p>JR中央線「国分寺駅」南口2番乗場から「府中駅行バス（明星学苑経由）」約10分「晴見町」バス停下車。</p>
            <p>京王線「府中駅」北口バスターミナル2番乗場から「国分寺駅南口行バス（明星学苑経由）」約7分「晴見町」バス停下車。</p>
            <p>JR武蔵野線「北府中駅」下車、徒歩約12分。</p>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            学園祭（11月）では、ジャズ喫茶を営業しています。
          </p>
          <div className="mt-6 grid gap-6">
            <MapEmbed
              address="東京農工大学 府中キャンパス"
              title="東京農工大学 府中キャンパスの地図"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
