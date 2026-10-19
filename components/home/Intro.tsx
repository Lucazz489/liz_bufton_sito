/** Breve presentazione del programma, centrata, con le due qualifiche di Liz. */
export const CREDENTIALS = ["Neurolanguage Coach – ICF Accredited", "Corporate Communication Coach"];

/** Le qualifiche di Liz, in serif ben leggibile, ognuna con un pallino oro. */
export function CredentialLine({ center = false }: { center?: boolean }) {
  return (
    <ul
      className={`flex gap-x-10 gap-y-3 font-serif text-[clamp(1.2rem,1.7vw,1.45rem)] leading-tight text-fg ${center ? "flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center" : "flex-col"}`}
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

export default function Intro() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
      <p className="font-serif text-[clamp(1.55rem,2.5vw,2.1rem)] leading-[1.4] text-balance">
        Designed for women at different stages of their personal and professional development, the programme offers a
        combination of individual support, reflection and practical learning to help build on strengths and develop
        their capabilities.
      </p>
      <span aria-hidden="true" className="mx-auto mt-10 mb-8 block h-px w-16 bg-gold" />
      <CredentialLine center />
    </section>
  );
}
