import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { InstallGamesManager } from "../services/InstallGamesManager";
import type { InstallGame } from "../types/installGame";

/**
 * Place images in /public/cta/:
 * - /public/cta/install-bg.png (background image)
 * - /public/cta/app-store-badge.svg
 * - /public/cta/google-play-badge.svg
 */

export function InstallCtaSection() {
  const games = useMemo(() => InstallGamesManager.getGames(), []);
  const [selectedGame, setSelectedGame] = useState<InstallGame | undefined>(
    InstallGamesManager.getDefaultGame()
  );

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleSelectGame = (game: InstallGame) => {
    setSelectedGame(game);
  };

  return (
    <section
      aria-labelledby="install-cta-heading"
      className="py-16 md:py-24 px-4"
    >
      <h2 id="install-cta-heading" className="sr-only">
        Install Lipi Games
      </h2>

      <div className="mx-auto w-full max-w-[1280px]">
        {/* Main CTA Card */}
        <div
          className="relative w-full h-auto md:h-[744px] rounded-[32px] md:rounded-[52px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: selectedGame?.bannerImage
                ? `url(${selectedGame.bannerImage})`
                : undefined,
              backgroundColor: selectedGame?.bannerImage ? undefined : "#e5e7eb",
            }}
          />

          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col justify-end h-full min-h-[480px] md:min-h-full">
            {/* Bottom Content Area */}
            <div className="bg-gradient-to-t from-white/95 via-white/85 to-transparent pt-20 pb-8 md:pb-12 px-6 md:px-12">
              {/* Game Selector */}
              {games.length > 1 && (
                <div className="flex justify-center mb-6">
                  <div className="flex gap-3 overflow-x-auto scrollbar-hidden px-1 py-1">
                    {games.map((game) => {
                      const isSelected = selectedGame?.id === game.id;
                      return (
                        <motion.button
                          key={game.id}
                          onClick={() => handleSelectGame(game)}
                          aria-pressed={isSelected}
                          className={`
                            relative px-6 py-3 rounded-full font-semibold text-sm md:text-base
                            transition-all duration-200 ease-out whitespace-nowrap
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7c2b] focus-visible:ring-offset-2
                            ${
                              isSelected
                                ? "bg-[#ff7c2b] text-white shadow-[0_4px_20px_rgba(255,124,43,0.4)]"
                                : "bg-white text-gray-800 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                            }
                          `}
                          whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                          animate={
                            prefersReducedMotion
                              ? {}
                              : {
                                  scale: isSelected ? 1.02 : 1,
                                }
                          }
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          {game.name}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Caption */}
              <p className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Pick a game. Install in seconds.
              </p>

              {/* Store Badges */}
              <div className="flex justify-center items-center gap-4">
                <StoreBadge
                  href={selectedGame?.appStoreUrl}
                  imageSrc="/cta/app-store-badge.svg"
                  label={`Download ${selectedGame?.name || "game"} on App Store`}
                />
                <StoreBadge
                  href={selectedGame?.playStoreUrl}
                  imageSrc="/cta/google-play-badge.svg"
                  label={`Get ${selectedGame?.name || "game"} on Google Play`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StoreBadgeProps {
  href?: string;
  imageSrc: string;
  label: string;
}

function StoreBadge({ href, imageSrc, label }: StoreBadgeProps) {
  const isDisabled = !href;

  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      aria-disabled={isDisabled}
      className={`
        inline-block transition-transform duration-200
        ${
          isDisabled
            ? "pointer-events-none opacity-50 grayscale"
            : "hover:scale-105"
        }
      `}
    >
      <img
        src={imageSrc}
        alt=""
        className="h-10 md:h-12 w-auto"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </a>
  );
}
