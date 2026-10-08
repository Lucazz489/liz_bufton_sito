import Link from "next/link";
import { SITE } from "@/lib/site";

// Footer con gli stessi colori della navbar: la pagina e' "incorniciata" in alto e in basso
export default function Footer() {
  return (
    <footer className="bg-head pt-14 pb-[max(3.5rem,env(safe-area-inset-bottom))] text-[0.95rem] text-head-fg">
      <div className="mx-auto flex max-w-7xl flex-wrap items-baseline justify-between gap-6 px-6 lg:px-10">
        <span className="font-serif text-2xl font-medium">{SITE.name}</span>
        <span className="flex flex-wrap gap-8">
          <a href={`mailto:${SITE.email}`} className="underline-offset-4 hover:underline">{SITE.email}</a>
          <a href={SITE.linkedin} className="underline-offset-4 hover:underline">LinkedIn</a>
          <Link href="/privacy/" className="underline-offset-4 hover:underline">Privacy Policy</Link>
          <span>© {new Date().getFullYear()}</span>
        </span>
      </div>
    </footer>
  );
}