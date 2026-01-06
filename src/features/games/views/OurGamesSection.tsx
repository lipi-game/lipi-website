import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Container } from "@/shared/components/Container";
import { getGameCardsData, type GameCardData } from "../services/GamesManager";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

function GameCard({
  game,
  onPlay,
}: {
  game: GameCardData;
  index: number;
  onPlay: (game: GameCardData) => void;
}) {
  return (
    <article
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-5 rounded-[20px] bg-card"
    >
      {/* Game Image */}
      <div className="w-full sm:w-[180px] md:w-[200px] lg:w-[220px] flex-shrink-0">
        <div className="aspect-square rounded-[16px] bg-muted overflow-hidden">
          <img
            src={game.imageUrl}
            alt={game.imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.08]"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>

      {/* Game Content */}
      <div className="flex flex-col justify-center gap-3 sm:gap-4 flex-1">
        <h3 className="font-semibold text-lg sm:text-xl lg:text-[22px] text-foreground leading-tight">
          {game.title}
        </h3>
        <p className="text-sm sm:text-[15px] lg:text-base text-muted-foreground leading-relaxed">
          {game.description}
        </p>
        <div className="mt-1">
          {game.isPlayable ? (
            <button
              onClick={() => onPlay(game)}
              className="inline-flex items-center justify-center w-36 h-11 px-2 text-sm font-medium rounded-full border-2 border-[#118FDD] text-[#118FDD] bg-transparent hover:border-[#FF7C2B] hover:bg-[#FF7C2B] hover:text-white transition-colors"
            >
              {game.ctaLabel}
            </button>
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

function GamePlayModal({
  game,
  open,
  onClose,
}: {
  game: GameCardData | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!game) return null;

  const hasAppStore = !!game.appStoreUrl;
  const hasPlayStore = !!game.playStoreUrl;

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="p-0 border-0 bg-transparent max-w-[92vw] sm:max-w-[1000px] overflow-hidden rounded-2xl">
        <DialogTitle className="sr-only">{game.title}</DialogTitle>
        <div
          className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] bg-cover bg-center"
          style={{ backgroundImage: `url(${game.imageUrl})` }}
        >
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Top content */}
          <div className="absolute top-8 left-0 right-0 text-center px-6">
            <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-2">
              {game.title}
            </h3>
            <p className="text-white/90 text-sm sm:text-base max-w-lg mx-auto line-clamp-2">
              {game.description || "Experience this amazing game!"}
            </p>
          </div>

          {/* Bottom store buttons */}
          <div className="absolute bottom-8 left-0 right-0 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-6">
            {hasAppStore && (
              <a
                href={game.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-5 bg-black hover:bg-gray-900 text-white rounded-lg transition-colors min-w-[200px]"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight opacity-80">Download on the</div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
              </a>
            )}
            {hasPlayStore && (
              <a
                href={game.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-5 bg-black hover:bg-gray-900 text-white rounded-lg transition-colors min-w-[200px]"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight opacity-80">Get it on</div>
                  <div className="text-sm font-semibold leading-tight">Google Play</div>
                </div>
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function OurGamesSection() {
  const games = getGameCardsData();
  const topRowGames = games.slice(0, 2);
  const bottomRowGames = games.slice(2, 4);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeGame, setActiveGame] = useState<GameCardData | null>(null);

  const handlePlay = (game: GameCardData) => {
    setActiveGame(game);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveGame(null);
  };

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

        {/* Subtitle */}
        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 lg:mb-12 max-w-2xl">
          Explore our collection of games designed to make learning engaging,
          meaningful, and fun — from Indian epics to word-based challenges for
          all ages.
        </p>

        {/* Games Grid */}
        <div className="space-y-0">
          {/* Mobile/Tablet single column */}
          <div className="lg:hidden">
            {games.map((game, index) => (
              <div key={game.id}>
                <GameCard game={game} index={index} onPlay={handlePlay} />

                {index !== games.length - 1 && (
                  <div className="my-6 sm:my-8">
                    <hr className="border-t-2 border-[#118FDD]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:block">
            {/* Top Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {topRowGames.map((game, index) => (
                <GameCard key={game.id} game={game} index={index} onPlay={handlePlay} />
              ))}
            </div>

            {/* Orange Divider */}
            <div className="my-1 sm:my-1 lg:my-1 ml-6">
              <div className="grid grid-cols-2 gap-8">
                <hr className="border-t-2 border-[#118FDD] w-full" />
                <hr className="ml-2 border-t-2 border-[#118FDD] w-full" />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {bottomRowGames.map((game, index) => (
                <GameCard key={game.id} game={game} index={index + 2} onPlay={handlePlay} />
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Game Play Modal */}
      <GamePlayModal game={activeGame} open={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}
