import type { Metadata } from "next";
import ImageSlot from "@/components/ImageSlot";
import JourneyArt from "@/components/home/JourneyArt";
import { Emphasis, Eyebrow, Heading, Prose, SplitPanel } from "@/components/ui";
import { ClosingCta } from "@/components/home/ClientWords";

export const metadata: Metadata = {
  title: "About",
  description:
    "Liz Bufton: more than 12 years of teaching, training and coaching professionals across Europe, Certified Neurolanguage Coach® (ICF-accredited training) and the beliefs behind her work with women.",
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
  grow: <path d="M12 20v-8M12 12c0-4 3-6 7-6 0 4-3 6-7 6zM12 15c0-3-2.5-5-6-5 0 3 2.5 5 6 5z" />,
};

const BELIEFS: {
  title: string;
  icon: keyof typeof ICONS;
  circle: string;
  text: string[];
  close?: string;
}[] = [
  {
    title: "Change Begins With Us",
    icon: "step",
    circle: "bg-label text-page",
    text: [
      "I firmly believe that if we want something in our lives to change, we must be willing to change something ourselves.",
      "That may mean making a difficult decision, challenging a long-held belief, breaking a familiar pattern or taking a step we’ve been avoiding.",
      "We can’t always control what happens around us, but we can examine how we respond and recognise where we have the power to make a different choice.",
    ],
    close: "Awareness matters. But change requires action.",
  },
  {
    title: "Words Matter. Patterns Matter.",
    icon: "words",
    circle: "bg-sage text-fg",
    text: [
      "I’m fascinated by the power of words — particularly the language we use when we speak to ourselves.",
      "The stories we repeat can shape our confidence, influence our decisions and affect what we believe we’re capable of.",
      "I’m also interested in how our physiology, emotions and behaviour interact, and how greater awareness of these connections can help us respond differently.",
      "For me, recognising a pattern is often the beginning of being able to change it.",
    ],
  },
  {
    title: "Space to Think. Someone to Listen.",
    icon: "listen",
    circle: "bg-gold text-fg",
    text: [
      "I believe we all need space to step away from the demands of everyday life and reflect.",
      "And I believe there’s real value in having someone who listens carefully, with compassion and without judgement.",
      "Someone who notices what we might overlook, asks thoughtful questions and is willing to challenge us honestly.",
      "Because being supported doesn’t mean being agreed with.",
    ],
    close:
      "Sometimes the most valuable conversation is the one that helps us see something we haven’t been willing or able to see before.",
  },
  {
    title: "Always Learning. Always Evolving.",
    icon: "grow",
    circle: "bg-fg text-gold",
    text: [
      "My own development remains an important part of my life and work.",
      "I’ve had opportunities to learn from experienced coaches and mentors, and I continue to seek out professional development, events and new perspectives that challenge my thinking.",
      "I believe that if we want to encourage growth in others, we must remain open to growth ourselves.",
      "There is always more to learn, more to question and more to understand.",
    ],
  },
];

/*
 * Pagina "About" (testi e mock-up di Liz):
 * 1. "A Little About Me": testo a sinistra, foto a destra
 * 2. "My Professional Journey": foto a sinistra, testo a destra
 * 3. illustrazione ad acquerello
 * 4. "What I Believe": quattro colonne con icone
 * 5. "The Learning Behind My Approach": foto a sinistra, testo a destra
 * 6. invito finale
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
        <Eyebrow>A Little About Me</Eyebrow>
        <Heading as="h1" className="text-[clamp(2.6rem,4.6vw,4rem)]">
          The Person Behind the Work
        </Heading>
        <p className="mt-8 font-serif text-[1.45rem] leading-[1.4]">
          I&rsquo;ve long been fascinated by the stories we tell ourselves &mdash; the beliefs we develop about who we
          are, what we&rsquo;re capable of and what&rsquo;s possible for us.
        </p>
        <Prose className="mt-6">
          <p>
            My own experiences of change, uncertainty and personal development have made me increasingly aware of how
            powerful those stories can be.
          </p>
          <p>
            I&rsquo;ve learned the importance of questioning my own assumptions, recognising when familiar ways of
            thinking no longer serve me and being willing to approach things differently.
          </p>
          <p>
            I also know the value of having someone who listens with compassion, offers an honest perspective and
            challenges us to see beyond our usual thinking.
          </p>
          <p>
            These experiences have shaped both my commitment to my own development and the way I work with others.
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
        <Heading>My Professional Journey</Heading>
        <Prose className="mt-8 lining-nums">
          <p>
            For more than 12 years, I&rsquo;ve worked in teaching, training and coaching with professionals across
            Europe &mdash; from emerging leaders and managers to senior executives, business partners and CEOs.
          </p>
          <p>
            Working with people in different roles and organisational environments has given me insight into the
            demands of professional life, the importance of communication and the influence of confidence, expectations
            and established habits.
          </p>
          <p>
            Over the years, my interest has increasingly focused on what lies beneath the surface: the thinking behind
            our decisions, the language that shapes our interactions and the patterns that influence how we respond to
            challenges.
          </p>
          <p>
            What I value most is witnessing those moments when someone recognises something they hadn&rsquo;t seen
            before, questions an assumption or begins to approach a situation differently.
          </p>
        </Prose>
        <Emphasis className="mt-7 italic">Those moments continue to make my work meaningful.</Emphasis>
      </SplitPanel>

      {/* 3 */}
      <div className="pt-16 lg:pt-24">
        <JourneyArt />
      </div>

      {/* 4 */}
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-24 lg:px-10 lg:pb-32">
        <div className="text-center">
          <Heading center>What I Believe</Heading>
        </div>
        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 xl:grid-cols-4">
          {BELIEFS.map((b) => (
            <article key={b.title} className="border-t border-rule pt-10 xl:border-t-0 xl:pt-0">
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
              <div className="mt-5 space-y-4 text-[1rem] leading-[1.7] text-muted">
                {b.text.map((t) => (
                  <p key={t.slice(0, 24)}>{t}</p>
                ))}
                {b.close && <p className="font-semibold text-fg">{b.close}</p>}
              </div>
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
        <Heading>The Learning Behind My Approach</Heading>
        <Prose className="mt-8">
          <p>
            I&rsquo;m a Certified Neurolanguage Coach&reg;, having completed training accredited by the International
            Coaching Federation (ICF).
          </p>
          <p>
            My development in Neurolanguage Coaching&reg; brought together areas that continue to interest me: coaching,
            neuroscience, emotional intelligence and the ways people learn and change.
          </p>
          <p>
            It has deepened my appreciation of the relationship between language, thinking, emotions and behaviour.
          </p>
          <p>
            These interests inform how I work: listening carefully, recognising patterns, asking questions that
            encourage reflection and helping people connect new understanding with practical action.
          </p>
        </Prose>
        <p className="mt-7 font-semibold text-fg">
          Because insight matters. But what we do with that insight matters too.
        </p>
      </SplitPanel>

      {/* 6 */}
      <ClosingCta />
    </>
  );
}
