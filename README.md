# Liz Bufton – Coaching Website

Website for **Liz Bufton**, a coach and English teacher who works with professional women going through career progression, greater responsibility and change of direction.

Designed and developed by me, from the visual identity to the deploy.

🔗 **Live site:** *coming soon*

> Status: **work in progress** – the structure and design are complete; final photos, copy and domain are being added.

---

## Highlights

- **Static site, no backend** – Next.js static export served from Cloudflare's edge: fast, cheap to host, nothing to maintain on the server side.
- **Booking form without a server** – requests are sent through Web3Forms straight to the client's inbox, with a honeypot field against spam and an explicit privacy consent checkbox.
- **GDPR-friendly by design** – fonts are self-hosted with `@fontsource`, so the site makes no calls to Google Fonts; no tracking scripts.
- **Custom illustration in code** – the walking-woman drawing from the client's journal cover is vectorized and rendered as an inline SVG component that inherits the text colour.
- **Role-based colour system** – every colour lives in one place (`app/globals.css`); components use semantic roles (`page`, `band`, `head`, `btn`…) instead of hard-coded colours, so the palette can change without touching components.
- **Content kept separate from layout** – site data, menu and testimonials live in `lib/`, so texts can be updated without editing components.
- **Image placeholders** – an `ImageSlot` component shows a description of the photo still needed, so the site is publishable while assets are still being produced.
- **Accessibility** – animations respect *prefers-reduced-motion*, semantic HTML, labelled form fields.
- **SEO** – page metadata and Open Graph tags, generated `sitemap.xml` and `robots.txt`.
- **Responsive** – mobile-first layout with a dedicated mobile menu.

## Pages

| Page | Content |
|---|---|
| Home | Overview of coaching, programme, journaling, tools and testimonials |
| My Story | About Liz |
| Programme | The coaching programme in detail |
| Growth and insights | Articles and resources |
| Book a Complimentary Call | Booking form |
| Privacy | Privacy policy |

## Tech stack

- **Framework:** Next.js (App Router, static export) · React · TypeScript
- **Styling:** Tailwind CSS v4 · custom CSS design tokens
- **Fonts:** Cormorant Garamond + Figtree, self-hosted via `@fontsource`
- **Forms:** Web3Forms
- **Hosting:** Cloudflare (static assets, deployed with Wrangler)

## Project structure

```
app/                    Pages (App Router), global styles, sitemap and robots
components/             Reusable UI: Header, Footer, Band, Split, Divider, ImageSlot…
components/sections/    Page sections: Hero, CoachingIntro, Testimonials, ThreeElements…
components/artwork.ts   Vectorized illustration paths
lib/site.ts             Site name, URLs, menu
lib/testimonials.ts     Testimonials content
public/images/          Photos
```

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export in out/
```

The booking form needs a Web3Forms key in `.env.local`:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your-key
```

## Deploy

`npm run build` generates the static site in `out/`, which is published on Cloudflare with Wrangler (configuration in `wrangler.jsonc`). The Web3Forms key is set as an environment variable in the Cloudflare dashboard.

---

*Photos, illustration, texts and testimonials are the property of Liz Bufton and are shown here with her permission. They may not be reused.*
