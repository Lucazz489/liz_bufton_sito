import { FEATURED, type Testimonial } from "@/lib/testimonials";

/** Una testimonianza grande su fondo scuro (di base quella di Mirella). */
export default function FeaturedQuote({ q = FEATURED }: { q?: Testimonial }) {
  return (
    <section className="bg-fg text-page">
      <figure className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
        <blockquote className="font-serif text-[clamp(1.6rem,2.8vw,2.3rem)] leading-[1.35] font-normal">
          &ldquo;{q.text[0]}&rdquo;
        </blockquote>
        <figcaption className="mt-10">
          <span className="block text-[0.8rem] font-semibold tracking-[0.22em] uppercase">{q.name}</span>
          <span className="mt-2 block text-[0.95rem] text-page/60">{q.role}</span>
        </figcaption>
      </figure>
    </section>
  );
}
