import ImageSlot from "@/components/ImageSlot";

/**
 * Foto a tutta larghezza con titolo e testo sopra (in basso a sinistra),
 * con una velatura scura per la leggibilita'. Senza `src` mostra il segnaposto.
 */
export default function PageHero({
  eyebrow,
  title,
  text,
  src,
  hint,
  alt,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: string;
  src?: string;
  hint: string;
  alt: string;
}) {
  return (
    <section className="relative isolate flex min-h-[min(78vh,720px)] items-end overflow-hidden">
      <ImageSlot src={src} alt={alt} hint={hint} grayscale className="absolute inset-0 -z-10 h-full w-full" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1a1416]/75 via-[#1a1416]/35 to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-6 pb-16 text-[#f6f0ec] lg:px-10 lg:pb-24">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-5 max-w-[16ch] font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-[1.05] font-normal tracking-[-0.01em]">
          {title}
        </h1>
        {text && <p className="mt-6 max-w-[42ch] text-[1.15rem] leading-[1.7] text-[#f6f0ec]/90">{text}</p>}
      </div>
    </section>
  );
}