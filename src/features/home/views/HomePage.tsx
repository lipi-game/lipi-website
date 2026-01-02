import { HeroSection } from "./HeroSection";
import { IntroAboutSection } from "./IntroAboutSection";
import { OurGamesSection } from "@/features/games";

export function HomePage() {
  return (
    <main>
      {/* Hero Section - Home */}
      <section id="home">
        <HeroSection />
      </section>
      
      {/* About Section */}
      <section id="about">
        <IntroAboutSection />
      </section>
      
      {/* Games Section */}
      <section id="games">
        <OurGamesSection />
      </section>
    </main>
  );
}
