/** L'illustrazione ad acquerello del percorso, a tutta larghezza.
 *  Su mobile e' ingrandita e tagliata ai lati, cosi' la donna resta leggibile.
 *  L'immagine e' spostata in modo che la testa della donna (al 54,8% della larghezza) sia esattamente al centro della pagina; la didascalia sta centrata sotto di lei. */
export default function JourneyArt({ caption = "From overthinking to moving forward." }: { caption?: string | null }) {
  return (
    <section aria-label="From tangled thoughts to moving forward" className="overflow-hidden pb-12">
      <div className="relative left-1/2 w-[180%] max-w-none -translate-x-[54.8%] sm:w-full sm:max-w-[1600px]">
        <img
          src="/images/journey-watercolour.png"
          alt="A watercolour line that starts as a tangle, becomes a path a woman walks along, and opens into flowing lines"
          width={2600}
          height={533}
          className="w-full"
        />
        {caption && (
          <p className="relative left-[54.8%] mt-2 w-max max-w-[90vw] -translate-x-1/2 text-center font-serif text-[clamp(1.2rem,2vw,1.6rem)] text-label italic">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
