import { ART_TRANSFORM, WOMAN, WOMAN_VIEWBOX } from "./artwork";

/** La donna che cammina, dal disegno ufficiale della copertina. Prende il colore del testo. */
export default function Walker({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={WOMAN_VIEWBOX} className={className} aria-hidden="true">
      <g transform={ART_TRANSFORM}>
        <path d={WOMAN} fill="currentColor" />
      </g>
    </svg>
  );
}
