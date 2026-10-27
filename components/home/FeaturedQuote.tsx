import { FEATURED, type Testimonial } from "@/lib/testimonials";

/** Una testimonianza grande su fondo nero (credibilita'), con dettagli oro. */
export default function FeaturedQuote({ q = FEATURED, intro }: { q?: Testimonial; intro?: string }) {
  return (
    <section className="bg-fg text-page">
      <figure className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-28">
        {intro && <p className="mb-10 text-[0.8rem] font-semibold tracking-[0.2em] text-gold uppercase">{intro}</p>}
        <span aria-hidden="true" className="block font-serif text-[4.5rem] leading-[0.6] text-gold">&ldquo;</span>
        <blockquote className="mt-6 font-serif text-[clamp(1.5rem,2.6vw,2.15rem)] leading-[1.38] font-normal">
          {q.text[0]}
        </blockquote>
        <span aria-hidden="true" className="mx-auto mt-10 block h-px w-12 bg-gold" />
        <figcaption className="mt-6">
          <span className="block text-[0.8rem] font-semibold tracking-[0.22em] text-gold uppercase">{q.name}</span>
          <span className="mt-2 block text-[0.95rem] text-page/65">{q.role}</span>
        </figcaption>
      </figure>
    </section>
  );
}
