import Link from "next/link";
import { FEATURED, OTHERS, type Testimonial } from "@/lib/testimonials";
import { CTA } from "@/lib/site";

/** Una testimonianza: virgolette in oro, testo in corsivo, nome e ruolo */
function Quote({ q, large = false }: { q: Testimonial; large?: boolean }) {
  return (
    <figure className={large ? "text-center" : "flex h-full flex-col"}>
      <span aria-hidden="true" className={`block font-serif leading-[0.6] text-gold ${large ? "text-[5rem]" : "text-[3.5rem]"}`}>
        &ldquo;
      </span>
      <blockquote
        className={`mt-5 space-y-4 font-serif italic ${
          large ? "text-[clamp(1.3rem,2vw,1.6rem)] leading-[1.45]" : "text-[1.2rem] leading-[1.5]"
        }`}
      >
        {q.text.map((t) => (
          <p key={t.slice(0, 24)}>{t}</p>
        ))}
      </blockquote>
      <figcaption className={large ? "mt-10" : "mt-auto pt-8"}>
        <span className={`block font-serif font-semibold ${large ? "text-[1.5rem]" : "text-[1.3rem]"}`}>{q.name}</span>
        <span className="mt-1 block text-[0.95rem] text-alt-muted">{q.role}</span>
      </figcaption>
    </figure>
  );
}

/**
 * - <Testimonials />      testimonianza in evidenza (Mirella), grande e centrata
 * - <Testimonials rest /> sezione "What clients say" con tutte le altre e l'invito a prenotare la chiamata
 */
export default function Testimonials({ rest = false }: { rest?: boolean }) {
  if (!rest) {
    return (
      <section className="rounded-br-[56px] bg-alt px-6 py-24 text-alt-fg lg:px-10 lg:py-32">
        <p className="eyebrow text-center text-alt-label">Kind words</p>
        <h2 className="sr-only">What a client says</h2>
        <div className="mx-auto mt-10 max-w-3xl">
          <Quote q={FEATURED} large />
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 pt-24 text-center lg:pt-36">
        <p className="eyebrow text-label">What clients say</p>
        <h2 className="mt-6 font-serif text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.08] font-normal tracking-[-0.01em] text-balance">
          Some wonderful words from people I&rsquo;ve worked with
        </h2>
        <p className="mx-auto mt-6 max-w-[56ch] text-[1.125rem] leading-[1.8] text-muted">
          Over the years, I&rsquo;ve had the privilege of working with people across different roles, organisations and
          stages of their careers. Here are some of their words about working with me.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 px-6 md:grid-cols-2 lg:gap-8 lg:px-10">
        {OTHERS.map((q) => (
          <div key={q.name} className="rounded-br-[40px] bg-alt p-8 text-alt-fg lg:p-12">
            <Quote q={q} />
          </div>
        ))}
      </div>

      {/* chiusura: invito alla chiamata */}
      <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-36">
        <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.08] font-normal tracking-[-0.01em]">
          Ready for what comes next?
        </h2>
        <p className="mx-auto mt-6 max-w-[40ch] font-serif text-[clamp(1.3rem,2vw,1.6rem)] leading-[1.4] text-label italic">
          You don&rsquo;t need to have everything figured out. A conversation is a good place to start.
        </p>
        <Link href={CTA.href} className="cta mt-10">Book a complimentary call</Link>
      </div>
    </section>
  );
}