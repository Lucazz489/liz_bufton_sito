import Link from "next/link";
import { OTHERS, type Testimonial } from "@/lib/testimonials";
import { CTA } from "@/lib/site";

/** Testimonianze su fondo nero (credibilita'), in colonne con filo oro. */
export function Testimonials({ items = OTHERS }: { items?: Testimonial[] }) {
  return (
    <section className="bg-fg text-page">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-center">
          <p className="eyebrow text-gold">What clients say</p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.1] font-normal text-balance">
            Words from people I&rsquo;ve worked with
          </h2>
          <span aria-hidden="true" className="mx-auto mt-6 block h-px w-16 bg-gold" />
        </div>
        <div className="mt-16 grid gap-x-12 gap-y-4 lg:grid-cols-3">
          {items.map((q) => (
            <figure key={q.name} className="flex flex-col border-t border-gold/50 py-10">
              <span aria-hidden="true" className="font-serif text-[3rem] leading-[0.6] text-gold">&ldquo;</span>
              <blockquote className="mt-4 space-y-4 font-serif text-[1.25rem] leading-[1.5]">
                {q.text.map((t) => (
                  <p key={t.slice(0, 24)}>{t}</p>
                ))}
              </blockquote>
              <figcaption className="mt-auto pt-8">
                <span className="block text-[0.78rem] font-semibold tracking-[0.2em] text-gold uppercase">{q.name}</span>
                <span className="mt-1 block text-[0.92rem] text-page/65">{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Invito finale (testi di default: quelli della home) */
export function ClosingCta({
  title = "You don’t need to have it all figured out.",
  text = "A conversation is a good place to start. Book a free, no-obligation call to talk about where you are now and where you want to go next.",
  button = CTA.label,
}: {
  title?: string;
  text?: string;
  button?: string;
}) {
  return (
    <section className="bg-alt text-alt-fg">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
        <h2 className="font-serif text-[clamp(2.4rem,4.4vw,3.8rem)] leading-[1.05] font-normal tracking-[-0.01em]">
          {title}
        </h2>
        <span aria-hidden="true" className="mx-auto mt-7 block h-px w-16 bg-gold" />
        <p className="mx-auto mt-7 max-w-[48ch] text-[1.15rem] leading-[1.7] text-alt-muted">{text}</p>
        <Link href={CTA.href} className="cta mt-10">{button}</Link>
      </div>
    </section>
  );
}
