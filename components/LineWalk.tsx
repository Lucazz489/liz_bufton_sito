"use client";

import { useEffect, useRef } from "react";
import { ART_ACCENT, ART_INK, ART_TRANSFORM, ART_VIEWBOX } from "./artwork";

/**
 * Il disegno della copertina del journal: groviglio, donna che cammina e linee che salgono.
 * Mentre si scorre, il disegno si "scopre" da sinistra a destra, come se venisse tracciato.
 * Con "riduci animazioni" appare gia' completo.
 */
const clamp = (n: number) => Math.min(1, Math.max(0, n));

export default function LineWalk({ caption }: { caption?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reveal = useRef<SVGRectElement>(null);

  useEffect(() => {
    const root = ref.current;
    const rect = reveal.current;
    if (!root || !rect) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = root.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = reduce ? 1 : clamp((vh - r.top) / (vh * 0.75));
      rect.setAttribute("width", String(4096 * p));
      root.classList.toggle("is-done", p >= 1);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="linewalk mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
      <svg viewBox={ART_VIEWBOX} className="h-auto w-full" aria-hidden="true">
        <defs>
          <clipPath id="linewalk-reveal">
            <rect ref={reveal} x="0" y="0" width="0" height="1560" />
          </clipPath>
        </defs>
        <g clipPath="url(#linewalk-reveal)">
          <g transform={ART_TRANSFORM}>
            <path d={ART_INK} fill="var(--fg)" />
            <path d={ART_ACCENT} fill="var(--label)" />
          </g>
        </g>
      </svg>
      {caption && (
        <p className="caption mt-10 text-center font-serif text-[clamp(1.4rem,2.4vw,1.9rem)] italic">{caption}</p>
      )}
    </div>
  );
}
