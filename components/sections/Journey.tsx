"use client";

import { useEffect, useRef, useState } from "react";
import Walker from "@/components/Walker";

/**
 * Il percorso delle sei settimane, con UNA sola donna che attraversa la pagina.
 * - Una linea parte da un groviglio e corre come un "terreno" sotto ogni tappa.
 * - Mentre si scorre, la donna cammina da sinistra a destra lungo il terreno della tappa
 *   e la linea si disegna dietro di lei; poi la linea scende verso la tappa successiva,
 *   la donna esce di scena e riappare all'inizio del tratto seguente.
 * - Ogni tappa raggiunta si "accende": il cerchio rosa diventa via via piu' intenso
 *   e il numero diventa oro; anche la donna cresce un poco a ogni tappa, per dare l'idea di una crescita.
 * - La linea finisce in un cuore dopo l'ultima tappa.
 * Con "riduci animazioni" tutto appare gia' completo e la donna resta sull'ultima tappa.
 * Testi delle tappe: provvisori (dal mock-up), da confermare con Liz.
 */
const STAGES = [
  { title: "Clarity", text: "Get clear on where you are now, what you want to move towards and why it matters." },
  { title: "Awareness", text: "Explore the beliefs, behaviours and patterns influencing where you are now." },
  { title: "Change", text: "Identify what needs to shift and begin exploring different ways of thinking and responding." },
  { title: "Action", text: "Turn insight into action and decide how you\u2019ll follow through." },
  {
    title: "Momentum",
    text: "Strengthen the habits, strategies and support you need to keep moving, even when challenges arise or old patterns resurface.",
  },
  { title: "Celebration", text: "Recognise your progress, what you\u2019ve learned and what you\u2019re taking forward." },
];

type Pt = [number, number];
const clamp = (n: number) => Math.min(1, Math.max(0, n));
const f = (n: number) => n.toFixed(1);

