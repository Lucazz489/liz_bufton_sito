import { CREDENTIALS } from "./Intro";

/**
 * Striscia con le qualifiche di Liz, subito sotto la prima schermata.
 * Testo esatto indicato da Liz nelle note finali.
 */
export default function Credentials() {
  return (
    <section aria-label="Credentials" className="border-y border-rule">
      <ul className="mx-auto flex w-fit max-w-7xl flex-col items-start justify-center gap-5 sm:w-auto sm:items-center px-6 py-9 sm:flex-row sm:gap-0 lg:px-10 lg:py-11">
        {CREDENTIALS.map((c, i) => (
          <li
            key={c}
            className={`flex items-center gap-4 font-serif text-[clamp(1.3rem,2vw,1.7rem)] leading-tight sm:px-10 lg:px-16 ${
              i > 0 ? "sm:border-l sm:border-gold/60" : ""
            }`}
          >
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-gold" />
            {c}
          </li>
        ))}
      </ul>
    </section>
  );
}
