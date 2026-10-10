/**
 * Striscia di credibilita' subito sotto la prima schermata.
 * TODO: confermare con Liz che si possono citare le aziende dei clienti.
 */
const FACTS = [
  { big: "12+", small: "years developing professionals across Europe" },
  { big: "CEOs", small: "partners, senior leaders and managers coached" },
  { big: "ICF", small: "accredited training · Certified Neurolanguage Coach®" },
];
const CLIENTS = ["PwC", "DHL Express", "Accent Communication", "Ludwig"];

export default function Credentials() {
  return (
    <section className="border-y border-rule">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 lg:px-10 lg:py-14">
        {FACTS.map((f) => (
          <div key={f.big} className="flex items-baseline gap-4">
            <span className="font-serif text-[2.6rem] leading-none text-label lining-nums">{f.big}</span>
            <span className="max-w-[22ch] text-[0.95rem] leading-snug text-muted">{f.small}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-rule">
        <p className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-10 gap-y-3 px-6 py-6 text-[0.95rem] text-muted lg:px-10">
          <span className="text-[0.72rem] font-semibold tracking-[0.22em] uppercase">Clients have included professionals at</span>
          {CLIENTS.map((c) => (
            <span key={c} className="font-serif text-[1.25rem] text-fg">
              {c}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
