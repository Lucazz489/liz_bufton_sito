import Link from "next/link";
import Band from "@/components/Band";

/** Seconda sezione: fascia + due colonne (titolo a sinistra, testo a destra). */
export default function CoachingIntro({ withCta = true }: { withCta?: boolean }) {
  return (
    <section>
      <Band>
        Coaching women to think clearly, lead confidently <em>and move forward.</em>
      </Band>

      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-40">
        <h2 className="font-serif text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.12] font-medium tracking-[-0.005em] text-balance lg:col-span-5">
          Knowing you&rsquo;re ready for change and knowing how to create it are two different things.
        </h2>

        <div className="max-w-[34rem] space-y-6 text-[1.125rem] leading-[1.8] text-muted lg:col-span-6 lg:col-start-7 lg:pt-2">
          <p>
            You may be stepping into greater responsibility, finding your way in a role that asks something different
            of you, or reconsidering your direction. You may want to communicate with greater confidence, establish
            stronger boundaries or trust your own judgement more.
          </p>
          <p>Or you may simply recognise that something in the way you think, work or respond needs to change.</p>

          <p className="pt-6 font-serif text-[1.6rem] leading-[1.35] font-medium text-fg">
            You don&rsquo;t need to arrive with the answer. You need to know that something matters enough to work on.{" "}
            <em className="text-label">That&rsquo;s where we begin.</em>
          </p>

          {withCta && (
            <div className="pt-6">
              <Link href="/programme/" className="cta">Explore the programme</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
