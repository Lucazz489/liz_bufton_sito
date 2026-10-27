"use client";

import Script from "next/script";
import { useRef } from "react";

// Calendario di Calendly incorporato nella pagina (piano gratuito di Liz).
// Lo script di Calendly crea l'iframe dentro il div; onReady si ripete a ogni visita della pagina.
const CALENDLY_URL = "https://calendly.com/liz-beth/discovery-call";

declare global {
  interface Window {
    Calendly?: { initInlineWidget: (o: { url: string; parentElement: HTMLElement }) => void };
  }
}

export default function CalendlyEmbed() {
  const box = useRef<HTMLDivElement>(null);
  const url = `${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=804557`;

  return (
    <>
      <div ref={box} className="h-[760px] min-w-[300px] overflow-hidden bg-page">
        <noscript>
          <a href={CALENDLY_URL} className="text-link">Book your discovery call on Calendly</a>
        </noscript>
      </div>
      <p className="mt-4 text-[0.95rem] text-muted">
        Calendar not showing?{" "}
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-link">
          Book on Calendly
        </a>
      </p>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onReady={() => {
          if (box.current && window.Calendly && !box.current.querySelector("iframe")) {
            window.Calendly.initInlineWidget({ url, parentElement: box.current });
          }
        }}
      />
    </>
  );
}
