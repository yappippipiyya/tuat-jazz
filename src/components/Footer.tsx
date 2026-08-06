import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border/80 bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-muted">{siteConfig.catchphrase}</p>
        </div>

        <nav>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={siteConfig.twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          {siteConfig.twitterHandle}
        </a>
      </div>

      <div className="border-t border-border/80 px-4 py-4 text-center text-xs text-muted sm:px-6">
        &copy; {new Date().getFullYear()} {siteConfig.name}
      </div>
    </footer>
  );
}
