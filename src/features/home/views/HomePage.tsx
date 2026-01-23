import { HeroSection } from "./HeroSection";
import { IntroAboutSection } from "./IntroAboutSection";
import { WordsFromExpertsSection } from "./WordsFromExpertsSection";
import { InstallCtaSection } from "./InstallCtaSection";
import { OurGamesSection } from "@/features/games";
import { LatestBlogsSection } from "@/features/blog";
import { useSEO } from "@/shared/hooks/useSEO";

export function HomePage() {
  useSEO({
    title: "Lipi Inc | Learn Mahabharata, Ramayana In Native Languages",
    description:
      "Play and learn with Lipi Inc. Discover Lipi Epics, Lipi Kids, Brain Booster and WordCruise to master the Mahabharata, Ramayana, and vocabulary through AI-powered fun.",
    canonical: "https://lipiinc.com/", 
  });

  return (
    <main className="overflow-x-clip">
      {/* Sticky Hero Region - hero stays pinned while this region scrolls */}
      <section id="home" className="relative h-[200vh]">
        <div className="sticky top-0 h-[95dvh] z-0">
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

        {/* Install CTA Section */}
        <section id="install">
          <InstallCtaSection />
        </section>
      </div>
    </main>
  );
}
