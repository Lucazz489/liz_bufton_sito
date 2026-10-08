"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CTA, NAV, SITE } from "@/lib/site";

// Voci del menu: testo in grassetto, nessun box, voce attiva sottolineata.
// Da 1024px in su le voci sono sempre visibili (testo e spazi si adattano alla larghezza);
// sotto i 1024px (tablet e telefoni) il menu si apre con il pulsante "Menu".
const ITEMS = [...NAV, CTA];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-head pt-[env(safe-area-inset-top)] text-head-fg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:h-24 lg:px-10">
        {/* TODO: sostituire con il logo quando e' pronto */}
        <Link href="/" onClick={close} className="font-serif text-[1.75rem] leading-none font-semibold tracking-tight">
          {SITE.name}
        </Link>

        <button
          className="p-2 text-base font-bold lg:hidden"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="main-nav"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-20 flex-col items-start gap-1 bg-head px-6 pb-8 lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:p-0 xl:gap-10 2xl:gap-14`}
        >
          {ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`border-b-2 py-2.5 text-[1.3rem] leading-tight font-bold whitespace-nowrap transition-colors lg:py-1 lg:text-[1.05rem] xl:text-[1.2rem] 2xl:text-[1.3rem] ${
                isActive(item.href) ? "border-head-fg" : "border-transparent hover:border-head-fg"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}