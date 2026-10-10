export const SITE = {
  name: "Liz Bufton",
  tagline: "Coaching for professional women",
  // TODO: sostituire con il dominio definitivo
  url: "https://www.example.com",
  email: "hello@example.com",
  linkedin: "https://www.linkedin.com/",
};

// Voci del menu (l'ultima e' la prenotazione, definita sotto come CTA)
export const NAV = [
  { href: "/", label: "Home" },
  { href: "/my-story/", label: "My Story" },
  { href: "/programme/", label: "Programme" },
  { href: "/growth-and-insights/", label: "Growth and insights" },
] as const;

export const CTA = { href: "/book-a-call/", label: "Book a Complimentary Call" };