import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import { Eyebrow, Heading, Prose, SplitPanel } from "@/components/ui";

/** "A Little About Me": foto di Liz a sinistra, testo a destra. */
export function AboutTeaser() {
  return (
    <SplitPanel
      media={
        // TODO: foto di Liz in arrivo (verticale, almeno 1200px): salvarla in public/images/ e passare src
        <ImageSlot
          alt="Liz Bufton"
          hint="Foto di Liz (verticale, almeno 1200px)"
          className="aspect-[4/5] w-full max-w-md lg:max-w-none"
        />
      }
    >
      <Heading>A Little About Me</Heading>
      <Prose className="mt-8 lining-nums">
        <p>
          For more than 12 years, I&rsquo;ve worked in teaching, training and coaching with professionals across Europe,
          from people finding their feet in their careers to experienced managers and senior executives.
        </p>
        <p>
          I&rsquo;ve spent a great deal of that time listening to people talk about their work, the challenges they face
          and the things they find difficult to navigate. It&rsquo;s given me a real understanding of the demands of
          professional life, but also of how differently people experience the same situations.
        </p>
        <p>
          My own life hasn&rsquo;t been without its challenges and changes, either. I know what it&rsquo;s like to have
          to rethink things, question yourself and find your way through uncertainty. That experience has influenced how
          I work with others, alongside everything I&rsquo;ve learned professionally.
        </p>
        <p>
          I bring both to my coaching: an understanding of the workplace and an appreciation of the person trying to find
          their way through it. I believe that combination matters, particularly when someone is being given the
          opportunity to spend time on their own development.
        </p>
      </Prose>
      <Link href="/about/" className="text-link mt-8 inline-block">More about me</Link>
    </SplitPanel>
  );
}

/** "Why women?": foto delle donne insieme, testo accanto. */
export function WhyWomen() {
  return (
    <SplitPanel
      reverse
      className="bg-alt text-alt-fg"
      media={
        <img
          src="/images/women-together.jpg"
          alt="Women standing together with their hands joined"
          width={1920}
          height={1080}
          className="aspect-[4/5] w-full object-cover object-[62%_center]"
        />
      }
    >
      <Heading className="!text-[clamp(2.6rem,4.6vw,4rem)] !font-medium">Why Women</Heading>
      <p className="mt-8 font-serif text-[1.55rem] leading-[1.35] text-alt-label">
        I wanted to create something more personal for women.
      </p>
      <Prose className="mt-6">
        <p>
          Over the years, working in training and coaching, I&rsquo;ve had many conversations with women at different
          stages of their careers. I&rsquo;ve listened to their experiences, the challenges they&rsquo;ve faced and the
          pressures they&rsquo;ve sometimes felt they had to manage on their own.
        </p>
        <p>
          What has stayed with me is how often capable, experienced women question themselves, hold back from
          opportunities or struggle with situations that others know very little about. From the outside, they may
          appear to be doing well, but there&rsquo;s often much more going on beneath the surface.
        </p>
        <p>
          I&rsquo;ve also seen how much difference it can make when a woman has the time and space to talk openly, feel
          heard and look at things from a different perspective. Yet that kind of individual support isn&rsquo;t always
          easy to find in a busy working environment.
        </p>
        <p className="font-serif text-[1.35rem] leading-[1.4] text-fg">I wanted to do something about that.</p>
        <p>
          I created this six-week programme to give women dedicated time for themselves and their development. Through
          one-to-one coaching, reflection and practical learning, they can explore what&rsquo;s important to them,
          recognise their strengths and work on the things they&rsquo;d like to approach differently.
        </p>
        <p>
          For organisations, it&rsquo;s an opportunity to give women support that goes beyond a traditional training
          course, helping them grow in confidence and bring what they&rsquo;ve learned into their everyday working lives.
        </p>
      </Prose>
    </SplitPanel>
  );
}

/** "Why This Programme?": foto in bianco e nero a sinistra, testo a destra. */
export function WhyProgramme() {
  return (
    <SplitPanel
      media={
        <img
          src="/images/programme-hero.jpg"
          alt="A group of women joining hands in a circle"
          className="aspect-[4/3] w-full object-cover grayscale"
        />
      }
    >
      <Eyebrow>Why This Programme?</Eyebrow>
      <Heading>I&rsquo;ve always believed in the power of coaching and meaningful conversations.</Heading>
      <Prose className="mt-8">
        <p>
          But I wanted to create a more connected development experience, bringing together personalised coaching,
          structured reflection and practical learning.
        </p>
        <p className="font-serif text-[1.4rem] leading-[1.4] text-fg">
          An experience that doesn&rsquo;t simply encourage new thinking but equips women with the knowledge and tools
          to turn insight into action.
        </p>
      </Prose>
      <Link href="/programme/" className="cta mt-10">Explore the Programme</Link>
    </SplitPanel>
  );
}
