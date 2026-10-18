/**
 * Spazio per un'immagine. Finche' `src` non e' indicato mostra un segnaposto
 * grigio (la descrizione della foto che serve resta solo nel codice, in `hint`); quando la foto arriva basta
 * salvarla in public/images/ e passare src="/images/nome-file.jpg".
 */
export default function ImageSlot({
  src,
  alt,
  hint,
  className = "",
  grayscale = false,
}: {
  src?: string;
  alt: string;
  hint: string; // descrizione della foto da inserire (visibile solo nel segnaposto)
  className?: string;
  grayscale?: boolean;
}) {
  if (src) {
    return <img src={src} alt={alt} className={`object-cover ${grayscale ? "grayscale" : ""} ${className}`} />;
  }
  // Foto non ancora arrivata: solo un riquadro grigio, senza testo
  return <div role="img" aria-label={alt} className={`bg-[color-mix(in_srgb,var(--fg)_9%,var(--page))] ${className}`} />;
}
