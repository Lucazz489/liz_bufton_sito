import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth and insights",
  description: "Ideas, reading and resources on growth, leadership and change, shared by Liz Bufton.",
};

// Pagina da costruire: per ora solo il titolo
export default function GrowthPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-40">
      <p className="eyebrow text-label">Growth and insights</p>
      <h1 className="mt-6 font-serif text-[clamp(2.4rem,4.4vw,3.6rem)] leading-[1.05] font-normal tracking-[-0.01em]">
        Testo da definire
      </h1>
      <p className="mx-auto mt-8 max-w-[52ch] text-[1.125rem] leading-[1.8] text-muted">Contenuti in arrivo.</p>
    </section>
  );
}
