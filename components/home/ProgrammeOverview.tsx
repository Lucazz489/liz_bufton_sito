import Link from "next/link";

/**
 * Il programma in sintesi: titolo e introduzione a sinistra,
 * i tre elementi come elenco editoriale a destra, separati da linee sottili.
 */
const ELEMENTS = [
  {
    name: "1:1 Coaching",
    verb: "Explore",
    text: "Six private conversations centred on you and the change you’re working towards.",
  },
  {
    name: "Personal Journal",
    verb: "Reflect",
    text: "Guided reflection carries the work between sessions, so insight turns into change.",
  },
  {
    name: "Momentum Toolkit",
    verb: "Support",
    text: "Practical tools, ideas and resources selected for your development, to keep drawing on after the six weeks.",
  },
];

export default function ProgrammeOverview() {
  return (
    <section className="bg-alt text-alt-fg">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-36">
        <div className="lg:col-span-5">
          <p className="text-[0.78rem] font-semibold tracking-[0.22em] text-alt-label uppercase">The programme</p>
          <h2 className="mt-6 font-serif text-[clamp(2.2rem,3.8vw,3.4rem)] leading-[1.08] font-normal tracking-[-0.01em]">
            Six weeks. <em className="text-alt-label">Three elements.</em> One clear direction.
          </h2>
          <p className="mt-8 max-w-[38ch] text-[1.1rem] leading-[1.75] text-alt-muted">
            Designed from more than a decade of developing people, the programme combines coaching, reflection and
            learning: a clear structure that stays completely personal.
          </p>
          <Link href="/programme/" className="cta mt-10">Explore the programme</Link>
        </div>

        <ul className="border-t border-rule lg:col-span-6 lg:col-start-7">
          {ELEMENTS.map((e) => (
            <li key={e.name} className="grid gap-2 border-b border-rule py-9 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <p className="pt-2 text-[0.75rem] font-semibold tracking-[0.2em] text-alt-label uppercase">{e.verb}</p>
              <div>
                <h3 className="font-serif text-[1.9rem] leading-tight">{e.name}</h3>
                <p className="mt-2 text-[1.05rem] leading-[1.7] text-alt-muted">{e.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
