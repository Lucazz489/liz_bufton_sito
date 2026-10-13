import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops",
  description: "Workshops for professional women by Liz Bufton.",
};

// Pagina da costruire: i contenuti arriveranno da Liz
export default function WorkshopsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-40">
      <p className="text-[0.78rem] font-semibold tracking-[0.22em] text-label uppercase">Workshops</p>
      <h1 className="mt-6 font-serif text-[clamp(2.4rem,4.4vw,3.6rem)] leading-[1.05] font-normal tracking-[-0.01em]">
        Coming soon
      </h1>
      <p className="mx-auto mt-8 max-w-[52ch] text-[1.125rem] leading-[1.8] text-muted">
        Details of upcoming workshops will be shared here shortly.
      </p>
    </section>
  );
}
