export const siteConfig = {
  name: "東京農工大学モダンジャズ研究会",
  shortName: "東京農工大学モダンジャズ研究会",
  catchphrase: "ハモればハッケン、揃えばコウケン",
  description:
    "東京農工大学モダンジャズ研究会の公式サイト。毎週水・土に部室でセッションを開催中。初心者・経験者・他大学の方も歓迎です。",
  twitterHandle: "@TUAT_ModernJazz",
  twitterUrl: "https://twitter.com/TUAT_ModernJazz",
  instagramHandle: "@tuat_modernjazz",
  instagramUrl: "https://www.instagram.com/tuat_modernjazz",
  lineHandle: "LINE 公式アカウント",
  lineUrl: "https://line.me/R/ti/p/@lrv1282g",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/session", label: "Session" },
  { href: "/schedule", label: "Schedule" },
  { href: "/access", label: "Access" },
  { href: "/link", label: "Link" },
  { href: "/contact", label: "Contact" },
] as const;
