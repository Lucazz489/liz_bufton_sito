/**
 * Spazio per un'immagine. Finche' `src` non e' indicato mostra un segnaposto
 * con la descrizione della foto che serve; quando la foto arriva basta
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
  return (
    <div
      role="img"
      aria-label={alt}
      className={`grid place-items-center bg-[repeating-linear-gradient(135deg,color-mix(in_srgb,var(--fg)_6%,transparent)_0_14px,transparent_14px_28px)] bg-alt p-6 text-center text-sm text-alt-muted ${className}`}
    >
      <span className="max-w-[28ch]">{hint}</span>
    </div>
  );
}