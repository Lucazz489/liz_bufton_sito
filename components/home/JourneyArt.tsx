/** L'illustrazione ad acquerello del percorso, a tutta larghezza (statica per ora).
 *  Su mobile e' ingrandita e tagliata ai lati, cosi' la donna resta leggibile. */
export default function JourneyArt() {
  return (
    <section aria-label="From tangled thoughts to moving forward" className="overflow-hidden pb-10">
      <img
        src="/images/journey-watercolour.png"
        alt="A watercolour line that starts as a tangle, becomes a path a woman walks along, and opens into flowing lines"
        width={2600}
        height={533}
        className="relative left-1/2 w-[180%] max-w-none -translate-x-1/2 sm:w-full sm:max-w-[1600px]"
      />
      <p className="mt-4 text-center font-serif text-[clamp(1.3rem,2vw,1.6rem)] text-label italic">
        From overthinking to moving forward.
      </p>
    </section>
  );
}
