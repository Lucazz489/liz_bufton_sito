import { TESTIMONIALS, type Testimonial } from "@/lib/testimonials";

/**
 * Testimonianze, grandi e centrate.
 * - <Testimonials /> mostra la prima (in home, dopo la sezione Coaching)
 * - <Testimonials rest /> mostra tutte le altre (in fondo alla home); se non ce ne sono, non mostra nulla
 */
export default function Testimonials({ rest = false }: { rest?: boolean }) {
  const list: Testimonial[] = rest ? TESTIMONIALS.slice(1) : TESTIMONIALS.slice(0, 1);
  if (!list.length) return null;
  return (
    <section className="rounded-br-[56px] bg-alt px-6 py-24 text-alt-fg lg:px-10 lg:py-32">
      <p className="eyebrow text-center text-alt-label">Kind words</p>
      <h2 className="sr-only">What clients say</h2>
      <div className="mx-auto mt-10 max-w-3xl space-y-24">
        {list.map((q) => (
          <figure key={q.name} className="text-center">
            <span aria-hidden="true" className="block font-serif text-[5rem] leading-[0.6] text-gold">
              &ldquo;
            </span>
            <blockquote className="mt-6 space-y-5 font-serif text-[clamp(1.3rem,2vw,1.6rem)] leading-[1.45] italic">
              {q.text.map((t) => (
                <p key={t.slice(0, 24)}>{t}</p>
              ))}
            </blockquote>
            <figcaption className="mt-10">
              <span className="block font-serif text-[1.5rem] font-semibold">{q.name}</span>
              <span className="mt-1 block text-[0.95rem] text-alt-muted">{q.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
