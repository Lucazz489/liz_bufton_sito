import HomeHero from "@/components/home/HomeHero";
import FeaturedQuote from "@/components/home/FeaturedQuote";
import Intro from "@/components/home/Intro";
import JourneyArt from "@/components/home/JourneyArt";
import ProgrammeOverview from "@/components/home/ProgrammeOverview";
import { AboutTeaser, WhyWomen, WhyProgramme } from "@/components/home/AboutLiz";
import { Testimonials, ClosingCta } from "@/components/home/ClientWords";
import { HIGHLIGHT } from "@/lib/testimonials";

/*
 * Home secondo le note finali di Liz (ottobre):
 * 1 prima schermata · 2 Mirella in nero · 3 presentazione + qualifiche · 4 Luca Chiodaroli in nero
 * 5 acquerello · 6 il programma in sintesi · 7 A Little About Me · 8 Why women?
 * 9 Why This Programme? · 10 testimonianze in nero · 11 invito finale
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedQuote />
      <Intro />
      <FeaturedQuote q={HIGHLIGHT} />
      <div className="pt-16 lg:pt-24">
        <JourneyArt />
      </div>
      <ProgrammeOverview />
      <AboutTeaser />
      <WhyWomen />
      <WhyProgramme />
      <Testimonials />
      <ClosingCta />
    </>
  );
}
