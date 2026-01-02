import { HeroSection } from "./HeroSection";
import { IntroAboutSection } from "./IntroAboutSection";
import { WordsFromExpertsSection } from "./WordsFromExpertsSection";
import { OurGamesSection } from "@/features/games";
import { LatestBlogsSection } from "@/features/blog";
import { useSEO } from "@/shared/hooks/useSEO";

export function HomePage() {
  useSEO({
    title: "Lipi Games | Learn Through Play",
    description:
      "Discover Lipi Games - bringing Mahabharata, languages, and culture to life through interactive word games and learning experiences.",
    canonical: window.location.origin,
  });

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

        {/* Latest Blogs Section */}
        <section id="blogs">
          <LatestBlogsSection />
        </section>
      </div>
    </main>
  );
}
