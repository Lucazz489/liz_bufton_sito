/** Breve presentazione del programma, centrata. Le qualifiche di Liz sono nella striscia sotto la prima schermata. */
export const CREDENTIALS = ["Neurolanguage Coach ICF accredited", "Corporate communication coach"];

export function CredentialLine({ center = false }: { center?: boolean }) {
  return (
    <ul
      className={`flex gap-x-6 gap-y-2 text-[0.78rem] font-semibold tracking-[0.18em] text-label uppercase ${center ? "flex-wrap justify-center" : "flex-col"}`}
    >
      {CREDENTIALS.map((c, i) => (
        <li key={c} className="flex items-center gap-3">
          {(i > 0 || !center) && <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />}
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
      <span aria-hidden="true" className="mx-auto mt-10 block h-px w-16 bg-gold" />
    </section>
  );
}
