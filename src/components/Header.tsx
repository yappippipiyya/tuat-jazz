"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // iOS Safari ignores `overflow:hidden` on body for rubber-band scroll,
  // so pin the body in place with `position:fixed` and restore the scroll
  // position on close instead.
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { body } = document;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-lg font-semibold tracking-wide text-foreground"
          >
            <Image
              src="/images/favicon.png"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 rounded-full object-cover"
            />
            {siteConfig.shortName}
          </Link>

          <nav className="hidden gap-8 md:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm tracking-wide transition-colors hover:text-accent ${
                    active ? "text-accent" : "text-foreground/80"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-2 left-0 h-px w-full bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-px w-6 bg-foreground transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-foreground transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Solid (non-blurred) panel — safe to nest inside the sticky header. */}
        <nav
          className={`absolute inset-x-0 top-full overflow-hidden border-t border-border/80 bg-background transition-all duration-300 ease-out md:hidden ${
            open ? "max-h-[calc(100dvh-4rem)] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="mx-auto flex max-w-6xl flex-col divide-y divide-border/80 px-4 sm:px-6">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    className={`block py-4 text-base tracking-wide ${
                      active ? "text-accent" : "text-foreground/85"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {/*
        Blurred backdrop lives as a sibling of <header>, not inside it.
        iOS Safari mis-resolves the containing block for a position:fixed
        element nested under a position:sticky ancestor, which makes
        backdrop-filter fail to render there — so it can't live inside header.
      */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] bg-background/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}
