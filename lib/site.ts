export const SITE = {
  name: "Liz Bufton",
  tagline: "Women’s Leadership & Personal Development",
  // TODO: sostituire con il dominio definitivo
  url: "https://www.example.com",
  email: "hello@example.com",
  linkedin: "https://www.linkedin.com/",
};

// Voci del menu (l'ultima e' la prenotazione, definita sotto come CTA)
export const NAV = [
  { href: "/", label: "Home" },
  { href: "/programme/", label: "The Programme" },
  { href: "/workshops/", label: "Workshops" },
  { href: "/about/", label: "About" },
] as const;

export const CTA = { href: "/book-a-call/", label: "Book a call" };