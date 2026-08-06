import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
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
        description="見学・入部のご相談、練習日程のお問い合わせなどは、下記のSNSからお気軽にご連絡ください。"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2">
          <a
            href={siteConfig.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start gap-3 rounded-lg border border-border/80 bg-surface p-8 transition-colors hover:border-accent"
          >
            <span className="font-display text-xl text-foreground">X (Twitter)</span>
            <span className="text-sm text-muted">{siteConfig.twitterHandle}</span>
          </a>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start gap-3 rounded-lg border border-border/80 bg-surface p-8 transition-colors hover:border-accent"
          >
            <span className="font-display text-xl text-foreground">Instagram</span>
            <span className="text-sm text-muted">{siteConfig.instagramHandle}</span>
          </a>

          <div className="flex flex-col items-start gap-3 rounded-lg border border-border/80 bg-surface p-8">
            <span className="font-display text-xl text-foreground">公式LINE</span>
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
        </div>
      </section>
    </>
  );
}
