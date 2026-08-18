import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "見学・入部のお問い合わせはSNSからお気軽にどうぞ。",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="連絡先"
        description="見学・入部のご相談、練習日程のお問い合わせなどは、公式LINE・SNSのDMからお気軽にご連絡ください。"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2">
          <Reveal delay={0}>
            <a
              href={siteConfig.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col items-start gap-3 rounded-lg border border-border/80 bg-surface p-8 transition-colors hover:border-accent"
            >
              <span className="text-xl font-semibold text-foreground">X (Twitter)</span>
              <span className="text-sm text-muted">{siteConfig.twitterHandle}</span>
            </a>
          </Reveal>
          <Reveal delay={100}>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col items-start gap-3 rounded-lg border border-border/80 bg-surface p-8 transition-colors hover:border-accent"
            >
              <span className="text-xl font-semibold text-foreground">Instagram</span>
              <span className="text-sm text-muted">{siteConfig.instagramHandle}</span>
            </a>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex h-full flex-col items-start gap-3 rounded-lg border border-border/80 bg-surface p-8">
              <span className="text-xl font-semibold text-foreground">公式LINE</span>
              <span className="text-sm text-muted">QRコードを読み取って友だち追加してください。</span>
              <div className="mt-2 overflow-hidden rounded-md border border-border/80 bg-white p-2">
                <Image
                  src="/images/line-qr.png"
                  alt="農工大ジャズ研 公式LINEのQRコード"
                  width={159}
                  height={159}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
