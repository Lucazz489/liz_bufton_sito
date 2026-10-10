import Link from "next/link";
import { CTA, NAV, SITE } from "@/lib/site";

// Footer scuro: chiude la pagina con nome, menu e contatti
export default function Footer() {
  return (
    <footer className="bg-fg pt-20 pb-[max(3rem,env(safe-area-inset-bottom))] text-page">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <p className="font-serif text-[2rem] leading-none">{SITE.name}</p>
          <p className="mt-3 text-[0.72rem] font-semibold tracking-[0.22em] text-page/60 uppercase">{SITE.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-3 text-[0.95rem] lg:col-span-3 lg:col-start-7">
          {[...NAV, CTA].map((i) => (
            <Link key={i.href} href={i.href} className="w-fit text-page/80 hover:text-page">
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-3 text-[0.95rem] lg:col-span-3">
          <a href={`mailto:${SITE.email}`} className="w-fit text-page/80 hover:text-page">{SITE.email}</a>
          <a href={SITE.linkedin} className="w-fit text-page/80 hover:text-page">LinkedIn</a>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-wrap justify-between gap-4 border-t border-page/15 px-6 pt-6 text-[0.85rem] text-page/50 lg:px-10">
        <span>&copy; {new Date().getFullYear()} {SITE.name}</span>
        <Link href="/privacy/" className="hover:text-page">Privacy Policy</Link>
      </div>
    </footer>
  );
}
