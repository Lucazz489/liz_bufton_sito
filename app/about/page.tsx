import type { Metadata } from "next";
import ImageSlot from "@/components/ImageSlot";
import JourneyArt from "@/components/home/JourneyArt";
import TalkBlocks from "@/components/TalkBlocks";
import { Eyebrow, Heading, Prose, SplitPanel } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Liz Bufton: Leadership & Development Coach, ICF-accredited, with more than 12 years of teaching, training and coaching professionals across Europe.",
};

/* Icone semplici a linea per "What I Believe" (dentro cerchi colorati) */
const ICONS = {
  step: <path d="M5 12h12M13 7l5 5-5 5" />,
  words: <path d="M5 6h14v9H10l-4 3v-3H5z" />,
  listen: (
    <>
      <circle cx="9.5" cy="12" r="4.5" />
      <circle cx="14.5" cy="12" r="4.5" />
    </>
  ),
};

const BELIEFS: { title: string; text: string; icon: keyof typeof ICONS; circle: string }[] = [
  {
    title: "Change begins with us.",
    text: "Awareness matters, but change needs action.",
    icon: "step",
    circle: "bg-label text-page",
  },
  {
    title: "Words matter.",
    text: "The things we say to ourselves, like “I’m not ready”, shape how we approach a situation.",
    icon: "words",
    circle: "bg-sage text-fg",
  },
  {
    title: "Everyone needs space to think.",
    text: "Time to stop, be honest and not present a polished version of yourself.",
    icon: "listen",
    circle: "bg-gold text-fg",
  },
];

/*
 * Pagina "About" (testi di Liz del 27 ottobre, layout invariato):
 * 1. The Person Behind the Work: testo a sinistra, foto a destra
 * 2. How I Work: foto a sinistra, testo a destra
 * 3. illustrazione ad acquerello
 * 4. What I Believe: tre colonne con icone
 * 5. My Training: foto a sinistra, testo a destra
 * 6. Let's Talk: persone e aziende, un pulsante
 * Le foto: salvarle in public/images/ e passare src="/images/…" ai componenti ImageSlot.
 */
export default function AboutPage() {
  return (
    <>
      {/* 1 */}
      <SplitPanel
        reverse
        media={
          // TODO: sostituire con la nuova foto di Liz in alta risoluzione
          <ImageSlot
            src="/images/liz-hero.jpg"
            alt="Liz Bufton"
            hint="Foto di Liz (verticale, almeno 1200px)"
            className="aspect-[4/5] w-full max-w-md object-[45%_center] lg:ml-auto"
          />
        }
      >
        <Eyebrow>About Liz</Eyebrow>
        <p className="mt-3 text-[0.95rem] leading-[1.7] text-muted lining-nums">
          <span className="whitespace-nowrap">Leadership &amp; Development Coach</span>{" "}
          <span className="mx-0.5 text-gold">|</span>{" "}
          <span className="whitespace-nowrap">ICF-Accredited</span>{" "}
          <span className="mx-0.5 text-gold">|</span>{" "}
          <span className="whitespace-nowrap">12+ years&rsquo; experience</span>
        </p>
        <Heading as="h1" className="!text-[clamp(2.6rem,4.6vw,4rem)]">
          The Person Behind the Work
        </Heading>
        <Prose className="mt-8 lining-nums">
          <p>
            For more than 12 years I&rsquo;ve worked as a teacher, trainer and coach with professionals across Europe,
            from emerging managers to senior executives and CEOs. My clients have included people at PwC and DHL
            Express. Much of that work has been about communication: saying what you mean, handling difficult
            conversations and managing the expectations that come with a role.
          </p>
          <p>
            What I&rsquo;ve learned is that being very good at your job doesn&rsquo;t always mean feeling confident in
            every situation. Someone can be highly capable and still hold back in a meeting or struggle with one
            particular relationship. I&rsquo;ve also had my own share of change and unexpected turns, and they taught me
            to question my own thinking.
          </p>
        </Prose>
      </SplitPanel>

      {/* 2 */}
      <SplitPanel
        className="bg-alt text-alt-fg"
        media={
          <ImageSlot
            alt="Liz Bufton at work"
            hint="Foto di Liz al lavoro (formazione, coaching, un incontro) o immagine di un ambiente professionale"
            className="aspect-[4/5] w-full max-w-md lg:max-w-none"
          />
        }
      >
        <Heading>How I Work</Heading>
        <Prose className="mt-8">
          <p>
            I don&rsquo;t start with an idea of what you need to change. I want to understand how you see the
            situation, what&rsquo;s influencing your response and what you&rsquo;d like to do differently.
          </p>
          <p>
            I value warmth and honesty equally. You can speak openly with me, and I&rsquo;ll also ask the questions that
            make you think.
          </p>
        </Prose>
        <p className="mt-7 font-serif text-[1.45rem] leading-[1.35] text-fg italic">
          Being supported doesn&rsquo;t mean being agreed with.
        </p>
      </SplitPanel>

      {/* 3 */}
      <div className="pt-16 lg:pt-24">
        <JourneyArt />
      </div>

      {/* 4 */}
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-24 lg:px-10 lg:pb-32">
        <div className="text-center">
          <Heading center>What I Believe</Heading>
        </div>
        <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-3">
          {BELIEFS.map((b) => (
            <article key={b.title} className="border-t border-rule pt-10 md:border-t-0 md:pt-0">
              <span className={`grid h-16 w-16 place-items-center rounded-full ${b.circle}`}>
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONS[b.icon]}
                </svg>
              </span>
              <h3 className="mt-7 font-serif text-[1.75rem] leading-[1.15]">{b.title}</h3>
              <span aria-hidden="true" className="mt-5 block h-px w-10 bg-gold" />
              <p className="mt-5 text-[1.05rem] leading-[1.7] text-muted">{b.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 5 */}
      <SplitPanel
        className="border-t border-rule"
        media={
          <ImageSlot
            alt="A notebook and coffee on a desk"
            hint="Immagine di studio/apprendimento (scrivania, libri, quaderno) o foto di Liz"
            className="aspect-[4/5] w-full max-w-md lg:max-w-none"
          />
        }
      >
        <Eyebrow>Certified Neurolanguage Coach&reg;</Eyebrow>
        <Heading>My Training</Heading>
        <Prose className="mt-8">
          <p>
            I&rsquo;m a Certified Neurolanguage Coach&reg;, trained through a programme accredited by the International
            Coaching Federation. It brings together communication, neuroscience and emotional intelligence, and it
            shapes how I listen to the language people use and how they interpret what happens to them.
          </p>
          <p>
            I want our conversations to be useful beyond the session, whether that&rsquo;s handling a difficult
            conversation differently, making a decision or trying something you&rsquo;ve been putting off.
          </p>
        </Prose>
      </SplitPanel>

      {/* 6 */}
      <TalkBlocks title="Let’s Talk" />
    </>
  );
}
