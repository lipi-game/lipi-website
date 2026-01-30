import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AppStoreBadgesProps {
  appStoreUrl: string;
  playStoreUrl: string;
  /** Size variant for the badges */
  size?: "sm" | "md" | "lg";
  /** Whether to use dark theme (for light backgrounds) */
  variant?: "light" | "dark";
  /** Optional className for the container */
  className?: string;
  /** Enable motion animations */
  animated?: boolean;
}

const sizeClasses = {
  sm: {
    appStore: "h-8 sm:h-9",
    playStore: "h-[47px] sm:h-[52px]",
  },
  md: {
    appStore: "h-10 sm:h-12",
    playStore: "h-[58px] sm:h-[70px]",
  },
  lg: {
    appStore: "h-11 sm:h-14",
    playStore: "h-[64px] sm:h-[82px]",
  },
};

/**
 * Reusable App Store and Google Play download badges
 * - Consistent sizing and hover effects across the app
 * - Accessible with proper aria-labels
 * - Supports light/dark variants and multiple sizes
 */
export function AppStoreBadges({
  appStoreUrl,
  playStoreUrl,
  size = "md",
  variant = "light",
  className,
  animated = false,
}: AppStoreBadgesProps) {
  const sizes = sizeClasses[size];

  const glowClass =
    variant === "light"
      ? "group-hover:opacity-100 bg-foreground/10"
      : "group-hover:opacity-100 bg-background/20";

  if (animated) {
    return (
      <div className={cn("flex flex-row items-center gap-3 sm:gap-4", className)}>
        {/* App Store Badge - Animated */}
        <motion.a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download on the App Store"
          className="group relative flex items-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className={cn(
              "absolute -inset-1 rounded-xl blur opacity-0 transition-opacity",
              glowClass
            )}
            aria-hidden="true"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className={cn("relative w-auto object-contain", sizes.appStore)}
            loading="lazy"
          />
        </motion.a>

        {/* Google Play Badge - Animated */}
        <motion.a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get it on Google Play"
          className="group relative flex items-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className={cn(
              "absolute -inset-1 rounded-xl blur opacity-0 transition-opacity",
              glowClass
            )}
            aria-hidden="true"
          />
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google Play"
            className={cn("relative w-auto object-contain", sizes.playStore)}
            loading="lazy"
          />
        </motion.a>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-row items-center gap-3 sm:gap-4", className)}>
      {/* App Store Badge */}
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className="group relative flex items-center cursor-pointer"
      >
        <div
          className={cn(
            "absolute -inset-1 rounded-xl blur opacity-0 transition-opacity",
            glowClass
          )}
          aria-hidden="true"
        />
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="Download on the App Store"
          className={cn(
            "relative w-auto object-contain transition-transform group-hover:scale-105 group-active:scale-95",
            sizes.appStore
          )}
          loading="lazy"
        />
      </a>

      {/* Google Play Badge */}
      <a
        href={playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className="group relative flex items-center cursor-pointer"
      >
        <div
          className={cn(
            "absolute -inset-1 rounded-xl blur opacity-0 transition-opacity",
            glowClass
          )}
          aria-hidden="true"
        />
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          className={cn(
            "relative w-auto object-contain transition-transform group-hover:scale-105 group-active:scale-95",
            sizes.playStore
          )}
          loading="lazy"
        />
      </a>
    </div>
  );
}
