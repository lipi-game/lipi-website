import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { ExpertsRepository } from "../services/ExpertsRepository";
import type { Expert } from "../types/expert";
import { assetUrl } from "@/config/assets";

export function WordsFromExpertsSection() {
  const experts = ExpertsRepository.getAll();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [viewportWidth, setViewportWidth] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCards(3);
      else if (width >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // ResizeObserver for viewport width
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setViewportWidth(entry.contentRect.width);
      }
    });

    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  // For infinite loop, we create clones
  const extendedExperts = useMemo(() => {
    if (experts.length === 0) return [];
    // Clone cards: [...experts, ...experts, ...experts]
    return [...experts, ...experts, ...experts];
  }, [experts]);

  const maxStart = useMemo(
    () => Math.max(0, experts.length - visibleCards),
    [experts.length, visibleCards],
  );
  const totalDots = maxStart + 1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Autoplay advances 1 card at a time
  useEffect(() => {
    if (isInView && !playingId) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 2000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isInView, playingId]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index + experts.length); // Start from middle clone set
  }, [experts.length]);

  const handlePlayToggle = useCallback(
    (expert: Expert) => {
      if (playingId) {
        const currentVideo = videoRefs.current.get(playingId);
        currentVideo?.pause();
      }

      if (playingId === expert.id) {
        setPlayingId(null);
        return;
      }

      setPlayingId(expert.id);
    },
    [playingId],
  );

  const handleVideoEnd = useCallback(
    (expertId: string) => {
      if (playingId === expertId) {
        setPlayingId(null);
      }
    },
    [playingId],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    },
    [handlePrev, handleNext],
  );

  const getCardDimensions = () => {
    if (visibleCards === 1) return { width: 280, height: 480 };
    if (visibleCards === 2) return { width: 300, height: 520 };
    return { width: 320, height: 552 };
  };

  const { width: cardWidth, height: cardHeight } = getCardDimensions();
  const gap = 24;

  // Infinite loop logic with seamless reset
  const translateX = useMemo(() => {
    if (experts.length === 0 || viewportWidth === 0) return 0;

    const step = cardWidth + gap;
    const groupWidth = visibleCards * cardWidth + (visibleCards - 1) * gap;
    const centerOffset = Math.max(0, (viewportWidth - groupWidth) / 2);
    
    return centerOffset - currentIndex * step;
  }, [
    experts.length,
    viewportWidth,
    visibleCards,
    currentIndex,
    cardWidth,
    gap,
  ]);

  // Reset position when reaching clone boundaries (seamless loop)
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    if (experts.length === 0) return;

    // If we've scrolled past the end of the first clone set
    if (currentIndex >= experts.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(experts.length); // Jump to middle set
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
      return () => clearTimeout(timer);
    }

    // If we've scrolled before the beginning
    if (currentIndex < experts.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(experts.length + currentIndex); // Jump to middle set
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, experts.length]);

  // Calculate which dot should be active
  const activeDotIndex = useMemo(() => {
    if (experts.length === 0) return 0;
    const normalizedIndex = ((currentIndex % experts.length) + experts.length) % experts.length;
    return Math.min(normalizedIndex, maxStart);
  }, [currentIndex, experts.length, maxStart]);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 overflow-hidden bg-white"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Words from Experts carousel"
    >
      {/* Header */}
      <div className="mb-10 px-4 pl-4 md:mb-14 md:pl-6 lg:pl-0 lg:text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Words from Experts
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl lg:mx-auto">
          Trusted voices on Lipi's approach to learning through play.
        </p>
      </div>

      {/* Carousel Viewport */}
      <div className="relative w-full max-w-[1440px] h-[520px] md:h-[560px] lg:h-[624px] mx-auto px-4 md:px-0">
        {/* Left Fade Overlay - hidden on mobile */}
        <div
          className="absolute left-0 top-0 h-full w-16 md:w-24 lg:w-32 z-10 pointer-events-none hidden md:block"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Right Fade Overlay - hidden on mobile */}
        <div
          className="absolute right-0 top-0 h-full w-16 md:w-24 lg:w-32 z-10 pointer-events-none hidden md:block"
          style={{
            background:
              "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Navigation Arrows - visible on all screens */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border border-black/10 shadow-sm hover:shadow-md flex items-center justify-center hover:bg-white transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border border-black/10 shadow-sm hover:shadow-md flex items-center justify-center hover:bg-white transition-all"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>

        {/* Cards Track Container */}
        <div
          ref={viewportRef}
          className="h-full flex items-center overflow-hidden"
        >
          <motion.div
            className="flex"
            style={{ gap }}
            animate={{ x: translateX }}
            transition={
              !isTransitioning || prefersReducedMotion
                ? { duration: 0 }
                : { type: "tween", duration: 0.5, ease: "easeInOut" }
            }
          >
            {extendedExperts.map((expert, index) => {
              const isActive =
                index >= currentIndex && index < currentIndex + visibleCards;

              const start = Math.max(0, currentIndex - 1);
              const end = Math.min(
                extendedExperts.length - 1,
                currentIndex + visibleCards,
              );
              const shouldLoadPoster = index >= start && index <= end;

              return (
                <ExpertCard
                  key={`${expert.id}-${index}`}
                  expert={expert}
                  isPlaying={playingId === expert.id}
                  onPlayToggle={() => handlePlayToggle(expert)}
                  onVideoEnd={() => handleVideoEnd(expert.id)}
                  videoRef={(el) => {
                    if (el) videoRefs.current.set(expert.id, el);
                    else videoRefs.current.delete(expert.id);
                  }}
                  cardWidth={cardWidth}
                  cardHeight={cardHeight}
                  isActive={isActive}
                  shouldLoadPoster={shouldLoadPoster}
                />
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Pagination Dots - below the carousel */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === activeDotIndex
                ? "bg-foreground"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

interface ExpertCardProps {
  expert: Expert;
  isPlaying: boolean;
  onPlayToggle: () => void;
  onVideoEnd: () => void;
  videoRef: (el: HTMLVideoElement | null) => void;
  cardWidth: number;
  cardHeight: number;
  isActive: boolean;
  shouldLoadPoster: boolean;
}

function ExpertCard({
  expert,
  isPlaying,
  onPlayToggle,
  onVideoEnd,
  videoRef,
  cardWidth,
  cardHeight,
  isActive,
  shouldLoadPoster,
}: ExpertCardProps) {
  const [posterError, setPosterError] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const localVideoRef = useRef<HTMLVideoElement | null>(null);

  const setVideoEl = (el: HTMLVideoElement | null) => {
    localVideoRef.current = el;
    videoRef(el);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const v = localVideoRef.current;
    if (!v) return;

    const p = v.play();
    if (p && typeof (p as any).catch === "function") {
      (p as Promise<void>).catch(() => {});
    }
  }, [isPlaying]);

  return (
    <div
      className="relative flex-shrink-0 rounded-[20px] overflow-hidden shadow-lg bg-muted transition-all duration-300"
      style={{
        width: cardWidth,
        height: cardHeight,
        transform: isActive ? "scale(1)" : "scale(0.95)",
        opacity: isActive ? 1 : 0.7,
      }}
    >
      {isPlaying && !videoError ? (
        <video
          ref={setVideoEl}
          src={assetUrl(expert.video)}
          poster={!posterError ? assetUrl(expert.poster) : undefined}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          preload="none"
          onEnded={onVideoEnd}
          onError={() => setVideoError(true)}
          controls={isPlaying}
        />
      ) : (
        <div className="absolute inset-0 w-full h-full">
          {posterError ? (
            <div className="absolute inset-0 bg-gradient-to-b from-muted to-muted-foreground/20 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">
                Expert Video
              </span>
            </div>
          ) : shouldLoadPoster ? (
            <img
              src={assetUrl(expert.poster)}
              alt={expert.name}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              onError={() => setPosterError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-muted" />
          )}
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-white font-semibold text-lg leading-tight">
            {expert.name}
          </h3>
          <p className="text-white/80 text-sm">{expert.role}</p>
        </div>

        <AnimatePresence mode="wait">
          {!isPlaying ? (
            <motion.button
              key="play"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={onPlayToggle}
              className="flex-shrink-0 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              aria-label="Play video"
            >
              <Play
                className="w-5 h-5 text-foreground ml-0.5"
                fill="currentColor"
              />
            </motion.button>
          ) : (
            <motion.button
              key="pause"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={onPlayToggle}
              className="flex-shrink-0 w-12 h-12 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-colors"
              aria-label="Pause video"
            >
              <Pause className="w-5 h-5 text-white" fill="currentColor" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}