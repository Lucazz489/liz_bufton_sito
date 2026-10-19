import type { Metadata } from "next";
import Link from "next/link";
import JourneyArt from "@/components/home/JourneyArt";
import { Eyebrow, Heading, Prose, SplitPanel } from "@/components/ui";
import { CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Programme",
  description:
    "A six-week development programme for professional women: six private one-to-one coaching sessions, the Reflective Journal and the Momentum Toolkit.",
};

const THEMES = [
  { title: "Clarity", text: "Recognising her strengths, understanding her priorities and identifying what she wants to achieve." },
  { title: "Awareness", text: "Noticing the beliefs, habits and reactions that influence her choices and behaviour." },
  { title: "Change", text: "Questioning assumptions and exploring different ways of thinking and responding." },
  { title: "Action", text: "Taking practical steps towards her personal and professional goals." },
  { title: "Momentum", text: "Learning from experience, navigating setbacks and building habits that support progress." },
  { title: "Celebration", text: "Recognising progress, acknowledging what she’s learned and planning what comes next." },
];

const TAKEAWAYS = [
  { title: "Clarity and direction", text: "A better understanding of her strengths, priorities and what she wants to achieve." },
  { title: "Greater self-awareness", text: "Insight into the thoughts, habits and reactions that influence her choices." },
  { title: "Confidence to approach challenges differently", text: "New perspectives and practical approaches she can use at work." },
  { title: "A personal development plan", text: "Clear steps to continue moving forward." },
  { title: "Resources for continued development", text: "Her Reflective Journal and ongoing access to the Momentum Toolkit." },
];

const TOOLKIT = [
  ["Emotional intelligence", "Recognising emotions and understanding how they influence communication and decisions."],
  ["Physiology and stress", "Understanding how the body responds to pressure and exploring ways to manage those responses."],
  ["Neuroplasticity and habits", "Discovering how repeated behaviours become familiar and what helps us develop new ones."],
  ["Empathy and self-compassion", "Understanding other perspectives and learning to respond to mistakes without unnecessary self-criticism."],
  ["Goal-setting", "Turning intentions into practical steps and developing habits that support progress."],
];

const ELEMENTS: { name: string; sub: string; body: React.ReactNode }[] = [
  {
    name: "One-to-One Coaching",
    sub: "Development That Starts With Her",
    body: (
      <>
        <p>Six private conversations dedicated to her personal and professional growth.</p>
        <p>
          Each session gives her the opportunity to explore challenges, consider different perspectives and work
          towards goals that matter to her.
        </p>
        <p>
          Because the coaching is personal, it can address the situations she&rsquo;s dealing with right now, rather
          than following a standard set of leadership lessons.
        </p>
      </>
    ),
  },
  {
    name: "The Reflective Journal",
    sub: "Discovering What Experience Can Teach Us",
    body: (
      <>
        <p className="font-serif text-[1.25rem] leading-[1.45] text-page italic">
          Think about a meeting where you wished you&rsquo;d spoken up. A conversation you kept replaying afterwards.
          Or a decision that turned out better than you expected.
        </p>
        <p>These everyday moments can teach us a great deal, but we don&rsquo;t always stop to examine them.</p>
        <p>
          The Reflective Journal is a physical journal filled with guided questions and exercises that help women look
          more closely at their experiences.
        </p>
        <p>
          It encourages them to recognise patterns in their thinking, question assumptions, understand their reactions
          and notice changes they might otherwise overlook.
        </p>
        <p>
          Reflection makes coaching more valuable because the learning doesn&rsquo;t stay in the session. Women begin
          connecting what they discover about themselves with what happens in their working lives.
        </p>
        <p>
          And as they develop the habit of reflection, they become better equipped to learn from future experiences
          independently.
        </p>
      </>
    ),
  },
  {
    name: "The Momentum Toolkit",
    sub: "Understanding How Change Happens",
    body: (
      <>
        <p className="font-serif text-[1.25rem] leading-[1.45] text-page italic">
          Why does pressure sometimes make it difficult to think clearly? Why do we react in ways we later question?
          And why can changing a familiar habit be so difficult?
        </p>
        <p>The Momentum Toolkit introduces women to the science and psychology behind these everyday experiences.</p>
        <p>Through educational videos, practical exercises and resources, participants explore:</p>
        <ul className="space-y-3 border-l border-gold/50 pl-5">
          {TOOLKIT.map(([k, v]) => (
            <li key={k}>
              <span className="font-semibold text-page">{k}:</span> {v}
            </li>
          ))}
        </ul>
        <p>
          Participants choose the resources most relevant to their needs. They can explore them between coaching
          sessions and return to them whenever they need to.
        </p>
      </>
    ),
  },
];

