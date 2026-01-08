import { motion, AnimatePresence } from "framer-motion";
import { useRotatingPhrases } from "@/shared/hooks/useRotatingPhrases";
import VIDEO_SRC from "/Assets/hero.mp4";

const HERO_PHRASES = [
  "We make learning playable.",
  "We turn epics into play.",
  "We build games kids love.",
  "We make practice feel fun.",
];

export function HeroSection() {
  const { currentPhrase, currentIndex, prefersReducedMotion } = useRotatingPhrases({
    phrases: HERO_PHRASES,
    intervalMs: 2800,
  });

  return (
    <section className="relative h-full w-full overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" poster="">
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Fallback gradient background (shows if video fails) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-10" />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

      {/* Hero Text - Bottom Left */}
      <div className="absolute bottom-20 left-6 md:left-16 lg:left-24">
        <h1 className="text-3xl md:text-[2.75rem] leading-tight md:leading-[1.1] font-medium tracking-tight text-white drop-shadow-lg">
          <span className="inline-flex items-baseline gap-1 sm:gap-2 flex-wrap sm:flex-nowrap lg:text-6xl">
            {/* "At" with orange A */}
            <span className="whitespace-nowrap">
              <span className="text-[#118fdd]">A</span>
              <span>t</span>
            </span>

            {/* "Lipi," with orange comma */}
            <span className="whitespace-nowrap">
              Lipi
              <span className="text-[#118fdd]">,</span>
            </span>

            {/* Rotating phrase */}
            <span className="relative inline-block min-w-[14ch] sm:min-w-[16ch] whitespace-nowrap">
              <AnimatePresence mode="wait">
                {prefersReducedMotion ? (
                  <span key={currentIndex} className="inline-block">
                    {currentPhrase}
                  </span>
                ) : (
                  <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="inline-block"
                  >
                    {currentPhrase}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
}
