/**
 * I tre elementi del programma in tre colonne: Coaching, Journal, Momentum Toolkit.
 * Le colonne partono alla stessa altezza e la frase finale e' allineata in fondo:
 * lo spazio in piu' resta sopra di lei nelle colonne con meno testo.
 * Ogni colonna e' un riquadro rosa tenue, per staccarsi dallo sfondo.
 * Con `method` (pagina Programme) ogni colonna ha anche un'icona a linea.
 */
const ICONS = {
  coaching: "M8,11 H30 A4,4 0 0 1 34,15 V25 A4,4 0 0 1 30,29 H18 L11,35 V29 H8 A4,4 0 0 1 4,25 V15 A4,4 0 0 1 8,11 Z M38,19 H40 A4,4 0 0 1 44,23 V32 A4,4 0 0 1 40,36 H38 V41 L32,36 H24 A4,4 0 0 1 20,32 V31",
  journal: "M6,12 C14,10 20,11 24,14 C28,11 34,10 42,12 V37 C34,35 28,36 24,39 C20,36 14,35 6,37 Z M24,14 V39",
  toolkit: "M10,40 C15,27 25,16 40,9 C41,24 32,36 17,37 M10,40 L27,23 M21,29 L26,30 M25,25 L30,25",
} as const;

const ELEMENTS = [
  {
    icon: ICONS.coaching,
    verb: "Explore",
    title: "1:1 Coaching",
    lead: "Six private conversations centred on you and the change you\u2019re working towards.",
    body: "Explore different perspectives and possibilities.",
    close: "Think deeply. Be questioned. Challenge assumptions.",
  },
  {
    icon: ICONS.journal,
    verb: "Reflect",
    title: "Personal Journal",
    lead: "Guided reflection carries the work between sessions.",
    body: "Capture insights. Notice patterns in your thoughts and behaviours. Make connections. Track what is changing as the six weeks progress.",
    close: "Reflect. Notice. Understand.",
  },
  {
    icon: ICONS.toolkit,
    verb: "Support",
    title: "Momentum Toolkit",
    lead: "Practical tools, ideas and resources selected to support your development throughout the programme.",
    body: "Explore different approaches, try what feels useful and build a toolkit you can continue to draw on.",
    close: "Discover. Practise. Continue.",
  },
];

export default function ThreeElements({ method = false }: { method?: boolean }) {
  return (
    <section className="px-6 pt-16 pb-24 lg:px-10 lg:pt-20 lg:pb-36">
      <h2 className="sr-only">The three elements of the programme</h2>
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 lg:gap-8">
        {ELEMENTS.map((e) => (
          <article key={e.title} className="flex flex-col rounded-br-[40px] bg-alt px-7 py-12 text-center text-alt-fg lg:px-10 lg:py-14">
            {method && (
              <svg viewBox="0 0 48 48" className="mx-auto mb-6 h-12 w-12 text-alt-label" aria-hidden="true">
                <path d={e.icon} fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            <p className="eyebrow text-alt-label">{e.verb}</p>
            <h3 className="mt-4 font-serif text-[clamp(1.9rem,2.6vw,2.4rem)] leading-[1.1] font-normal lining-nums">
              {e.title}
            </h3>
            <p className="mx-auto mt-6 max-w-[28ch] font-serif text-[1.3rem] leading-[1.35] font-medium">{e.lead}</p>
            <p className="mx-auto mt-5 max-w-[32ch] text-[1rem] leading-[1.75] text-alt-muted">{e.body}</p>
            <p className="mt-8 font-serif text-[1.5rem] leading-[1.3] font-medium text-gold italic md:mt-auto md:box-content md:min-h-[2.6em] md:pt-8">
              {e.close}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}