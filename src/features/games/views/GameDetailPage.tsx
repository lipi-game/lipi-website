import { useParams, Navigate } from "react-router-dom";
import { useSEO } from "@/shared/hooks/useSEO";
import { getGameDetail } from "../data/gameDetails";
import { GameDetailHero } from "../components/GameDetailHero";
import { GameDetailOverview } from "../components/GameDetailOverview";
import { GameDetailFeatures } from "../components/GameDetailFeatures";
import { GameDetailShowcase } from "../components/GameDetailShowcase";
import { GameDetailCTA } from "../components/GameDetailCTA";

export function GameDetailPage() {
  const { gameId } = useParams<{ gameId: string }>();
  const game = gameId ? getGameDetail(gameId) : undefined;

  useSEO({
    title: game ? `${game.title} | LIPI Games` : "Game Not Found | LIPI Games",
    description: game?.tagline || "Explore our collection of word games",
  });

  if (!game) {
    return <Navigate to="/games" replace />;
  }

  return (
    <div className="min-h-screen">
      <GameDetailHero
        title={game.title}
        tagline={game.tagline}
        heroImage={game.heroImage}
        heroImageAlt={game.heroImageAlt}
        appStoreUrl={game.appStoreUrl}
        playStoreUrl={game.playStoreUrl}
        accentColor={game.accentColor}
      />

      <GameDetailOverview
        title={game.overviewTitle}
        description={game.overviewDescription}
        screenshots={game.screenshots}
      />

      <GameDetailFeatures
        title={game.featuresTitle}
        features={game.features}
      />

      <GameDetailShowcase
        showcases={game.showcases}
      />

      <GameDetailCTA
        title={game.ctaTitle}
        subtitle={game.ctaSubtitle}
        gameIcon={game.gameIcon}
        appStoreUrl={game.appStoreUrl}
        playStoreUrl={game.playStoreUrl}
      />
    </div>
  );
}
