import type { SVGProps } from "react";
import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.6 10.6 20.4 3h-1.6l-5.9 6.6L8.2 3H3l7.1 10L3 21h1.6l6.2-7 5 7H21l-7.4-10.4Zm-2.2 2.5-.7-1L5 4.3h2.5l4.6 6.4.7 1 6 8.4h-2.5l-4.9-6.9Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path
        d="M12 3.5c-5 0-9 3.2-9 7.2 0 3.6 3.2 6.6 7.5 7.1.9.2.8.6.6 1.9l-.2 1c-.1.6.4 1 1 .7 2.6-1.5 5.6-3.5 7.6-6.1 1.2-1.4 1.9-3 1.9-4.5 0-4-4-7.2-9-7.2Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-base font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-sm text-muted">{siteConfig.catchphrase}</p>
        </div>

        <nav>
          <p className="text-sm font-semibold text-foreground">SITEMAP</p>
          <ul className="mt-3 flex flex-col gap-2.5 text-sm text-muted">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-foreground">SNS</p>
          <ul className="mt-3 flex flex-col gap-2.5 text-sm">
            <li>
              <a
                href={siteConfig.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
              >
                <XIcon className="h-4 w-4 shrink-0" />
                <span>
                  <span className="text-muted/70">{siteConfig.twitterHandle}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
              >
                <InstagramIcon className="h-4 w-4 shrink-0" />
                <span>
                  <span className="text-muted/70">{siteConfig.instagramHandle}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
              >
                <LineIcon className="h-4 w-4 shrink-0" />
                <span>
                  <span className="text-muted/70">{siteConfig.lineHandle}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/80 px-4 py-4 text-center text-xs text-muted sm:px-6">
        &copy; {new Date().getFullYear()} {siteConfig.name}
      </div>
    </footer>
  );
}