/** Curva morbida che passa per tutti i punti (Catmull-Rom convertita in Bezier) */
function smooth(points: Pt[]): string {
  let d = "";
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const [p1, p2] = [points[i], points[i + 1]];
    const p3 = points[i + 2] ?? p2;
    const c1: Pt = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2: Pt = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${f(c1[0])},${f(c1[1])} ${f(c2[0])},${f(c2[1])} ${f(p2[0])},${f(p2[1])}`;
  }
  return d;
}

type Ground = { x0: number; x1: number; y: number };
type Geometry = { w: number; h: number; pieces: string[]; grounds: Ground[]; walkerW: number };

/**
 * Pezzi della linea, in ordine: [groviglio, terreno 1, discesa 1, terreno 2, ..., terreno 6, cuore].
 * Tenerli separati permette di sapere quanta linea disegnare quando la donna e' in un punto preciso.
 */
function buildGeometry(box: DOMRect, cols: DOMRect[], feetY: number[], small: boolean): Geometry {
  const grounds: Ground[] = cols.map((c, i) => ({
    x0: c.left - box.left + c.width * 0.12,
    x1: c.left - box.left + c.width * 0.88,
    y: feetY[i],
  }));
  const pieces: string[] = [];
  const g0 = grounds[0];

  // groviglio a sinistra del primo terreno
  const r = small ? 14 : 24;
  const orbit = small ? 9 : 15;
  const cx = Math.max(r + orbit + 4, g0.x0 - r * 1.6);
  const cy = g0.y - r * 0.9;
  const tangle: Pt[] = [];
  for (let i = 0; i <= 160; i++) {
    const t = (i / 160) * 6 * Math.PI * 2;
    const k = t / 6;
    const rr = r + (r / 8) * Math.sin(t * 0.5);
    tangle.push([cx + orbit * Math.cos(k + 0.6) + rr * Math.cos(t), cy + orbit * 0.9 * Math.sin(k + 0.6) + rr * 0.95 * Math.sin(t)]);
  }
  const last = tangle[tangle.length - 1];
  pieces.push(`M${f(tangle[0][0])},${f(tangle[0][1])}` + smooth(tangle) + smooth([last, [(last[0] + g0.x0) / 2, g0.y - 4], [g0.x0, g0.y]]));

  grounds.forEach((g, i) => {
    // terreno: una linea quasi piana, con una leggerissima curva verso il basso
    const mid = (g.x0 + g.x1) / 2;
    pieces.push(`M${f(g.x0)},${f(g.y)} Q${f(mid)},${f(g.y + 6)} ${f(g.x1)},${f(g.y)}`);
    const next = grounds[i + 1];
    if (next) {
      // discesa: la linea esce a destra, scende con un'ansa e rientra da sinistra nella tappa successiva
      const h = next.y - g.y;
      const out = g.x1 + (g.x1 - g.x0) * 0.25;
      const back = Math.max(8, next.x0 - (next.x1 - next.x0) * 0.25);
      pieces.push(
        `M${f(g.x1)},${f(g.y)}` +
          smooth([
            [g.x1, g.y],
            [out, g.y + h * 0.25],
            [(out + back) / 2, g.y + h * 0.55],
            [back, g.y + h * 0.82],
            [next.x0, next.y],
          ]),
      );
    }
  });

  // cuore dopo l'ultima tappa
  const gl = grounds[grounds.length - 1];
  const s = small ? 18 : 28;
  const hx = Math.min(box.width - s * 2 - 8, gl.x1 + s * 1.6);
  const hy = gl.y - s * 1.6;
  pieces.push(
    `M${f(gl.x1)},${f(gl.y)}` +
      smooth([
        [gl.x1, gl.y],
        [gl.x1 + s * 0.8, gl.y - s * 0.1],
        [hx, hy + s],
      ]) +
      ` C${f(hx - s * 1.2)},${f(hy + s * 0.2)} ${f(hx - s * 0.9)},${f(hy - s * 0.9)} ${f(hx)},${f(hy - s * 0.25)}` +
      ` C${f(hx + s * 0.9)},${f(hy - s * 0.9)} ${f(hx + s * 1.2)},${f(hy + s * 0.2)} ${f(hx)},${f(hy + s)}`,
  );
  return { w: box.width, h: box.height, pieces, grounds, walkerW: cols[0].width * (small ? 0.6 : 0.4) };
}

export default function Journey() {
  const root = useRef<HTMLDivElement>(null);
  const walker = useRef<HTMLDivElement>(null);
  const [geo, setGeo] = useState<Geometry | null>(null);

  // misura le tappe e costruisce la linea (anche quando cambia la larghezza)
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const measure = () => {
      const box = el.getBoundingClientRect();
      const cols = Array.from(el.querySelectorAll<HTMLElement>("[data-col]")).map((c) => c.getBoundingClientRect());
      const feetY = Array.from(el.querySelectorAll<HTMLElement>("[data-feet]")).map(
        (e) => e.getBoundingClientRect().top - box.top,
      );
      if (!cols.length) return;
      setGeo(buildGeometry(box, cols, feetY, box.width < 640));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // scorrimento: disegno della linea, posizione della donna, tappe che si accendono
  useEffect(() => {
    const el = root.current;
    const w = walker.current;
    if (!el || !w || !geo) return;
    const paths = Array.from(el.querySelectorAll<SVGPathElement>("path[data-piece]"));
    const lens = paths.map((p) => p.getTotalLength());
    paths.forEach((p, i) => (p.style.strokeDasharray = `${lens[i]}`));
    const stages = Array.from(el.querySelectorAll<HTMLElement>("[data-stage]"));
    const n = geo.grounds.length;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    // quanta parte di ogni pezzo e' disegnata, dato l'avanzamento p (0..1) nel percorso
    const draw = (piece: number, amount: number) => {
      paths[piece].style.strokeDashoffset = `${lens[piece] * (1 - clamp(amount))}`;
    };

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      // l'avanzamento segue il punto a ~60% dello schermo: ogni tappa occupa 1/n del percorso
      const p = reduce ? 1 : clamp((vh * 0.6 - r.top - geo.grounds[0].y + vh * 0.25) / (geo.grounds[n - 1].y - geo.grounds[0].y + vh * 0.35));
      const pos = p * n; // es. 2.4 = terza tappa, al 40%
      const stage = Math.min(n - 1, Math.floor(pos));
      const local = reduce ? 1 : pos - stage; // avanzamento dentro la tappa
      // in ogni tappa: primo 70% la donna cammina sul terreno, ultimo 30% la linea scende alla tappa dopo
      const walk = clamp(local / 0.7);
      const descend = clamp((local - 0.7) / 0.3);

      // groviglio: si disegna all'inizio della prima tappa
      draw(0, stage > 0 ? 1 : clamp(local / 0.25));
      for (let i = 0; i < n; i++) {
        const ground = 1 + i * 2;
        const down = ground + 1;
        if (i < stage) {
          draw(ground, 1);
          if (i < n - 1) draw(down, 1);
        } else if (i === stage) {
          draw(ground, i === 0 ? clamp((local - 0.2) / 0.5) : walk);
          if (i < n - 1) draw(down, descend);
        } else {
          draw(ground, 0);
          if (i < n - 1) draw(down, 0);
        }
      }
      draw(paths.length - 1, stage === n - 1 ? descend : 0); // cuore alla fine

      // la donna: cammina lungo il terreno della tappa corrente, poi sfuma mentre la linea scende
      const g = geo.grounds[stage];
      const t = stage === 0 ? clamp((local - 0.2) / 0.5) : walk;
      const x = g.x0 + (g.x1 - g.x0) * t;
      const fade = stage === n - 1 ? 1 : 1 - descend;
      // crescita: tappa dopo tappa la donna diventa un po' piu' grande (dal 90% al 112%)
      const grow = 0.9 + ((stage + t) / n) * 0.22;
      w.style.transform = `translate(${x - geo.walkerW / 2}px, ${g.y}px) translateY(-100%) scale(${grow.toFixed(3)})`;
      w.style.opacity = String(reduce ? 1 : fade * clamp(pos * 6));

      stages.forEach((s, i) => s.classList.toggle("is-reached", reduce || i < stage || (i === stage && local > 0.15)));
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
  }, [geo]);

  return (
    <div ref={root} className="journey relative mx-auto max-w-6xl px-6 lg:px-10">
      {geo && (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          viewBox={`0 0 ${geo.w} ${geo.h}`}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="journey-line" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={geo.h}>
              <stop offset="0" stopColor="var(--fg)" />
              <stop offset="0.5" stopColor="var(--label)" />
              <stop offset="1" stopColor="var(--gold)" />
            </linearGradient>
          </defs>
          {geo.pieces.map((d, i) => (
            <path
              key={i}
              data-piece
              d={d}
              fill="none"
              stroke="url(#journey-line)"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </svg>
      )}

      {/* la donna: un solo disegno che si sposta lungo il percorso */}
      <div
        ref={walker}
        aria-hidden="true"
        className="journey-walker pointer-events-none absolute top-0 left-0 z-10 text-fg"
        style={{ width: geo ? geo.walkerW : 0, aspectRatio: "840 / 1410", opacity: 0, transformOrigin: "50% 100%" }}
      >
        <Walker className="h-full w-full" />
      </div>

      <ol className="relative">
        {STAGES.map((s, i) => (
          <li
            key={s.title}
            data-stage
            style={{ ["--stage" as string]: i }}
            className="journey-stage grid h-[340px] grid-cols-[40%_1fr] items-center gap-6 sm:h-[380px] lg:h-[400px] lg:grid-cols-12 lg:gap-8"
          >
            <div data-col className="relative h-full lg:col-span-5">
              <span className="journey-halo absolute top-[12%] left-1/2 aspect-square w-[min(88%,270px)] rounded-full" />
              {/* riferimento invisibile: la linea del terreno passa qui */}
              <span data-feet className="absolute right-0 bottom-[10%] left-0 h-0" />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="journey-num font-serif text-[clamp(2.6rem,5vw,4rem)] leading-none font-light lining-nums">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-[clamp(1.2rem,1.8vw,1.6rem)] tracking-[0.16em] uppercase">
                {s.title}
              </h3>
              <p className="mt-3 max-w-[36ch] text-[0.98rem] leading-[1.65] text-muted lg:text-[1.0625rem]">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
