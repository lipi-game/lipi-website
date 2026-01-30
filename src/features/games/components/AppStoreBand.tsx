import { motion } from "framer-motion";
import { AppStoreBadges } from "@/shared/components/AppStoreBadges";

interface AppStoreBandProps {
  gameIcon: string;
  title: string;
  tagline: string;
  appStoreUrl: string;
  playStoreUrl: string;
}

/**
 * App Store Band - Clean download section with game icon, title, and store badges
 * Appears immediately below the hero section
 */
export function AppStoreBand({
  gameIcon,
  title,
  tagline,
  appStoreUrl,
  playStoreUrl,
}: AppStoreBandProps) {
  return (
    <section 
      className="relative bg-card py-8 sm:py-10 lg:py-12 border-y border-border"
      aria-label="Download game"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" aria-hidden="true" />
      
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Game Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div 
                className="absolute -inset-2 bg-gradient-to-br from-game-orange via-game-red to-game-purple rounded-3xl opacity-60 blur-lg group-hover:opacity-80 transition-opacity" 
                aria-hidden="true"
              />
              <img
                src={gameIcon}
                alt=""
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shadow-xl object-cover border-4 border-card"
              />
            </div>
          </motion.div>

          {/* Title & Tagline */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-2">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-medium">
              {tagline}
            </p>
          </motion.div>

          {/* Download Buttons - Using shared component */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <AppStoreBadges
              appStoreUrl={appStoreUrl}
              playStoreUrl={playStoreUrl}
              size="md"
              variant="light"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
