import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Apple } from "lucide-react";
import { InstallGamesManager } from "../services/InstallGamesManager";
import type { InstallGame } from "../types/installGame";
import { getAllGames } from "@/features/games/services/GamesRepository";

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
  const game = getAllGames()[0];

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleSelectGame = (game: InstallGame) => {
    setSelectedGame(game);
  };

  return (
    <section
      aria-labelledby="install-cta-heading"
      className="py-4 md:pb-20 bg-white"
      style={{ backgroundColor: "#ffffff" }}
    >
      <h2 id="install-cta-heading" className="sr-only">
        Install Lipi Games
      </h2>

      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className="relative w-full h-auto md:h-[744px] rounded-[32px] md:rounded-[52px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: selectedGame?.bannerImage
                ? `url(${selectedGame.bannerImage})`
                : undefined,
              backgroundColor: selectedGame?.bannerImage
                ? undefined
                : "#e5e7eb",
            }}
          />
          <div className="absolute inset-0 z-[5] pointer-events-none flex justify-center">
            <img
              src={"/Assets/Images/phone.png"}
              alt=""
              aria-hidden="true"
              className="absolute left-[10%] md:left-[20%] bottom-[140px] md:bottom-[180px]
               w-[140px] sm:w-[170px] md:w-[210px] lg:w-[240px]
               h-auto object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.25)]"
            />

            <img
              src={"/Assets/Images/tab.png"}
              alt=""
              aria-hidden="true"
              className="absolute left-[30%] md:left-[42%] bottom-[95px] md:bottom-[220px]
               w-[280px] sm:w-[360px] md:w-[460px] lg:w-[560px]
               h-auto object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.25)]"
            />
          </div>
          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col justify-end h-full min-h-[480px] md:min-h-full">
            {/* Bottom Content Area */}
            <div className="pt-20 pb-8 md:pb-18 px-6 md:px-12">
              {/* Caption */}
              <div className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-16">
                Pick a game. Install in seconds.
              </div>

              {/* Store Buttons */}
              <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex flex-col sm:flex-row items-center justify-center gap-3 px-6 z-10">
                <a
                  href={game.appStoreUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-5 bg-black text-white rounded-full shadow-lg shadow-black/20 transition-colors min-w-[180px] ${
                    !game.appStoreUrl ? "opacity-50 pointer-events-none" : "hover:bg-gray-900"
                  }`}
                  aria-disabled={!game.appStoreUrl}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
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
                  className={`inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-5 bg-black text-white rounded-full shadow-lg shadow-black/20 transition-colors min-w-[180px] ${
                    !game.playStoreUrl ? "opacity-50 pointer-events-none" : "hover:bg-gray-900"
                  }`}
                  aria-disabled={!game.playStoreUrl}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight opacity-80">GET IT ON</div>
                    <div className="text-sm font-semibold leading-tight">Google Play</div>
                  </div>
                </a>
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
