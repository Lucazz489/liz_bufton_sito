import Link from "next/link";

/** Presentazione del programma con le qualifiche di Liz, poi "Does This Sound Familiar?". */
export const CREDENTIALS = ["Neurolanguage Coach – ICF Accredited", "Corporate Communication Coach"];

/** Le qualifiche di Liz, in serif ben leggibile, ognuna con un pallino oro. */
export function CredentialLine({ center = false }: { center?: boolean }) {
  return (
    <ul
      className={`flex gap-x-10 gap-y-3 font-serif text-[clamp(1.2rem,1.7vw,1.45rem)] leading-tight text-fg ${center ? "mx-auto w-fit flex-col items-start sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center" : "flex-col"}`}
    >
      {CREDENTIALS.map((c) => (
        <li key={c} className="flex items-center gap-3">
          <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-gold" />
          {c}
        </li>
      ))}
    </ul>
  );
}

const FAMILIAR = [
  "I’ve just stepped into a bigger role, and I’m not sure I have it all figured out.",
  "I’m at a crossroads in my career and I don’t know what’s next.",
  "I look confident, but I doubt myself more than anyone knows.",
  "I’m juggling too much, and the pressure is wearing me down.",
  "I want to speak up, be heard, and have real influence.",
  "I want to lead, mentor and support others without losing myself.",
  "I need clarity on where I’m heading and why.",
  "I’m ready to invest in myself.",
];

export default function Intro() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-serif text-[clamp(1.55rem,2.5vw,2.1rem)] leading-[1.4] text-balance">
          For directors, senior managers and emerging leaders who are good at their job and want to lead with more
          clarity and confidence.
        </p>
        <span aria-hidden="true" className="mx-auto mt-10 mb-8 block h-px w-16 bg-gold" />
        <CredentialLine center />
      </div>

      {/* "Does This Sound Familiar?": i temi in cui le donne si riconoscono (testo di Liz) */}
      <div className="mt-20 border-t border-rule pt-16 lg:mt-24 lg:pt-20">
        <h2 className="text-center font-serif text-[clamp(2.1rem,3.6vw,3.2rem)] leading-[1.08] font-normal">
          Does This Sound Familiar?
        </h2>
        <span aria-hidden="true" className="mx-auto mt-6 block h-px w-16 bg-gold" />
        <ul className="mx-auto mt-12 grid max-w-4xl gap-x-12 gap-y-5 text-[1.1rem] leading-[1.5] md:grid-cols-2">
          {FAMILIAR.map((f) => (
            <li key={f} className="flex gap-4 border-b border-rule pb-5">
              <svg
                viewBox="0 0 24 24"
                className="mt-0.5 h-5 w-5 shrink-0 text-label"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M7.5 12.5l3 3 6-6.5" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-14 max-w-[52ch] text-center font-serif text-[clamp(1.3rem,1.9vw,1.6rem)] leading-[1.45] text-balance">
          Whether you&rsquo;re an organisation looking to invest in female talent or an individual ready to take the next
          step, our programme provides the structure, support and practical tools to turn insight into meaningful action.
        </p>
        <div className="mt-10 text-center">
          <Link href="/programme/" className="cta">Explore the Programme</Link>
        </div>
      </div>
    </section>
  );
}
