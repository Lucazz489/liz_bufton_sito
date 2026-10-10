import Link from "next/link";
import { CTA } from "@/lib/site";

/**
 * Prima schermata: titolo grande a sinistra, foto di Liz a destra.
 * Un messaggio, una frase di supporto, un pulsante principale.
 */
export default function HomeHero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-14 pb-20 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pt-20 lg:pb-28">
      <div className="lg:col-span-7">
        <p className="text-[0.78rem] font-semibold tracking-[0.22em] text-label uppercase">
          Coaching for professional women
        </p>
        <h1 className="mt-6 font-serif text-[clamp(3rem,6.4vw,5.6rem)] leading-[0.98] font-normal tracking-[-0.02em]">
          Ready for what <em className="text-label">comes next?</em>
        </h1>
        <p className="mt-8 max-w-[34ch] text-[1.2rem] leading-[1.6] text-muted lg:text-[1.3rem]">
          A six-week coaching programme for women navigating progression, greater responsibility, change and new
          direction.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <Link href={CTA.href} className="cta">Book a complimentary call</Link>
          <Link href="/programme/" className="text-link">Explore the programme</Link>
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
          <span className="mx-2 text-rule">|</span>
          Certified Neurolanguage Coach&reg;
        </figcaption>
      </figure>
    </section>
  );
}
