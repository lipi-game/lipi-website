import { HeroSection } from "./HeroSection";
import { IntroAboutSection } from "./IntroAboutSection";
import { OurGamesSection } from "@/features/games";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <IntroAboutSection />
      <OurGamesSection />
    </main>
  );
}
