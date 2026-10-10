import Band from "@/components/Band";
import Divider from "@/components/Divider";

/**
 * "The experience": fascia cliccabile (solo in home) + testo centrato + divisore.
 * Nella pagina The Programme si usa senza fascia e con il titolo come h1.
 */
export default function ProgrammeIntro({ band = true }: { band?: boolean }) {
  const Heading = band ? "h2" : "h1";
  return (
    <section>
      {band && (
        <Band as="p" href="/programme/">
          Explore <em>the programme</em>
        </Band>
      )}

      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center lg:pt-40 lg:pb-20">
        <p className="eyebrow text-label">The experience</p>
        <Heading className="mt-6 font-serif text-[clamp(2.4rem,4.4vw,3.6rem)] leading-[1.05] font-normal tracking-[-0.01em]">
          More than coaching alone
        </Heading>
        <p className="mt-5 font-serif text-[clamp(1.6rem,2.3vw,2rem)] leading-[1.3] font-medium text-label italic">
          One experience. Three fundamental elements.
        </p>
        <p className="mx-auto mt-10 max-w-[58ch] text-[1.125rem] leading-[1.8] text-muted">
          Designed from more than a decade of working with and developing people, the programme brings together three
          connected forms of support — each with a distinct role in your six-week experience.
        </p>
      </div>
      <Divider />
    </section>
  );
}
