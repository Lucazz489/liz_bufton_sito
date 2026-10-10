import Link from "next/link";
import { Body, Lead } from "@/components/Split";
import { CTA } from "@/lib/site";

/** "Your personal journal" su sfondo alternato (rosa tenue). */
export default function Journaling() {
  return (
    <section id="journaling" className="rounded-br-[56px] bg-alt text-alt-fg">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-32">
        <img
          src="/images/coaching-journal.png"
          alt="A personalised coaching journal"
          width={720}
          height={1079}
          className="mx-auto w-full max-w-[300px] drop-shadow-[0_24px_40px_rgba(0,0,0,0.25)] lg:col-span-4 lg:col-start-2"
        />
        <div className="max-w-[34rem] lg:col-span-6 lg:col-start-7">
          <p className="eyebrow mb-5 text-alt-label">Your personal journal</p>
          <Lead>Every client receives a personal coaching journal to accompany them throughout the six weeks.</Lead>
          <Body alt>
            A dedicated space to capture insights, deepen reflection, notice patterns and follow your progress.
          </Body>
          <p className="mt-2 font-serif text-[1.9rem] leading-tight font-medium text-gold italic">Reflect. Notice. Grow.</p>
          <Link href={CTA.href} className="cta mt-9">Book a complimentary call</Link>
        </div>
      </div>
    </section>
  );
}