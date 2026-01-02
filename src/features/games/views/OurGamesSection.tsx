import { Link } from "react-router-dom";
import { Container } from "@/shared/components/Container";
import { getGameCardsData, type GameCardData } from "../services/GamesManager";

function GameCard({ game, index }: { game: GameCardData; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <article
      className={`flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-5 rounded-[20px] bg-card ${
        isEven ? "" : "sm:flex-row-reverse"
      }`}
    >
      {/* Game Image */}
      <div className="w-full sm:w-[180px] md:w-[200px] lg:w-[220px] flex-shrink-0">
        <div className="aspect-square rounded-[16px] bg-muted overflow-hidden">
          <img
            src={game.imageUrl}
            alt={game.imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              // Fallback placeholder on error
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>

      {/* Game Content */}
      <div
        className={`flex flex-col justify-center gap-3 sm:gap-4 flex-1 ${
          isEven ? "sm:text-left" : "sm:text-right"
        }`}
      >
        <h3 className="font-semibold text-lg sm:text-xl lg:text-[22px] text-foreground leading-tight">
          {game.title}
        </h3>
        <p className="text-sm sm:text-[15px] lg:text-base text-muted-foreground leading-relaxed">
          {game.description}
        </p>
        <div className={`mt-1 ${isEven ? "" : "sm:self-end"}`}>
          {game.isPlayable ? (
            <Link
              to={game.route || "/games"}
              className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium rounded-full border-2 border-[#ff7c2b] text-[#ff7c2b] bg-transparent hover:bg-[#ff7c2b]/10 transition-colors"
            >
              {game.ctaLabel}
            </Link>
          ) : (
            <button
              disabled
              aria-disabled="true"
              className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium rounded-full border border-border text-muted-foreground bg-muted cursor-not-allowed"
            >
              {game.ctaLabel}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export function OurGamesSection() {
  const games = getGameCardsData();
  const topRowGames = games.slice(0, 2);
  const bottomRowGames = games.slice(2, 4);

  return (
    <section
      id="our-games"
      aria-labelledby="our-games-heading"
      className="py-16 sm:py-20 lg:py-24 bg-white"
    >
      <Container size="xl">
        {/* Section Heading */}
        <h2
          id="our-games-heading"
          className="font-semibold text-2xl sm:text-3xl lg:text-[36px] text-foreground mb-3 sm:mb-4"
        >
          Our Games
        </h2>

        {/* Subtitle - visible on tablet/mobile per Figma */}
        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 lg:mb-12 max-w-2xl">
          Explore our collection of games designed to make learning engaging,
          meaningful, and fun — from Indian epics to word-based challenges for
          all ages.
        </p>

        {/* Games Grid */}
        <div className="space-y-0">
          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {topRowGames.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>

          {/* Orange Divider */}
          <div className="my-6 sm:my-8 lg:my-10">
            <hr className="border-t-2 border-[#ff7c2b]" />
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {bottomRowGames.map((game, index) => (
              <GameCard key={game.id} game={game} index={index + 2} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
