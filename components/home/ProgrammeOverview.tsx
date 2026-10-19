import Link from "next/link";
import { CredentialLine } from "./Intro";

/**
 * Il programma in sintesi: titolo e introduzione a sinistra,
 * i tre elementi a destra, separati da linee sottili. Testi definitivi di Liz.
 */
export const ELEMENTS = [
  {
    name: "One-to-One Coaching",
    verb: "Explore",
    text: "Six personalised coaching sessions to explore challenges, gain clarity, challenge limiting beliefs and identify practical steps towards professional and personal goals.",
  },
  {
    name: "The Reflective Journal",
    verb: "Reflect",
    text: "A structured learning companion with guided exercises and reflection prompts to deepen self-awareness, capture insights and connect learning to everyday situations.",
  },
  {
    name: "The Momentum Toolkit",
    verb: "Apply",
    text: "A curated collection of practical exercises, learning resources and development tools to reinforce each week’s theme and support continued growth beyond the programme.",
  },
];

export default function ProgrammeOverview() {
  return (
    <section className="bg-alt text-alt-fg">
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-10 lg:pt-32">
        <h2 className="text-center font-serif text-[clamp(2.6rem,4.6vw,4rem)] leading-[1.05] font-medium tracking-[-0.01em]">
          The Programme
        </h2>
        <span aria-hidden="true" className="mx-auto mt-6 block h-px w-20 bg-gold" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pt-16 pb-24 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pt-20 lg:pb-32">
        <div className="lg:col-span-5">
          <h3 className="font-serif text-[clamp(2rem,3.2vw,2.8rem)] leading-[1.08] font-normal tracking-[-0.01em] text-balance">
            More Than Coaching. <em className="text-alt-label">A Complete Development Experience.</em>
          </h3>
          <span aria-hidden="true" className="mt-6 block h-px w-16 bg-gold" />
          <p className="mt-7 font-serif text-[1.35rem] leading-[1.35]">
            Six weeks. Three interconnected elements. One purposeful journey.
          </p>
          <div className="mt-5 max-w-[40ch] space-y-4 text-[1.05rem] leading-[1.75] text-alt-muted">
            <p>
              Designed to support women&rsquo;s leadership and personal growth, this immersive programme combines
              personalised coaching, structured reflection and practical learning resources.
            </p>
            <p>
              Each element works together to help women build self-awareness, strengthen confidence and turn insights
              into meaningful action &mdash; in the workplace and beyond.
            </p>
          </div>
          <Link href="/programme/" className="cta mt-9">Explore the Programme</Link>
          <div className="mt-10">
            <CredentialLine />
          </div>
        </div>

        <ul className="border-t border-gold/60 lg:col-span-6 lg:col-start-7">
          {ELEMENTS.map((e, i) => (
            <li key={e.name} className="grid gap-3 border-b border-gold/60 py-9 sm:grid-cols-[8.5rem_1fr] sm:gap-8">
              <div className="flex items-baseline gap-3 sm:flex-col sm:gap-1 sm:pt-1">
                <span className="font-serif text-[2rem] leading-none text-gold lining-nums">0{i + 1}</span>
                <span className="text-[0.78rem] font-semibold tracking-[0.2em] text-alt-label uppercase">{e.verb}</span>
              </div>
              <div>
                <h3 className="font-serif text-[clamp(1.9rem,2.6vw,2.3rem)] leading-tight font-medium">{e.name}</h3>
                <p className="mt-3 text-[1.05rem] leading-[1.7] text-alt-muted">{e.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
