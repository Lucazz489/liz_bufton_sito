/**
 * Divisore fisso: due linee sottili partono dai lati e si incontrano
 * al centro con due piccoli riccioli, sfumando verso i bordi.
 * Usa il colore oro della palette.
 */
const LEFT = "M20,30 C300,30 380,30 462,30 C484,30 498,20 494,12 C490,4 476,8 480,18 C484,27 492,30 500,30";
const RIGHT = "M980,30 C700,30 620,30 538,30 C516,30 502,20 506,12 C510,4 524,8 520,18 C516,27 508,30 500,30";

export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 lg:px-10 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1000 40" className="h-auto w-full overflow-visible">
        <defs>
          {/* stesso id in ogni divisore: la definizione e' identica, quindi non crea conflitti */}
          <linearGradient id="divider-fade" gradientUnits="userSpaceOnUse" x1="20" y1="0" x2="980" y2="0">
            <stop offset="0" stopColor="var(--gold)" stopOpacity="0" />
            <stop offset="0.25" stopColor="var(--gold)" />
            <stop offset="0.75" stopColor="var(--gold)" />
            <stop offset="1" stopColor="var(--gold)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[LEFT, RIGHT].map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="url(#divider-fade)"
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </div>
  );
}
