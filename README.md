# Sito Liz Bufton

Next.js (App Router) + TypeScript + Tailwind, export statico per Cloudflare Pages.

## Avvio

```bash
npm install
cp .env.example .env.local   # poi incolla la chiave Web3Forms
npm run dev                  # http://localhost:3000
npm run build                # genera la cartella out/
```

## Struttura

```
app/
  page.tsx              Home (anteprime di tutte le sezioni)
  about/                About
  the-programme/        The Programme
  book-a-call/          Book a Complimentary Call (form)
  privacy/              Privacy Policy (testo da inserire)
  sitemap.ts, robots.ts SEO
components/
  Header.tsx            Menu (desktop + mobile), voce attiva sottolineata
  LineWalk.tsx          Linea animata (al momento non usata)
  BookingForm.tsx       Form con Web3Forms, honeypot e consenso privacy
  sections/             Blocchi delle pagine (Hero, CoachingIntro, Journaling...)
lib/site.ts             Nome, dominio, email, voci di menu
app/globals.css         Palette e font (blocco @theme), animazioni
```

## Da completare

- [ ] Foto: `public/images/liz-hero.jpg` e `coaching-journal.jpg` sono ritagli provvisori dal Canva, sostituirli con gli originali in alta risoluzione (stesso nome file)
- [ ] Logo: per ora il nome e' scritto in Cormorant Garamond (`components/Header.tsx`)
- [ ] Testi: tutti quelli in italiano sono indicazioni da sostituire
- [ ] `lib/site.ts`: dominio definitivo, email, Instagram
- [ ] Chiave Web3Forms in `.env.local` e nelle variabili di Cloudflare
- [ ] Testo della Privacy Policy
- [ ] Immagine Open Graph `public/og.jpg` (1200x630), poi scommentare in `app/layout.tsx`

## Linea animata

`components/LineWalk.tsx` disegna una linea rosa mentre si scorre: parte da un
groviglio, diventa una donna che cammina e prosegue in avanti (ispirata alla
copertina del Coaching Journal). I percorsi sono in `components/linewalk-paths.ts`.
Con "riduci animazioni" attivo nel sistema operativo, appare gia' completa.
Per una versione disegnata da un illustratore basta sostituire i path SVG.

## Colori

Tutti i colori sono in un solo punto: il blocco `:root` in `app/globals.css`.
I componenti non usano mai colori diretti, ma "ruoli":

| Ruolo | Dove si usa | Colore |
|---|---|---|
| `page`, `fg`, `muted`, `label` | sfondo, testo, testo secondario, etichette e corsivi | avorio, quasi nero, grigio caldo, cipria scuro |
| `alt`, `alt-fg`, `alt-muted`, `alt-label` | sezioni alternate (Journal, About) | rosa tenue |
| `band`, `band-fg` | fasce con la frase in evidenza | nero con testo avorio |
| `head`, `head-fg` | navbar e footer | cipria con testo bianco |
| `btn`, `btn-fg`, `btn-hover` | l'unico pulsante del sito (classe `.cta`) | cipria con testo nero |

## Componenti di stile

- Pulsante: classe `.cta` (uguale ovunque). Link secondario: classe `.text-link`
- Due colonne titolo/testo: componente `Split`
- Fascia con frase in evidenza: componente `Band`
- Divisore con i due riccioli: componente `Divider`

## Pubblicazione su Cloudflare Pages

1. Caricare il progetto su GitHub.
2. Cloudflare > Workers & Pages > Create > Pages > collega il repository.
3. Build command: `npm run build`. Output directory: `out`.
4. Variabile d'ambiente: `NEXT_PUBLIC_WEB3FORMS_KEY`.
5. Dopo il deploy: collegare il dominio e inviare `/sitemap.xml` a Google Search Console.

I font sono installati nel progetto (`@fontsource`), quindi il sito non chiama Google Fonts.
