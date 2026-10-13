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
      <Eyebrow>A Little About Me</Eyebrow>
      <Heading>My Experience. My Perspective. My Why.</Heading>
      <Prose className="mt-8">
        <p>
          For over a decade, I&rsquo;ve worked in coaching, training and people development. My approach has been shaped
          not only by my professional experience, but also by my own journey through change, personal growth and
          self-discovery.
        </p>
        <p>These experiences have shaped who I am and how I support others.</p>
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
          className="aspect-[4/3] w-full object-cover object-[60%_center]"
        />
      }
    >
      <Eyebrow>Why women?</Eyebrow>
      <Heading>I wanted to create something more personal for women.</Heading>
      <Prose className="mt-8">
        <p>
          Over the years, working in training and coaching, I&rsquo;ve had the opportunity to support women at different
          stages of their careers. Through our conversations, I&rsquo;ve come to understand more about the challenges
          they face, the expectations they navigate and the pressures they sometimes place on themselves.
        </p>
        <p>
          These experiences strengthened my desire to support women in a more personal and meaningful way.
        </p>
        <p>
          I wanted to create a programme that gives women the space to reflect, understand themselves more deeply and
          develop new approaches to the challenges they face, both personally and professionally.
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
