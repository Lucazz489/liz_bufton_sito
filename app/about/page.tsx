import type { Metadata } from "next";
import ImageSlot from "@/components/ImageSlot";
import JourneyArt from "@/components/home/JourneyArt";
import { Emphasis, Eyebrow, Heading, Prose, SplitPanel } from "@/components/ui";
import { ClosingCta } from "@/components/home/ClientWords";

export const metadata: Metadata = {
  title: "About",
  description:
    "Liz Bufton: Certified Neurolanguage Coach®, Corporate Communication Coach and over 12 years of teaching, training and coaching professionals across Europe.",
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
      "I believe that if we want something in our lives to change, we have to be willing to do something differently ourselves.",
      "Sometimes that means having a conversation we’ve been avoiding, making a decision we’ve put off or questioning an assumption we’ve held for a long time.",
      "We can’t control everything that happens around us. But we can look at how we’re responding and consider what is within our control.",
    ],
    close: "Awareness matters. But change requires action.",
  },
  {
    title: "Words Matter. Patterns Matter.",
    icon: "words",
    circle: "bg-sage text-fg",
    text: [
      "My background in communication has made me particularly attentive to the language people use, including the things they say to themselves.",
      "A thought such as “I’m not ready” or “I don’t want to get this wrong” might seem insignificant, but when it becomes familiar, it can affect how someone approaches a situation.",
      "I’m also interested in the connection between our emotions, physical responses and behaviour. Under pressure, we don’t always respond as we’d like to, even when we know what we want to say or do.",
      "I think there’s value in understanding these reactions, rather than simply expecting ourselves to behave differently next time.",
    ],
  },
  {
    title: "Space to Think. Someone to Listen.",
    icon: "listen",
    circle: "bg-gold text-fg",
    text: [
      "Most people spend a great deal of time dealing with what’s expected of them. There isn’t always much opportunity to stop and consider what they need, what they’re finding difficult or what they’d like to change.",
      "I believe having that time matters.",
      "In coaching, I want people to feel they can speak openly, without having to present a polished version of themselves. I listen carefully, but I’ll also ask questions that may be uncomfortable or challenge an assumption if I think it’s worth exploring.",
    ],
    close: "Because being supported doesn’t mean being agreed with.",
  },
  {
    title: "Always Learning. Always Evolving.",
    icon: "grow",
    circle: "bg-fg text-gold",
    text: [
      "I continue to invest in my own development through professional training, learning from experienced coaches and mentors, and exploring new ideas in communication and human behaviour.",
      "I also learn from the people I work with. Different experiences and perspectives regularly make me reconsider my own assumptions.",
      "I think that’s important. I wouldn’t want to encourage someone else to question their thinking if I weren’t prepared to question mine.",
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
        <Eyebrow>About Liz</Eyebrow>
        <p className="mt-3 text-[0.95rem] leading-[1.7] text-muted lining-nums">
          <span className="whitespace-nowrap">Certified Neurolanguage Coach&reg;</span>
          <span className="mx-2 text-gold">|</span>
          <span className="whitespace-nowrap">Corporate Communication Coach</span>
          <span className="mx-2 text-gold">|</span>
          <span className="whitespace-nowrap">Over 12 Years&rsquo; Experience</span>
        </p>
        <Heading as="h1" className="text-[clamp(2.6rem,4.6vw,4rem)]">
          The Person Behind the Work
        </Heading>
        <p className="mt-8 font-serif text-[1.45rem] leading-[1.4]">
          I&rsquo;ve become increasingly interested in how our experiences shape the way we see ourselves, the beliefs
          we develop and the choices we make, often without realising just how much they influence us.
        </p>
        <Prose className="mt-6">
          <p>
            Some of that understanding comes from my own life. I&rsquo;ve experienced change, disappointment and
            unexpected turns, as most of us have. They&rsquo;ve given me reasons to question my own thinking, reconsider
            what matters to me and become more aware of how I respond to things.
          </p>
          <p>
            But much of my perspective has also developed through my work. Over the years, I&rsquo;ve had conversations
            with professionals who are knowledgeable, capable and successful in their roles, yet still find certain
            situations difficult to navigate. I&rsquo;ve seen how much can sit behind a person&rsquo;s confidence,
            communication and behaviour, and how important it is not to make assumptions about someone simply because
            of their position or experience.
          </p>
          <p>
            That&rsquo;s something I carry into my coaching. I don&rsquo;t approach people with a ready-made idea of
            what they need to change. I want to understand how they see a situation, what may be influencing their
            response and what they would like to do differently.
          </p>
          <p>
            I value warmth and honesty in equal measure. I want people to feel comfortable speaking openly with me, but
            I also believe they deserve questions that make them think, perspectives they may not have considered and
            support in turning those conversations into something useful.
          </p>
        </Prose>
        <Emphasis className="mt-7 italic">
          It&rsquo;s an approach shaped by my own experiences, strengthened by my professional training and developed
          through years of working with people.
        </Emphasis>
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
            Europe, from emerging leaders and managers to senior executives, business partners and CEOs.
          </p>
          <p>
            Much of my work has centred on communication: helping people express themselves more clearly, handle
            difficult conversations, work with colleagues and navigate the expectations that come with their roles.
          </p>
          <p>
            Working with people at different levels has shown me that professional experience doesn&rsquo;t always
            translate into confidence in every situation. Someone can be very capable at their job and still hesitate to
            contribute in a meeting, struggle with a particular relationship or find it difficult to manage competing
            expectations.
          </p>
          <p>
            These are situations I&rsquo;ve come across throughout my career, and they&rsquo;ve influenced my interest
            in what affects the way people communicate and respond under pressure.
          </p>
        </Prose>
        <Emphasis className="mt-7 italic">
          What I enjoy most is seeing someone make a connection they hadn&rsquo;t made before, try a different approach
          and come back with their own observations about what happened.
        </Emphasis>
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
            Neurolanguage Coaching&reg; brought together several areas that interest me: communication, neuroscience,
            emotional intelligence and the way people learn.
          </p>
          <p>
            It has influenced how I approach coaching, particularly my attention to language, the way people interpret
            situations and the relationship between thinking, emotions and behaviour.
          </p>
          <p>
            Combined with my experience in corporate communication training, it helps me explore challenges with people
            in a way that is personal to them, while keeping sight of what they want to achieve.
          </p>
        </Prose>
        <p className="mt-7 font-semibold text-fg">
          I want the conversations we have to be useful beyond the coaching session, whether that means approaching a
          difficult conversation differently, making a decision or trying something they previously hesitated to do.
        </p>
      </SplitPanel>

      {/* 6 */}
      <ClosingCta
        title="Let’s Talk"
        text="If you’re considering development opportunities for women in your organisation, I’d be happy to hear what you’re looking for and discuss whether my six-week programme could be right for your people."
        button="Book a Discovery Call"
      />
    </>
  );
}
