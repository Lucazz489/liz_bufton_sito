import Link from "next/link";

/** Chi e' Liz e perche' lavora con le donne: foto a sinistra, testo a destra. */
export default function AboutLiz() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-36">
      <img
        src="/images/women-together.jpg"
        alt="Women standing together with their hands joined"
        width={1920}
        height={1080}
        className="aspect-[4/3] w-full object-cover object-[60%_center] lg:col-span-6"
      />
      <div className="max-w-[34rem] lg:col-span-5 lg:col-start-8">
        <p className="text-[0.78rem] font-semibold tracking-[0.22em] text-label uppercase">Why I do this</p>
        <h2 className="mt-6 font-serif text-[clamp(2rem,3.2vw,2.8rem)] leading-[1.12] font-normal">
          The kind of development experience I believe women deserve:{" "}
          <em className="text-label">personal, purposeful and built to last.</em>
        </h2>
        <p className="mt-6 text-[1.1rem] leading-[1.75] text-muted">
          After 12 years of training, teaching and coaching professionals at every level, from managers to partners and
          CEOs, I created a focused space for women to think differently, understand themselves more deeply and grow,
          professionally and personally.
        </p>
        <Link href="/my-story/" className="text-link mt-8 inline-block">Read my story</Link>
      </div>
    </section>
  );
}
