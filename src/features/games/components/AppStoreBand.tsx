import { motion } from "framer-motion";

interface AppStoreBandProps {
  gameIcon: string;
  title: string;
  tagline: string;
  appStoreUrl: string;
  playStoreUrl: string;
}

export function AppStoreBand({
  gameIcon,
  title,
  tagline,
  appStoreUrl,
  playStoreUrl,
}: AppStoreBandProps) {
  return (
    <section className="relative bg-card py-8 sm:py-10 lg:py-12 border-y border-border">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
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
              <div className="absolute -inset-2 bg-gradient-to-br from-game-orange via-game-red to-game-purple rounded-3xl opacity-60 blur-lg group-hover:opacity-80 transition-opacity" />
              <img
                src={gameIcon}
                alt="Game Icon"
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

          {/* Download Buttons */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-row gap-3 sm:gap-4"
          >
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-foreground/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="relative h-12 sm:h-14 transition-transform group-hover:scale-105 group-active:scale-95"
              />
            </a>
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-foreground/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="relative h-[52px] sm:h-[60px] transition-transform group-hover:scale-105 group-active:scale-95"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
