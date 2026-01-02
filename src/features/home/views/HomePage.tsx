import { HeroSection } from "./HeroSection";
import { IntroAboutSection } from "./IntroAboutSection";
import { WordsFromExpertsSection } from "./WordsFromExpertsSection";
import { OurGamesSection } from "@/features/games";

export function HomePage() {
  return (
    <main>
      {/* Sticky Hero Region - hero stays pinned while this region scrolls */}
      <section id="home" className="relative h-[200vh]">
        <div className="sticky top-0 h-screen z-0">
          <HeroSection />
        </div>
      </section>
      
      {/* Content sections - overlap hero then scroll normally */}
      <div className="relative z-10 -mt-[100vh]">
        {/* About Section */}
        <section id="about">
          <IntroAboutSection />
        </section>
        
        {/* Games Section */}
        <section id="games">
          <OurGamesSection />
        </section>

        {/* Words from Experts Section */}
        <section id="experts">
          <WordsFromExpertsSection />
        </section>
      </div>
    </main>
  );
}
