/**
 * Piccoli mattoni comuni a tutte le pagine (stile "Tara Mohr" richiesto da Liz):
 * etichetta in maiuscolo, titolo serif con un filo oro sotto, paragrafi.
 */

/** Etichetta piccola in maiuscolo sopra i titoli. `tone="gold"` per le sezioni scure o i punti eleganti. */
export function Eyebrow({ children, tone = "rose" }: { children: React.ReactNode; tone?: "rose" | "gold" }) {
  return <p className={`eyebrow ${tone === "gold" ? "text-gold" : "text-label"}`}>{children}</p>;
}

/** Filo oro sottile sotto i titoli */
export function Rule({ center = false }: { center?: boolean }) {
  return <span aria-hidden="true" className={`mt-6 block h-px w-16 bg-gold ${center ? "mx-auto" : ""}`} />;
}

/** Titolo di sezione serif (h2 di default), seguito dal filo oro */
export function Heading({
  children,
  as: Tag = "h2",
  center = false,
  className = "",
}: {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  center?: boolean;
  className?: string;
}) {
  return (
    <>
      <Tag
        className={`mt-5 font-serif text-[clamp(2.1rem,3.6vw,3.2rem)] leading-[1.08] font-normal tracking-[-0.01em] text-balance ${center ? "text-center" : ""} ${className}`}
      >
        {children}
      </Tag>
      <Rule center={center} />
    </>
  );
}

/** Blocco di paragrafi con spaziatura e colore attenuato */
export function Prose({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`space-y-5 text-[1.1rem] leading-[1.75] text-muted ${className}`}>{children}</div>;
}

/** Frase finale in evidenza (serif, colore pieno) */
export function Emphasis({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`font-serif text-[1.45rem] leading-[1.35] text-fg ${className}`}>{children}</p>;
}

/**
 * Sezione 50/50: immagine da un lato, testo dall'altro.
 * `reverse` mette l'immagine a destra.
 */
export function SplitPanel({
  media,
  children,
  reverse = false,
  className = "",
}: {
  media: React.ReactNode;
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-32">
        <div className={reverse ? "lg:order-2" : ""}>{media}</div>
        <div className="max-w-[36rem]">{children}</div>
      </div>
    </section>
  );
}
