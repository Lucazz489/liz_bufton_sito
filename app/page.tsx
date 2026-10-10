import HomeHero from "@/components/home/HomeHero";
import Credentials from "@/components/home/Credentials";
import Intro from "@/components/home/Intro";
import JourneyArt from "@/components/home/JourneyArt";
import ProgrammeOverview from "@/components/home/ProgrammeOverview";
import JournalFeature from "@/components/home/JournalFeature";
import FeaturedQuote from "@/components/home/FeaturedQuote";
import { HIGHLIGHT } from "@/lib/testimonials";
import AboutLiz from "@/components/home/AboutLiz";
import ClientWords from "@/components/home/ClientWords";

/*
 * Home ridisegnata (ramo redesign-home): stile sobrio ed editoriale.
 * 1 prima schermata · 2 credenziali + testimonianza di Marco in nero · 3 il problema · 4 illustrazione del percorso
 * 5 il programma · 6 il journal · 7 testimonianza in evidenza · 8 chi e' Liz
 * 9 cosa dicono i clienti + invito finale
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Credentials />
      <FeaturedQuote q={HIGHLIGHT} />
      <Intro />
      <JourneyArt />
      <ProgrammeOverview />
      <JournalFeature />
      <FeaturedQuote />
      <AboutLiz />
      <ClientWords />
    </>
  );
}
