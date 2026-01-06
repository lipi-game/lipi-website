import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Apple } from "lucide-react";
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
      className="py-16 md:py-24 px-4 bg-white"
      style={{ backgroundColor: "#ffffff"}}
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

              {/* Caption */}
              <p className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Pick a game. Install in seconds.
              </p>

              {/* Store Buttons */}
              <div className="flex justify-center items-center gap-4">
                <StoreButton
                  href={selectedGame?.appStoreUrl}
                  label={`Download ${selectedGame?.name || "game"} on App Store`}
                  icon="apple"
                />
                <StoreButton
                  href={selectedGame?.playStoreUrl}
                  label={`Get ${selectedGame?.name || "game"} on Google Play`}
                  icon="playstore"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StoreButtonProps {
  href?: string;
  label: string;
  icon: "apple" | "playstore";
}

function StoreButton({ href, label, icon }: StoreButtonProps) {
  const isDisabled = !href;

  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      aria-disabled={isDisabled}
      className={`
        inline-flex items-center justify-center gap-1.5
        px-4 py-1.5 min-w-[95px] h-[26px]
        rounded-full
        bg-black text-white
        text-xs font-medium
        transition-all duration-200
        ${
          isDisabled
            ? "pointer-events-none opacity-50"
            : "hover:bg-gray-800 hover:scale-105"
        }
      `}
    >
      {icon === "apple" ? (
        <Apple className="w-3.5 h-3.5" />
      ) : (
        <PlayStoreIcon className="w-3.5 h-3.5" />
      )}
    </a>
  );
}

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
    </svg>
  );
}
