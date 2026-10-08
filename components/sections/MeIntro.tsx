import Link from "next/link";

/**
 * "Me, why I care and how I can help" su sfondo alternato (rosa tenue).
 * A sinistra la frase principale in serif, con la parte finale in corsivo;
 * a destra un paragrafo d'apertura piu' grande, poi il testo e il pulsante.
 */
export default function MeIntro({ as: Heading = "h2", withLink = true }: { as?: "h1" | "h2"; withLink?: boolean }) {
  return (
    <section className="rounded-br-[56px] bg-alt text-alt-fg">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-36">
        <Heading className="font-serif text-[clamp(1.9rem,2.7vw,2.5rem)] leading-[1.15] font-normal tracking-[-0.005em] lining-nums lg:col-span-5">
          After 12 years of training, teaching and coaching professionals, I wanted to create the kind of development
          experience I believe women deserve:{" "}
          <em className="font-semibold text-alt-label">personal, purposeful and designed to stay with them beyond the conversation.</em>
        </Heading>

        <div className="max-w-[34rem] lg:col-span-6 lg:col-start-7 lg:pt-2">
          <p className="mb-8 text-[1.4rem] leading-[1.4] font-medium">
            My work with women has shaped this programme and strengthened my belief in creating dedicated space for
            women to focus on themselves and their development.
          </p>
          <p className="mb-5 text-[1.0625rem] leading-[1.75] text-alt-muted">
            I&rsquo;ve worked with professionals at every level, from managers to senior leaders, partners and CEOs,
            and I&rsquo;ve seen the value of development that gives people the opportunity to think differently,
            understand themselves more deeply and grow professionally and personally.
          </p>
          <p className="mb-5 text-[1.0625rem] leading-[1.75] text-alt-muted">
            I wanted to bring that experience into something focused and practical for women — combining coaching,
            reflection and learning in a six-week experience that has a clear direction while remaining completely
            personal.
          </p>
          {withLink && (
            <Link href="/my-story/" className="cta mt-7">Discover my story</Link>
          )}
        </div>
      </div>
    </section>
  );
}