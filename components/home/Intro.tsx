/** Il problema che Liz risolve: titolo a sinistra, testo a destra, nessuna decorazione. */
export default function Intro() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-36">
      <h2 className="font-serif text-[clamp(2.2rem,3.8vw,3.4rem)] leading-[1.08] font-normal tracking-[-0.01em] text-balance lg:col-span-5">
        Knowing you&rsquo;re ready for change and knowing how to create it are{" "}
        <em className="text-label">two different things.</em>
      </h2>
      <div className="max-w-[36rem] space-y-6 text-[1.15rem] leading-[1.75] text-muted lg:col-span-6 lg:col-start-7 lg:pt-3">
        <p>
          You may be stepping into greater responsibility, finding your way in a role that asks something different of
          you, or reconsidering your direction. You may want to communicate with greater confidence, establish stronger
          boundaries or trust your own judgement more.
        </p>
        <p>Or you may simply recognise that something in the way you think, work or respond needs to change.</p>
        <p className="pt-4 font-serif text-[1.7rem] leading-[1.3] text-fg">
          You don&rsquo;t need to arrive with the answer. You need to know that something matters enough to work on.
        </p>
      </div>
    </section>
  );
}
