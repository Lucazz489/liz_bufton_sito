import Hero from "@/components/sections/Hero";
import CoachingIntro from "@/components/sections/CoachingIntro";
import ProgrammeIntro from "@/components/sections/ProgrammeIntro";
import ThreeElements from "@/components/sections/ThreeElements";
import Journaling from "@/components/sections/Journaling";
import Tools from "@/components/sections/Tools";
import MeIntro from "@/components/sections/MeIntro";
import Testimonials from "@/components/sections/Testimonials";

// Testimonianza di Luca dopo la sezione Coaching; le altre testimonianze (quando arrivano) in fondo alla home.
export default function HomePage() {
  return (
    <>
      <Hero />
      <CoachingIntro />
      <Testimonials />
      <ProgrammeIntro />
      <ThreeElements />
      <Journaling />
      <Tools />
      <MeIntro />
      <Testimonials rest />
    </>
  );
}