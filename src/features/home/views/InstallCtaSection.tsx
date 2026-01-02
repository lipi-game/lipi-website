import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { InstallGamesManager } from "../services/InstallGamesManager";
import type { InstallGame } from "../types/installGame";

/**
 * Place banner + badges in /public/cta/:
 * - /public/cta/install-banner.png
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

      <div className="mx-auto max-w-[1120px]">
        {/* Outer premium container */}
        <div className="rounded-[24px] border border-[#e0e7ef] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-6 md:p-10">
          {/* Banner Image */}
          <div className="w-full overflow-hidden rounded-[20px] bg-muted">
            {selectedGame?.bannerImage ? (
              <img
                src={selectedGame.bannerImage}
                alt={`${selectedGame.name} game preview`}
                className="w-full h-auto object-contain rounded-[20px]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <div className="w-full aspect-[16/9] bg-muted rounded-[20px]" />
            )}
          </div>

          {/* Game Selector */}
          {games.length > 1 && (
            <div className="mt-6 flex justify-center">
              <div className="flex gap-3 overflow-x-auto scrollbar-hidden px-1 py-1">
                {games.map((game) => {
                  const isSelected = selectedGame?.id === game.id;
                  return (
                    <motion.button
                      key={game.id}
                      onClick={() => handleSelectGame(game)}
                      aria-pressed={isSelected}
                      className={`
                        relative px-5 py-2.5 rounded-full font-medium text-sm
                        transition-all duration-200 ease-out
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7c2b] focus-visible:ring-offset-2
                        ${
                          isSelected
                            ? "bg-[#ff7c2b] text-white shadow-[0_4px_16px_rgba(255,124,43,0.35)] border-2 border-[#ff7c2b]"
                            : "bg-white text-gray-700 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
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
          <p className="mt-8 text-center text-xl md:text-2xl font-semibold text-gray-900">
            Pick a game. Install in seconds.
          </p>

          {/* Store Badges */}
          <div className="mt-6 flex justify-center items-center gap-4">
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
        className="h-9 md:h-10 w-auto"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </a>
  );
}
