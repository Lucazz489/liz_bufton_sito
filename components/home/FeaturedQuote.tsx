import { FEATURED } from "@/lib/testimonials";

/** Una testimonianza in evidenza, grande, su fondo scuro. */
export default function FeaturedQuote() {
  return (
    <section className="bg-fg text-page">
      <figure className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
        <blockquote className="font-serif text-[clamp(1.6rem,2.8vw,2.3rem)] leading-[1.35] font-normal">
          &ldquo;{FEATURED.text[0]}&rdquo;
        </blockquote>
        <figcaption className="mt-10">
          <span className="block text-[0.8rem] font-semibold tracking-[0.22em] uppercase">{FEATURED.name}</span>
          <span className="mt-2 block text-[0.95rem] text-page/60">{FEATURED.role}</span>
        </figcaption>
      </figure>
    </section>
  );
}
