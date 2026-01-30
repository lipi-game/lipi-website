import { useParams, Navigate } from "react-router-dom";
import { useSEO } from "@/shared/hooks/useSEO";
import { getGameDetail } from "../data/gameDetails";
import { JuicyHero } from "../components/JuicyHero";
import { AppStoreBand } from "../components/AppStoreBand";
import { FeatureTrio } from "../components/FeatureTrio";
import { ImmersiveGameplay } from "../components/ImmersiveGameplay";
import { MetaLayer } from "../components/MetaLayer";
import { FinalCTA } from "../components/FinalCTA";

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

      {/* Immersive Gameplay Sections - Alternating */}
      {game.showcases.map((showcase, index) => (
        <ImmersiveGameplay
          key={index}
          showcase={showcase}
          reversed={index % 2 === 1}
        />
      ))}

      {/* Meta Layer - Progression & Social */}
      <MetaLayer
        title={game.metaTitle || "Rise Through the Ranks"}
        description={game.metaDescription || "Compete globally and earn exclusive rewards"}
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
