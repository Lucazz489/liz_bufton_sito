import Link from "next/link";
import { CTA } from "@/lib/site";

/**
 * Invito finale in due blocchi (persone e aziende) con un solo pulsante.
 * Testi di Liz (27 ottobre). `dark` = fondo nero (pagina Programme), altrimenti fondo rosato (About).
 */
export default function TalkBlocks({ title, dark = false }: { title?: string; dark?: boolean }) {
  const muted = dark ? "text-page/75" : "text-alt-muted";
  const blocks = [
    {
      label: "For individuals",
      lead: "Ready to invest in yourself?",
      text: "Book a free call and we’ll talk through where you are and whether this programme is the right fit.",
    },
    {
      label: "For organisations",
      lead: "Supporting women leaders in your organisation?",
      text: "Let’s talk about a tailored programme for your people.",
    },
  ];
  return (
    <section className={dark ? "bg-fg text-page" : "bg-alt text-alt-fg"}>
      <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:py-32">
        {title && (
          <>
            <h2 className="font-serif text-[clamp(2.4rem,4.4vw,3.8rem)] leading-[1.05] font-normal tracking-[-0.01em]">
              {title}
            </h2>
            <span aria-hidden="true" className="mx-auto mt-7 block h-px w-16 bg-gold" />
          </>
        )}
        <div className={`grid gap-12 md:grid-cols-2 md:gap-16 ${title ? "mt-14" : ""}`}>
          {blocks.map((b) => (
            <div key={b.label} className="border-t border-gold/60 pt-8">
              <p className={`text-[0.8rem] font-semibold tracking-[0.2em] uppercase ${dark ? "text-gold" : "text-alt-label"}`}>
                {b.label}
              </p>
              <p className="mt-4 font-serif text-[clamp(1.6rem,2.4vw,2rem)] leading-[1.2]">{b.lead}</p>
              <p className={`mx-auto mt-4 max-w-[38ch] text-[1.1rem] leading-[1.7] ${muted}`}>{b.text}</p>
            </div>
          ))}
        </div>
        <Link href={CTA.href} className="cta mt-14">Book a Discovery Call</Link>
      </div>
    </section>
  );
}