/*
 * Pagina "The Programme", nell'ordine indicato da Liz (email del 18 ottobre):
 * 1. Explore the Programme + Every woman's journey is different · 2. Who Is the Programme For?
 * 3. What Women Take Away · 4. Three Elements (fondo nero) · 5. How It All Comes Together
 * 6. Your Six Weeks of One-to-One Coaching · 7. Beyond the Six Weeks · 8. invito finale
 */
export default function ProgrammePage() {
  return (
    <>
      {/* 1. Explore the Programme */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-10 text-center lg:pt-28">
        <Eyebrow tone="gold">Explore the Programme</Eyebrow>
        <h1 className="mt-6 font-serif text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1.1] font-normal tracking-[-0.01em] text-balance">
          Empowering women to recognise their strengths, overcome barriers and move forward with{" "}
          <em className="text-label">greater confidence and purpose.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-[46ch] font-serif text-[clamp(1.25rem,1.8vw,1.5rem)] leading-[1.4] text-muted italic">
          Six weeks of personal and professional development. More than coaching alone.
        </p>
      </section>
      <JourneyArt caption={null} />

      {/* 1b. Every woman’s journey is different (con il journal) */}
      <SplitPanel
        reverse
        media={
          <img
            src="/images/coaching-journal.png"
            alt="The Reflective Journal"
            width={720}
            height={1079}
            className="mx-auto w-full max-w-[300px] drop-shadow-[0_30px_40px_rgba(28,23,24,0.18)]"
          />
        }
      >
        <Heading>
          Every woman&rsquo;s journey is different. <em className="text-label">Her development should reflect that.</em>
        </Heading>
        <Prose className="mt-8">
          <p>
            Some women are ready for greater responsibility but hesitate to put themselves forward. Others want to speak
            up more confidently, handle difficult conversations or trust their judgement when making decisions.
          </p>
          <p>
            And sometimes, it&rsquo;s about taking the opportunity to consider where they are in their careers, what
            they want and what they&rsquo;d like to do differently.
          </p>
          <p className="text-fg">
            This six-week programme combines personal coaching, guided reflection and practical learning to help women
            build on their strengths, develop new skills and approach challenges with greater confidence.
          </p>
        </Prose>
      </SplitPanel>

      {/* 2. Who Is the Programme For? */}
      <section className="bg-alt text-alt-fg">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-28">
          <div className="lg:col-span-5">
            <Heading>Who Is the Programme For?</Heading>
            <p className="mt-8 font-serif text-[1.45rem] leading-[1.4]">
              The programme is designed for professional women who want to develop their confidence, self-awareness and
              leadership skills.
            </p>
          </div>
          <Prose className="max-w-[36rem] lg:col-span-6 lg:col-start-7 lg:pt-6">
            <p>
              It can support women preparing for greater responsibility, growing in their current roles, navigating
              change or considering the next stage of their careers.
            </p>
            <p>
              For organisations, it offers an opportunity to invest in women as individuals, while supporting the
              development of skills that matter across the workplace: communication, decision-making, professional
              relationships and taking initiative.
            </p>
            <p>
              The value lies in the personal approach. Rather than asking every participant to work through the same
              challenges, the programme allows each woman to focus on the skills, behaviours and goals most relevant to
              her role and ambitions.
            </p>
          </Prose>
        </div>
      </section>

      {/* 3. What Women Take Away */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Heading center>What Women Take Away</Heading>
        <p className="mx-auto mt-8 max-w-[52ch] text-center text-[1.1rem] leading-[1.75] text-muted">
          Every woman&rsquo;s experience is different, but the programme is designed to help her develop:
        </p>
        <ul className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {TAKEAWAYS.map((t) => (
            <li key={t.title} className="border-t border-gold pt-6">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-label" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M7.5 12.5l3 3 6-6.5" />
              </svg>
              <h3 className="mt-4 font-serif text-[1.45rem] leading-[1.2]">{t.title}</h3>
              <p className="mt-3 text-[1rem] leading-[1.65] text-muted">{t.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. Three Elements That Make the Experience */}
      <section className="bg-fg text-page">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="text-center">
            <h2 className="font-serif text-[clamp(2.1rem,3.6vw,3.2rem)] leading-[1.08] font-normal text-balance">
              Three Elements That Make the Experience
            </h2>
            <span aria-hidden="true" className="mx-auto mt-6 block h-px w-16 bg-gold" />
          </div>
          <div className="mt-16 grid gap-x-12 gap-y-16 lg:grid-cols-3">
            {ELEMENTS.map((e, i) => (
              <article key={e.name} className="border-t border-gold/50 pt-8">
                <span className="font-serif text-[2.8rem] leading-none text-gold lining-nums">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-[1.9rem] leading-tight">{e.name}</h3>
                <p className="mt-2 text-[0.78rem] font-semibold tracking-[0.18em] text-gold uppercase">{e.sub}</p>
                <div className="mt-6 space-y-4 text-[1rem] leading-[1.7] text-page/75">{e.body}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How It All Comes Together — TODO: nuova foto in arrivo da Liz */}
      <SplitPanel
        media={
          <img
            src="/images/women-together.jpg"
            alt="Women standing together with their hands joined"
            width={1920}
            height={1080}
            className="aspect-[4/5] w-full object-cover object-[60%_center]"
          />
        }
      >
        <Heading>How It All Comes Together</Heading>
        <p className="mt-8 font-serif text-[1.45rem] leading-[1.4]">
          Imagine a woman who wants to contribute more confidently in meetings.
        </p>
        <Prose className="mt-6">
          <p>During coaching, she explores what&rsquo;s holding her back.</p>
          <p>
            Through her journal, she begins to notice that she often assumes her ideas aren&rsquo;t valuable enough to
            share, even when she knows the subject well.
          </p>
          <p>
            The toolkit helps her understand how pressure affects her thoughts and physical responses. She explores
            techniques she can use before and during meetings.
          </p>
          <p className="text-fg">At her next meeting, she decides to contribute.</p>
          <p>
            Afterwards, she reflects on what happened and brings the experience back to coaching. Together, they
            explore what she learned and what she&rsquo;d like to try next.
          </p>
        </Prose>
      </SplitPanel>

      {/* 6. Your Six Weeks of One-to-One Coaching */}
      <section className="bg-alt text-alt-fg">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Heading center>Your Six Weeks of One-to-One Coaching</Heading>
          <p className="mx-auto mt-8 max-w-[56ch] text-center text-[1.1rem] leading-[1.75] text-alt-muted">
            Every woman follows the same six-week coaching method, with each week focused on a different theme. The
            structure is consistent, but the conversations are personal to her.
          </p>
          <ol className="mt-16 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {THEMES.map((t, i) => (
              <li
                key={t.title}
                className="border-t border-rule pt-6 sm:px-5 xl:border-t-0 xl:border-l xl:pt-0 xl:first:border-l-0 xl:first:pl-0"
              >
                <p className="text-[0.95rem] font-semibold tracking-[0.18em] text-label uppercase lining-nums">Week {i + 1}</p>
                <span className="mt-2 block font-serif text-[2.6rem] leading-none text-gold lining-nums">0{i + 1}</span>
                <h3 className="mt-3 font-serif text-[1.6rem] leading-tight">{t.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-[1.65] text-alt-muted">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Beyond the Six Weeks */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Heading center>Beyond the Six Weeks</Heading>
        <div className="mt-14 grid gap-10 text-center md:grid-cols-3">
          <div className="border-t border-gold pt-8">
            <p className="text-[1.05rem] leading-[1.7] text-muted">
              The final coaching session gives each woman an opportunity to recognise her progress and consider how she
              wants to continue developing.
            </p>
          </div>
          <div className="border-t border-gold pt-8">
            <p className="text-[1.05rem] leading-[1.7] text-muted">
              She finishes with a personal development plan, her Reflective Journal and continued access to the
              Momentum Toolkit.
            </p>
          </div>
          <div className="border-t border-gold pt-8">
            <p className="text-[1.05rem] leading-[1.7] text-muted">
              The coaching lasts six weeks, but the reflection, learning and practical resources remain available to
              support her beyond the programme.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Give Women the Opportunity to Grow */}
      <section className="bg-fg text-page">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
          <h2 className="font-serif text-[clamp(2.4rem,4.4vw,3.8rem)] leading-[1.05] font-normal tracking-[-0.01em]">
            Give Women the Opportunity to Grow
          </h2>
          <span aria-hidden="true" className="mx-auto mt-7 block h-px w-16 bg-gold" />
          <p className="mx-auto mt-7 max-w-[46ch] text-[1.15rem] leading-[1.7] text-page/75">
            If you&rsquo;re considering development opportunities for women within your organisation, I&rsquo;d be
            happy to hear what you&rsquo;re looking for and discuss whether the programme could be right for your
            people.
          </p>
          <Link href={CTA.href} className="cta mt-10">Book a Discovery Call</Link>
        </div>
      </section>
    </>
  );
}
