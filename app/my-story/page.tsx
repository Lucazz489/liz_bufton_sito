import type { Metadata } from "next";
import Link from "next/link";
import Band from "@/components/Band";
import ImageSlot from "@/components/ImageSlot";
import JourneyArt from "@/components/home/JourneyArt";
import { CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "My Story",
  description:
    "Why this work is personal to Liz Bufton: 12 years of training and coaching professionals across Europe, Neurolanguage Coaching® and why she works with women.",
};

/*
 * Pagina "My Story", sul modello del sito di riferimento:
 * 1. foto a tutta larghezza con il titolo sopra
 * 2. fascia con la frase in evidenza
 * 3. testo centrato
 * 4. due colonne: testo a sinistra, foto a destra
 * 5. "Coaching, the brain & change" su sfondo alternato
 * 6. illustrazione ad acquerello del percorso
 * 7. "Why women?" centrato, con il pulsante
 *
 * Le foto: salvarle in public/images/ e passare src="/images/…" ai componenti ImageSlot.
 */
export default function MyStoryPage() {
  return (
    <>
      {/* 1. Foto a tutta larghezza con titolo */}
      <section className="relative isolate flex min-h-[min(78vh,720px)] items-end overflow-hidden">
        <ImageSlot
          alt="Liz Bufton"
          hint="Foto orizzontale di Liz, almeno 2000px di larghezza (va bene anche in bianco e nero)"
          className="absolute inset-0 -z-10 h-full w-full"
        />
        {/* velatura per rendere leggibile il testo sopra la foto */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1a1416]/75 via-[#1a1416]/35 to-transparent" />
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 text-[#f6f0ec] lg:px-10 lg:pb-24">
          <p className="eyebrow">My story</p>
          <h1 className="mt-5 max-w-[16ch] font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-[1.05] font-normal tracking-[-0.01em]">
            This work is <em>personal to me.</em>
          </h1>
        </div>
      </section>

      {/* 2. Fascia */}
      <Band as="p">
        I know many of those head-nodding moments <em>because I&rsquo;ve lived them too.</em>
      </Band>

      {/* 3. Testo centrato */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-36">
        <p className="font-serif text-[clamp(1.5rem,2.2vw,1.9rem)] leading-[1.4] font-medium lining-nums">
          I&rsquo;m 53. I&rsquo;ve experienced change, questioned direction, grown, adapted and continued to work on
          myself.
        </p>
        <p className="mx-auto mt-6 max-w-[58ch] text-[1.125rem] leading-[1.8] text-muted">
          And over the years, I&rsquo;ve seen many of those same moments in the women I&rsquo;ve taught, trained and
          coached.
        </p>
        <p className="mx-auto mt-10 max-w-[44ch] font-serif text-[1.35rem] leading-[1.4] text-label italic">
          That understanding isn&rsquo;t something I learned on a course. It&rsquo;s something I bring with me into the
          room.
        </p>
      </section>

      {/* 4. Due colonne: testo e foto */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-36">
        <div className="max-w-[34rem] lg:col-span-6">
          <p className="eyebrow text-label lining-nums">12 years of working with people and their development</p>
          <p className="mt-6 font-serif text-[1.6rem] leading-[1.3] font-medium lining-nums">
            For more than 12 years, I&rsquo;ve trained, taught and coached professionals across Europe — from managers
            and emerging leaders to senior leaders, partners and CEOs.
          </p>
          <p className="mt-6 text-[1.0625rem] leading-[1.75] font-semibold">
            Different roles. Different organisations. Different challenges.
          </p>
          <p className="mt-5 text-[1.0625rem] leading-[1.75] text-muted">
            But the part of my work I have always valued most is seeing the moment someone sees something differently,
            makes a connection or realises that change is possible.
          </p>
          <p className="mt-8 font-serif text-[1.35rem] text-label italic">That is why I coach.</p>
        </div>
        <ImageSlot
          alt="Liz Bufton at work"
          hint="Foto verticale di Liz al lavoro (formazione, coaching, un incontro)"
          className="aspect-[4/5] w-full max-w-md justify-self-center lg:col-span-5 lg:col-start-8 lg:max-w-none"
        />
      </section>

      {/* 5. Coaching, the brain & change */}
      <section className="rounded-br-[56px] bg-alt text-alt-fg">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-36">
          <div className="lg:col-span-5">
            <p className="eyebrow text-alt-label">Coaching, the brain &amp; change</p>
            <ul className="mt-8 space-y-5 font-serif text-[clamp(1.6rem,2.4vw,2.1rem)] leading-[1.2]">
              <li>Certified Neurolanguage Coach&reg;</li>
              <li className="text-[0.8em] text-alt-muted italic">
                Training accredited by the International Coaching Federation (ICF)
              </li>
            </ul>
          </div>
          <div className="max-w-[34rem] lg:col-span-6 lg:col-start-7 lg:pt-12">
            <p className="text-[1.25rem] leading-[1.6] font-medium">
              My development in Neurolanguage Coaching&reg; brought together areas that fascinate me: coaching,
              neuroscience, emotional intelligence and how people learn and change.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Illustrazione ad acquerello (la stessa della home) */}
      <div className="pt-16 lg:pt-24">
        <JourneyArt />
      </div>

      {/* 7. Why women? */}
      <section className="mx-auto max-w-3xl px-6 pb-28 text-center lg:pb-40">
        <p className="eyebrow text-label">Why women?</p>
        <h2 className="mt-6 font-serif text-[clamp(2.4rem,4.4vw,3.6rem)] leading-[1.05] font-normal italic">
          Because I care.
        </h2>
        <p className="mx-auto mt-10 max-w-[58ch] text-[1.125rem] leading-[1.8] text-muted">
          I know what it is to be a woman moving through different stages of life and work. And after years of working
          with women, I recognise many of those moments that don&rsquo;t always need explaining.
        </p>
        <p className="mx-auto mt-5 max-w-[58ch] text-[1.125rem] leading-[1.8] text-muted">
          I have also worked hard on my own development and continue to do so — because I believe that if I am going to
          ask another woman to invest in herself, I should be willing to keep investing in myself too.
        </p>
        <p className="mx-auto mt-10 max-w-[46ch] font-serif text-[1.5rem] leading-[1.4] font-medium">
          What gives me the greatest satisfaction is seeing a woman leave my work with something she didn&rsquo;t have
          when she arrived — a different perspective, a decision, greater belief in herself, or simply the feeling that
          something has moved.
        </p>
        <Link href={CTA.href} className="cta mt-12">Book a complimentary call</Link>
      </section>
    </>
  );
}