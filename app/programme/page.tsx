import type { Metadata } from "next";
import Band from "@/components/Band";
import PageHero from "@/components/PageHero";
import ThreeElements from "@/components/sections/ThreeElements";
import SixWeeks from "@/components/sections/SixWeeks";
import FinalCta from "@/components/sections/FinalCta";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "The Six-Week Coaching Programme",
  description:
    "A six-week coaching programme for professional women: 1:1 coaching, a personal journal and a momentum toolkit, in six stages from clarity to celebration.",
};

/*
 * Pagina "Programme":
 * 1. foto a tutta larghezza con titolo e breve testo
 * 2. fascia "Three elements. One transformation."
 * 3. "A simple, <span className="text-label">powerful</span> method": i tre elementi con icone
 * 4. introduzione al percorso
 * 5. il calendario delle sei settimane
 */
export default function ProgrammePage() {
  return (
    <>
      {/* 1 */}
      <PageHero
        eyebrow="Programme"
        title={
          <>
            The Six-Week <em>Coaching Programme</em>
          </>
        }
        // TODO: testo provvisorio (dal mock-up), da confermare con Liz
        text="A six-week development experience designed to help you create meaningful change and lasting momentum."
        src="/images/programme-hero.jpg"
        alt="A group of women joining hands in a circle"
        hint="Foto orizzontale a tutta larghezza (coaching, un incontro, un ambiente di lavoro), almeno 2000px"
      />

      {/* 2 */}
      <Band as="p">
        Three elements. <em>One transformation.</em>
      </Band>

      {/* 3 */}
      <section>
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-4 text-center lg:pt-36">
          <h2 className="font-serif text-[clamp(2.4rem,4.4vw,3.6rem)] leading-[1.05] font-normal tracking-[-0.01em]">
            A simple, powerful method
          </h2>
        </div>
        <ThreeElements method />
      </section>

      <Divider />

      {/* 4 */}
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-12 text-center lg:pt-32 lg:pb-16">
        <p className="eyebrow text-label">Your six weeks</p>
        <h2 className="mt-6 font-serif text-[clamp(2.4rem,4.4vw,3.6rem)] leading-[1.05] font-normal tracking-[-0.01em]">
          A clear path. <em>Real progress.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-[48ch] text-[1.125rem] leading-[1.8] text-muted">
          One coaching session a week, each with a clear focus. Every week builds on the one before, so by the end you
          have moved from clarity to lasting change.
        </p>
      </section>

      {/* 5 */}
      <section className="pb-28 lg:pb-40">
        <h2 className="sr-only">The six weeks of the programme</h2>
        <SixWeeks />
      </section>

      <FinalCta />
    </>
  );
}