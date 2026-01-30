import { HeroSection } from "./HeroSection";
import { IntroAboutSection } from "./IntroAboutSection";
import { WordsFromExpertsSection } from "./WordsFromExpertsSection";
import { InstallCtaSection } from "./InstallCtaSection";
import { OurGamesSection } from "@/features/games";
import { LatestBlogsSection } from "@/features/blog";
import { useSEO } from "@/shared/hooks/useSEO";
import { AdvisorsSection } from "./AdvisorSection";

export function HomePage() {
  useSEO({
    title: "Lipi Games | Learn Mahabharata, Ramayana & Word Games App",
    description:
      "Play and learn with Lipi Games. Discover Lipi Epics, Lipi Kids, Brain Booster and WordCruise to master the Mahabharata, Ramayana, and vocabulary through AI-powered fun. Download now on iOS & Android.",
    canonical: "https://lipiinc.com/",
    keywords:
      "lipi games, lipi game, lipi epics, lipi epics & word games, word games app, mahabharata learning app, ramayana learning app, lipi game download, lipi kids, brain booster app, word cruise",
    ogTitle: "Lipi Games | Learn Mahabharata, Ramayana In Native Languages",
    ogDescription:
      "Explore the next generation of learning. Play Lipi Epics, WordCruise, Brain Booster and Lipi Kids to connect with Indian wisdom, master vocabulary, and learn through play.",
    ogImage: "https://img.lipi.games/lipi-notifications/email/Lipi-cube-logo.png",
    twitterCard: "summary",
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

        {/* Advisors Section */}
        <section id="advisors">
          <AdvisorsSection />
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
