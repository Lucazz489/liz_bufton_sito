"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CTA, NAV, SITE } from "@/lib/site";

// Navbar avorio con un filo rosa in basso.
// Voci del menu in testo semplice (voce attiva sottolineata); la prenotazione e' un pulsante.
// Da 1024px in su le voci sono sempre visibili; sotto i 1024px si apre con il pulsante "Menu".
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-label bg-head/95 pt-[env(safe-area-inset-top)] text-head-fg backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:h-24 lg:px-10">
        {/* TODO: sostituire con il logo quando e' pronto */}
        <Link href="/" onClick={close} className="leading-none">
          <span className="block font-serif text-[1.85rem] font-medium tracking-[0.01em]">{SITE.name}</span>
        </Link>

        <button
          className="p-2 text-sm font-semibold tracking-[0.14em] uppercase lg:hidden"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="main-nav"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col items-start gap-1 border-b-[3px] border-label bg-head px-6 pb-8 lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 xl:gap-10`}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`border-b py-2.5 text-[1.05rem] leading-tight font-medium whitespace-nowrap transition-colors lg:py-1 lg:text-[0.9rem] xl:text-[0.95rem] ${
                isActive(item.href) ? "border-head-fg" : "border-transparent hover:border-head-fg"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={CTA.href}
            onClick={close}
            aria-current={isActive(CTA.href) ? "page" : undefined}
            className="cta mt-4 !px-5 !py-3 !text-[0.72rem] whitespace-nowrap lg:mt-0"
          >
            {CTA.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
