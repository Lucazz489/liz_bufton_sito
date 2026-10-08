import Link from "next/link";

/**
 * Fascia con la frase in evidenza: una riga centrata (su desktop), serif leggero,
 * eventuale parte finale in corsivo con <em>. Con `href` la frase diventa un link.
 * Taglio arrotondato sempre in basso a destra.
 */
export default function Band({
  children,
  as: Tag = "h2",
  href,
}: {
  children: React.ReactNode;
  as?: "h1" | "h2" | "p";
  href?: string;
}) {
  return (
    <div className="rounded-br-[56px] bg-band px-6 py-14 text-band-fg lg:px-10 lg:py-16">
      <Tag className="mx-auto max-w-7xl text-center font-serif text-[clamp(1.6rem,2.4vw,2.15rem)] leading-[1.25] font-normal tracking-[0.005em] text-balance lg:whitespace-nowrap [&_em]:italic">
        {href ? (
          <Link href={href} className="decoration-1 underline-offset-[10px] hover:underline">
            {children}
          </Link>
        ) : (
          children
        )}
      </Tag>
    </div>
  );
}
