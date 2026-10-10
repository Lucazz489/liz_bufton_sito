import Link from "next/link";
import { OTHERS } from "@/lib/testimonials";
import { CTA } from "@/lib/site";

/** "What clients say": testimonianze in due colonne, separate da linee sottili; poi l'invito finale. */
export default function ClientWords() {
  return (
    <>
      <section className="border-t border-rule">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <p className="text-[0.78rem] font-semibold tracking-[0.22em] text-label uppercase lg:col-span-5">
              What clients say
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,2.8rem)] leading-[1.12] font-normal lg:col-span-6 lg:col-start-7">
              Words from people I&rsquo;ve worked with, across different roles, organisations and stages of their careers.
            </h2>
          </div>
          <div className="mt-16 grid gap-x-16 md:grid-cols-2">
            {OTHERS.map((q) => (
              <figure key={q.name} className="border-t border-rule py-10">
                <blockquote className="space-y-4 font-serif text-[1.3rem] leading-[1.5]">
                  {q.text.map((t, i) => (
                    <p key={t.slice(0, 24)}>
                      {i === 0 && "“"}
                      {t}
                      {i === q.text.length - 1 && "”"}
                    </p>
                  ))}
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block text-[0.78rem] font-semibold tracking-[0.2em] uppercase">{q.name}</span>
                  <span className="mt-1 block text-[0.92rem] text-muted">{q.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-alt text-alt-fg">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
          <h2 className="font-serif text-[clamp(2.4rem,4.4vw,3.8rem)] leading-[1.05] font-normal tracking-[-0.01em]">
            You don&rsquo;t need to have it all figured out.
          </h2>
          <p className="mx-auto mt-6 max-w-[42ch] text-[1.15rem] leading-[1.7] text-alt-muted">
            A conversation is a good place to start. Book a free, no-obligation call to talk about where you are now and
            where you want to go next.
          </p>
          <Link href={CTA.href} className="cta mt-10">Book a complimentary call</Link>
        </div>
      </section>
    </>
  );
}
