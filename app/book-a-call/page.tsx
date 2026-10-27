import type { Metadata } from "next";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Discovery Call",
  description: "Book a free discovery call with Liz Bufton, Leadership & Development Coach.",
};

/* Prenotazione con Calendly: si sceglie giorno e ora, Calendly manda la conferma e il link della videochiamata. */
export default function BookPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-28">
      <div className="lg:col-span-4">
        <h1 className="font-serif text-[clamp(2.4rem,4.4vw,3.6rem)] leading-[1.05] font-normal tracking-[-0.01em] text-balance">
          Book a Discovery Call
        </h1>
        <span aria-hidden="true" className="mt-6 block h-px w-16 bg-gold" />
        <p className="mt-8 max-w-[30ch] font-serif text-[1.45rem] leading-[1.35] text-muted">
          A free call to talk through where you are and whether this programme is the right fit.
        </p>
        <p className="mt-8 text-[1rem] leading-[1.7] text-muted">
          Prefer to write? Email me at{" "}
          <a href={`mailto:${SITE.email}`} className="text-link">{SITE.email}</a>
        </p>
      </div>
      <div className="lg:col-span-8">
        <CalendlyEmbed />
      </div>
    </section>
  );
}
