/**
 * Il programma come calendario di sei settimane.
 * - Su schermi larghi: sei colonne, una per settimana, unite da una linea con un punto per ogni settimana.
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

export default function SixWeeks() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      {/* calendario */}
      <ol className="relative grid gap-0 xl:grid-cols-6 xl:gap-6">
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
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
