import Link from "next/link";
import { CTA } from "@/lib/site";

/**
 * Prima schermata: titolo grande a sinistra, foto di Liz a destra.
 * Testi definitivi di Liz (note finali, ottobre).
 */
export default function HomeHero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-14 pb-20 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pt-20 lg:pb-28">
      <div className="lg:col-span-7">
        <h1 className="font-serif text-[clamp(2.7rem,5.6vw,5rem)] leading-[1] font-normal tracking-[-0.02em] text-balance">
          Women&rsquo;s Leadership <em className="text-label">&amp; Personal Development</em>
        </h1>
        <span aria-hidden="true" className="mt-8 block h-px w-20 bg-gold" />
        <p className="mt-8 font-serif text-[clamp(1.4rem,2vw,1.75rem)] leading-[1.3] italic">
          Find Your Clarity. Build Your Confidence. Create Your Path Forward.
        </p>
        <p className="mt-5 max-w-[46ch] text-[1.1rem] leading-[1.65] text-muted lg:text-[1.15rem]">
          A six-week immersive development programme designed to help women navigate challenges, unlock their
          potential and create meaningful, sustainable growth in their professional and personal lives.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <Link href="/programme/" className="cta">Explore the Programme</Link>
          <Link href={CTA.href} className="text-link">{CTA.label}</Link>
        </div>
      </div>

      <figure className="lg:col-span-4 lg:col-start-9">
        {/* TODO: sostituire con una foto professionale in alta risoluzione (almeno 1200px) */}
        <img
          src="/images/liz-hero.jpg"
          alt="Liz Bufton"
          width={400}
          height={400}
          className="aspect-[4/5] w-full max-w-sm object-cover object-[45%_center] lg:max-w-none"
        />
        <figcaption className="mt-4 text-[0.9rem] text-muted">
          <span className="font-serif text-[1.15rem] text-fg">Liz Bufton</span>
          <span className="mx-2 text-gold">|</span>
          Certified Neurolanguage Coach&reg;
        </figcaption>
      </figure>
    </section>
  );
}
