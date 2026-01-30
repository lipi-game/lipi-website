import { motion } from "framer-motion";

interface JuicyHeroProps {
  heroImage: string;
  heroImageAlt: string;
  logoImage?: string;
}

export function JuicyHero({ heroImage, heroImageAlt, logoImage }: JuicyHeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="h-full w-full object-cover"
        />
        {/* Dramatic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-transparent" />
      </motion.div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-game-yellow/60"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Logo at bottom center */}
      {logoImage && (
        <motion.div
          className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <img
            src={logoImage}
            alt="Game Logo"
            className="h-16 sm:h-20 md:h-24 drop-shadow-2xl"
          />
        </motion.div>
      )}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-background/50 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-2.5 rounded-full bg-background/70"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
