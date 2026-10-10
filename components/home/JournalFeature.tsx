/** Il journal personalizzato: immagine a sinistra, testo a destra. */
export default function JournalFeature() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-32">
      <img
        src="/images/coaching-journal.png"
        alt="A personalised coaching journal"
        width={720}
        height={1079}
        className="mx-auto w-full max-w-[280px] drop-shadow-[0_30px_40px_rgba(28,23,24,0.18)] lg:col-span-4 lg:col-start-2"
      />
      <div className="max-w-[34rem] lg:col-span-6 lg:col-start-7">
        <p className="text-[0.78rem] font-semibold tracking-[0.22em] text-label uppercase">Your personal journal</p>
        <h2 className="mt-6 font-serif text-[clamp(2rem,3.2vw,2.8rem)] leading-[1.12] font-normal">
          Every client receives a personal coaching journal for the six weeks.
        </h2>
        <p className="mt-6 text-[1.1rem] leading-[1.75] text-muted">
          A dedicated space to capture insights, deepen reflection, notice patterns and follow your progress.
        </p>
        <p className="mt-8 font-serif text-[1.5rem] text-label italic">Reflect. Notice. Grow.</p>
      </div>
    </section>
  );
}
