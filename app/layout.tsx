import type { Metadata, Viewport } from "next";
import "@fontsource-variable/cormorant-garamond/wght.css";
import "@fontsource-variable/cormorant-garamond/wght-italic.css";
import "@fontsource-variable/figtree/index.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

// I font sono ospitati sul sito (niente chiamate a Google Fonts: meglio per il GDPR).

// Colore della barra del browser su mobile, uguale alla navbar
export const viewport: Viewport = {
  themeColor: "#c2858c",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Liz Bufton – Coaching for professional women",
    template: "%s | Liz Bufton",
  },
  description:
    "Coaching for professional women navigating progression, greater responsibility, change and new direction.",
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_GB",
    // TODO: aggiungere public/og.jpg (1200x630) e scommentare
    // images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-page font-sans text-[1.0625rem] leading-relaxed text-fg antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
