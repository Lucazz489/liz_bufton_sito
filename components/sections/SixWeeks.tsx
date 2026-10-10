/**
 * Il programma come calendario di sei settimane.
 * - In alto, i numeri del programma (6 settimane, 6 sessioni, journal, toolkit).
 * - Su schermi larghi: sei colonne, una per settimana, unite da una linea con un punto per ogni sessione;
 *   sotto, due barre che attraversano tutte le settimane per journal e toolkit (come in un planner).
 * - Su schermi stretti: le settimane una sotto l'altra lungo una linea verticale.
 * Testi delle tappe: provvisori (dal mock-up), da confermare con Liz.
 */
const WEEKS = [
  { title: "Clarity", text: "Get clear on where you are now, what you want to move towards and why it matters." },
  { title: "Awareness", text: "Explore the beliefs, behaviours and patterns influencing where you are now." },
  { title: "Change", text: "Identify what needs to shift and begin exploring different ways of thinking and responding." },
  { title: "Action", text: "Turn insight into action and decide how you’ll follow through." },
  { title: "Momentum", text: "Strengthen the habits, strategies and support you need to keep moving, even when old patterns resurface." },
  { title: "Celebration", text: "Recognise your progress, what you’ve learned and what you’re taking forward." },
];

const FACTS = [
  { big: "6", small: "weeks" },
  { big: "6", small: "private 1:1 coaching sessions" },
  { big: "1", small: "personal journal, used between sessions" },
  { big: "1", small: "momentum toolkit, yours to keep" },
];

export default function SixWeeks() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      {/* il programma in numeri */}
      <dl className="grid grid-cols-2 gap-y-8 border-y border-rule py-10 md:grid-cols-4">
        {FACTS.map((f) => (
          <div key={f.small} className="flex flex-col gap-2 pr-6">
            <dt className="order-2 text-[0.95rem] leading-snug text-muted">{f.small}</dt>
            <dd className="order-1 font-serif text-[3rem] leading-none text-label lining-nums">{f.big}</dd>
          </div>
        ))}
      </dl>

      {/* calendario */}
      <ol className="relative mt-16 grid gap-0 xl:mt-20 xl:grid-cols-6 xl:gap-6">
        {/* linea che collega le settimane: verticale su mobile, orizzontale su schermi larghi */}
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-label/40 xl:top-[7px] xl:right-[8%] xl:bottom-auto xl:left-[8%] xl:h-px xl:w-auto" />
        {WEEKS.map((w, i) => (
          <li key={w.title} className="relative pb-12 pl-10 xl:flex xl:flex-col xl:pb-0 xl:pl-0">
            <span
              aria-hidden="true"
              className={`absolute top-0 left-0 h-[15px] w-[15px] rounded-full border-2 border-label xl:static xl:mx-auto xl:block ${i === WEEKS.length - 1 ? "bg-label" : "bg-page"}`}
            />
            <div className="xl:mt-6 xl:flex xl:flex-1 xl:flex-col xl:text-center">
              <p className="text-[0.75rem] font-semibold tracking-[0.2em] text-label uppercase lining-nums">
                Week {i + 1}
              </p>
              <h3 className="mt-2 font-serif text-[1.8rem] leading-tight">{w.title}</h3>
              <p className="mt-3 max-w-[40ch] text-[1rem] leading-[1.65] text-muted xl:mx-auto">{w.text}</p>
              <p className="mt-4 text-[0.85rem] text-fg/70 xl:mt-auto xl:pt-4">1:1 session</p>
            </div>
          </li>
        ))}
      </ol>

      {/* journal e toolkit accompagnano tutte le sei settimane */}
      <div className="mt-6 grid gap-3 xl:mt-14">
        {[
          { name: "Personal Journal", note: "reflection between every session, from week 1 to week 6" },
          { name: "Momentum Toolkit", note: "tools and resources throughout, and yours to keep afterwards" },
        ].map((b) => (
          <div key={b.name} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 bg-alt px-5 py-4 text-alt-fg">
            <span className="font-serif text-[1.3rem]">{b.name}</span>
            <span className="text-[0.95rem] text-alt-muted">{b.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
