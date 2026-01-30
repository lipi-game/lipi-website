import { useParams, Navigate } from "react-router-dom";
import { useSEO } from "@/shared/hooks/useSEO";
import { getGameDetail } from "../data/gameDetails";
import { JuicyHero } from "../components/JuicyHero";
import { AppStoreBand } from "../components/AppStoreBand";
import { FeatureTrio } from "../components/FeatureTrio";
import { MetaLayer } from "../components/MetaLayer";
import { FinalCTA } from "../components/FinalCTA";
import { GameScreenshots } from "../components/GameScreenshots";

export function GameDetailPage() {
  const { gameId } = useParams<{ gameId: string }>();
  const game = gameId ? getGameDetail(gameId) : undefined;

  const getSEOKeywords = (gameId: string | undefined) => {
    if (gameId === "lipi-epics") {
      return "lipi epics, lipi epics app, mahabharata learning app, ramayana learning app, stories with audio video, story quiz app, visual guide, lipi coins, lipi epics download, indian epics learning app";
    }
    if (gameId === "lipi-kids") {
      return "lipi kids, kids learning app, kids poems app, kids stories app, vowels learning for kids, animals learning app, educational app for kids, preschool learning app";
    }
    return "lipi games, word games, vocabulary learning game";
  };

  useSEO({
    title: game ? `${game.title} | Lipi Games - Download Now` : "Game Not Found | Lipi Games",
    description: game?.overviewDescription || game?.tagline || "Explore our collection of educational word games.",
    canonical: game ? `https://lipiinc.com/games/${game.id}` : undefined,
    keywords: getSEOKeywords(gameId),
    ogTitle: game?.title,
    ogDescription: game?.tagline,
    ogImage: game?.gameIcon || "https://img.lipi.games/lipi-notifications/email/Lipi-cube-logo.png",
    twitterCard: "summary_large_image",
  });

  if (!game) {
    return <Navigate to="/games" replace />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Cinematic Hero - Full screen background */}
      <JuicyHero
        heroImage={game.heroImage}
        heroImageAlt={game.heroImageAlt}
      />

      {/* App Store Band - Clean download section */}
      <AppStoreBand
        gameIcon={game.gameIcon}
        title={game.title}
        tagline={game.tagline}
        appStoreUrl={game.appStoreUrl}
        playStoreUrl={game.playStoreUrl}
      />

      {/* Feature Trio - 3-column gameplay cards */}
      <FeatureTrio
        title={game.featuresTitle}
        features={game.features}
        screenshots={game.screenshots}
      />

      <GameScreenshots screenshots={game.screenshots} />

      {/* Meta Layer - Progression & Social */}
      <MetaLayer
        title={game.metaTitle || "Rise Through the Ranks"}
        description={game.metaDescription || "Compete globally and earn exclusive rewards"}
        stats={game.stats}
      />

      {/* Final CTA - Dark footer with device mockup */}
      <FinalCTA
        title={game.ctaTitle}
        subtitle={game.ctaSubtitle}
        gameIcon={game.gameIcon}
        appStoreUrl={game.appStoreUrl}
        playStoreUrl={game.playStoreUrl}
        mockupImage={game.screenshots[0]?.src}
      />
    </div>
  );
}