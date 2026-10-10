/**
 * Layout a due colonne: titolo a sinistra, testo a destra.
 * I colori si ereditano dalla sezione (sfondo principale o alternato).
 */
export default function Split({
  title,
  children,
  as: Tag = "h2",
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-36">
      <Tag className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.05] font-normal tracking-[-0.01em] text-balance lg:col-span-5">
        {title}
      </Tag>
      <div className="max-w-[34rem] lg:col-span-6 lg:col-start-7 lg:pt-3">{children}</div>
    </div>
  );
}

/** Primo paragrafo, piu' grande e in serif */
export function Lead({ children }: { children: React.ReactNode }) {
  return <p className="mb-8 font-serif text-[1.6rem] leading-[1.3] font-medium">{children}</p>;
}

/** Paragrafo normale: colore attenuato, adatto allo sfondo in cui si trova */
export function Body({ children, alt = false }: { children: React.ReactNode; alt?: boolean }) {
  return (
    <p className={`mb-5 text-[1.0625rem] leading-[1.75] ${alt ? "text-alt-muted" : "text-muted"}`}>{children}</p>
  );
}
