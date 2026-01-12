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
              className="inline-flex items-center justify-center w-36 h-11 px-2 text-sm font-medium rounded-full border-2 border-[#118FDD] text-[#118FDD] bg-transparent hover:border-[#118FDD] hover:bg-[#118FDD] hover:text-white transition-colors"
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
  const imageUrl = game.modalImageUrl || game.imageUrl;

  const titleLower = (game.title || "").toLowerCase();
  const mobileBgClass = titleLower.includes("kids")
    ? "bg-[#D8FFFF]"
    : titleLower.includes("epics")
    ? "bg-[#E6CEB7]"
    : "bg-white";

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent
        className={`
          p-0 border-0 rounded-[24px] overflow-hidden
          ${mobileBgClass} md:bg-transparent
          w-[92vw] max-w-[440px]
          h-[min(90dvh,620px)]
          md:w-[720px] md:h-[720px]
          md:max-w-[calc(100vw-32px)] md:max-h-[calc(100dvh-32px)]
          max-w-none
        `}
      >
        <DialogTitle className="sr-only">{game.title}</DialogTitle>

        <div className={`relative flex flex-col w-full h-full ${mobileBgClass} md:bg-muted`}>
          {/* IMAGE AREA */}
          <div className={`relative flex-1 min-h-[220px] md:min-h-0 ${mobileBgClass} md:bg-muted`}>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={game.title}
                className="absolute inset-0 w-full h-full object-contain"
              />
            ) : (
              <div className={`absolute inset-0 ${mobileBgClass} md:bg-muted`} />
            )}

            {/* Desktop-only gradient overlay */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45" />

            {/* Mobile: title only (no description) */}
<div className="sm:hidden absolute top-8 left-0 right-0 text-center px-4 z-10">
  <div className="inline-flex px-4 py-2 rounded-full text-black backdrop-blur text-foreground font-bold text-3xl">
    {game.title}
  </div>
</div>


            {/* Title & subtitle (desktop only) */}
            <div className="hidden md:block absolute top-6 left-0 right-0 text-center px-6 z-10">
              <h3 className="text-white font-bold text-2xl md:text-4xl mb-2">
                {game.title}
              </h3>
              <p className="text-white/85 text-sm md:text-base max-w-xl mx-auto line-clamp-2">
                {game.description || "Experience this amazing game!"}
              </p>
            </div>
          </div>

          {/* BUTTONS AREA
              - mobile (<md): normal flow, below image
              - desktop (md+): absolute overlay at bottom (your old behavior)
          */}
          <div
            className={`
              shrink-0
              ${mobileBgClass} md:bg-transparent
              p-4
              pb-[calc(16px+env(safe-area-inset-bottom))]
              md:p-0 md:absolute md:bottom-8 md:left-0 md:right-0 md:z-10
            `}
          >
            <div className="flex flex-col landscape:flex-row md:flex-row items-center justify-center gap-3 px-2 md:px-6">

              <a
                href={game.appStoreUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2.5 h-11 md:h-12 px-5 bg-black text-white rounded-full shadow-lg shadow-black/20 transition-colors min-w-[180px] w-full landscape:w-[min(220px,45vw)] md:w-auto ${
                  !hasAppStore ? "opacity-50 pointer-events-none" : "hover:bg-gray-900"
                }`}
                aria-disabled={!hasAppStore}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight opacity-80">Download on the</div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
              </a>

              <a
                href={game.playStoreUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2.5 h-11 md:h-12 px-5 bg-black text-white rounded-full shadow-lg shadow-black/20 transition-colors min-w-[180px] w-full landscape:w-[min(220px,45vw)] md:w-auto ${
                  !hasPlayStore ? "opacity-50 pointer-events-none" : "hover:bg-gray-900"
                }`}
                aria-disabled={!hasPlayStore}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight opacity-80">GET IT ON</div>
                  <div className="text-sm font-semibold leading-tight">Google Play</div>
                </div>
              </a>
            </div>
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