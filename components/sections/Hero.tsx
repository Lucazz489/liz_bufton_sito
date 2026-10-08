import Link from "next/link";
import { CTA } from "@/lib/site";

/**
 * Prima schermata: foto quadrata a sinistra, blocco di testo centrato a destra,
 * tutto in Cormorant Garamond. Sfondo rosa tenue a tutta larghezza (un tono piu' scuro della pagina).
 * Le misure sono in vw per mantenere le proporzioni del Canva (1366px di larghezza).
 */
export default function Hero() {
  return (
    <div className="bg-alt text-alt-fg">
      <section className="mx-auto max-w-[1366px] px-6 py-14 lg:grid lg:min-h-[min(45vw,615px)] lg:grid-cols-[3%_31%_11.8%_48.8%_1fr] lg:items-start lg:p-0">
        <img
          src="/images/liz-hero.jpg"
          alt="Liz Bufton, executive coach"
          width={400}
          height={400}
          className="mx-auto aspect-square w-full max-w-md object-cover lg:col-start-2 lg:mt-[min(5.1vw,70px)] lg:max-w-none"
        />

        <div className="mt-12 flex flex-col items-center text-center font-serif text-[1.3rem] leading-[1.4] font-medium lg:col-start-4 lg:mt-[min(5.1vw,70px)] lg:min-h-[min(35.9vw,490px)] lg:pb-[min(3vw,40px)] lg:text-[min(1.9vw,26px)]">
          <p className="font-sans text-[1.02em] leading-tight font-extrabold tracking-[0.14em] text-alt-label uppercase">
            Coaching for professional women
          </p>
          <h1 className="mt-2 mb-3 text-[1.75em] leading-[1.1] font-semibold">Ready for what comes next?</h1>
          <p>
            I work with professional women navigating the moments that shape what comes next — progression, greater
            responsibility, change and new direction.
          </p>
          <p>
            Whether you&rsquo;re stepping forward, changing course or ready to develop how you think, communicate and
            lead, this is a space to focus on you, your development and where you want to go next.
          </p>
          <div className="mt-8 flex flex-col items-center gap-5 lg:mt-auto">
            <Link href="/programme/" className="cta">Explore the programme</Link>
            <Link href={CTA.href} className="text-link font-sans">Book a complimentary call</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
