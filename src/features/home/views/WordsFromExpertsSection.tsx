import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { ExpertsRepository } from "../services/ExpertsRepository";
import type { Expert } from "../types/expert";

/**
 * NOTE: Place your poster images and video files in /public/experts/
 * e.g., /public/experts/expert-1.jpg, /public/experts/expert-1.mp4
 */

export function WordsFromExpertsSection() {
  const experts = ExpertsRepository.getAll();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Prefers reduced motion
  const prefersReducedMotion = 
    typeof window !== "undefined" && 
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Update visible cards on resize
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

  // Intersection observer for auto-play
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isInView && !playingId) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 1500);
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
    setCurrentIndex(index);
  }, []);

  const handlePlayToggle = useCallback((expert: Expert) => {
    const video = videoRefs.current.get(expert.id);
    
    if (playingId === expert.id) {
      video?.pause();
      setPlayingId(null);
    } else {
      if (playingId) {
        const currentVideo = videoRefs.current.get(playingId);
        currentVideo?.pause();
      }
      video?.play();
      setPlayingId(expert.id);
    }
  }, [playingId]);

  const handleVideoEnd = useCallback((expertId: string) => {
    if (playingId === expertId) {
      setPlayingId(null);
    }
  }, [playingId]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  }, [handlePrev, handleNext]);

  // Card dimensions (responsive)
  const getCardDimensions = () => {
    if (visibleCards === 1) return { width: 280, height: 480 };
    if (visibleCards === 2) return { width: 300, height: 520 };
    return { width: 320, height: 552 };
  };

  const { width: cardWidth, height: cardHeight } = getCardDimensions();
  const gap = 24;

  // Create infinite loop by tripling the items
  const extendedExperts = [...experts, ...experts, ...experts];
  const totalOriginal = experts.length;
  
  // Normalize index to actual position (middle set)
  const normalizedIndex = ((currentIndex % totalOriginal) + totalOriginal) % totalOriginal;
  
  // Calculate offset - center the current card
  const centerOffset = Math.floor(visibleCards / 2);
  const baseIndex = totalOriginal + normalizedIndex; // Start from middle set
  const translateX = -(baseIndex - centerOffset) * (cardWidth + gap);

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

      {/* Carousel Viewport - matches Figma: 1440x624 on desktop */}
      <div className="relative w-full max-w-[1440px] h-[480px] md:h-[560px] lg:h-[624px] mx-auto">
        {/* Left Fade Overlay */}
        <div 
          className="absolute left-0 top-0 h-full w-16 md:w-24 lg:w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0) 100%)",
          }}
        />
        
        {/* Right Fade Overlay */}
        <div 
          className="absolute right-0 top-0 h-full w-16 md:w-24 lg:w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Navigation Arrows - circular, white, outside cards area */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-black/10 shadow-sm hover:shadow-md flex items-center justify-center hover:bg-white transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-black/10 shadow-sm hover:shadow-md flex items-center justify-center hover:bg-white transition-all"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        {/* Cards Track Container */}
        <div className="h-full flex items-center justify-center overflow-hidden">
          <motion.div
            className="flex"
            style={{ gap }}
            animate={{ x: translateX }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
              duration: prefersReducedMotion ? 0 : 0.5,
            }}
          >
            {extendedExperts.map((expert, index) => {
              // Determine if this card is the "active" center card
              const relativeIndex = index - totalOriginal;
              const isActive = relativeIndex === normalizedIndex;
              
              return (
                <ExpertCard
                  key={`${expert.id}-${index}`}
                  expert={expert}
                  isPlaying={playingId === expert.id}
                  onPlayToggle={() => handlePlayToggle(expert)}
                  onVideoEnd={() => handleVideoEnd(expert.id)}
                  videoRef={(el) => {
                    if (el) videoRefs.current.set(expert.id, el);
                  }}
                  cardWidth={cardWidth}
                  cardHeight={cardHeight}
                  isActive={isActive}
                />
              );
            })}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {experts.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === normalizedIndex 
                  ? "bg-foreground" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
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
}: ExpertCardProps) {
  const [posterError, setPosterError] = useState(false);
  const [videoError, setVideoError] = useState(false);

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
      {/* Video / Poster */}
      {!videoError ? (
        <video
          ref={videoRef}
          src={expert.video}
          poster={!posterError ? expert.poster : undefined}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          onEnded={onVideoEnd}
          onError={() => setVideoError(true)}
          controls={isPlaying}
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-muted to-muted-foreground/20 flex items-center justify-center">
          {posterError ? (
            <span className="text-muted-foreground text-sm">Expert Video</span>
          ) : (
            <img 
              src={expert.poster} 
              alt={expert.name}
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => setPosterError(true)}
            />
          )}
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Footer: Name/Role (left) + Play Button (right) */}
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
        {/* Name and Role */}
        <div className="min-w-0">
          <h3 className="text-white font-semibold text-lg leading-tight">{expert.name}</h3>
          <p className="text-white/80 text-sm">{expert.role}</p>
        </div>

        {/* Play/Pause Button */}
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
              <Play className="w-5 h-5 text-foreground ml-0.5" fill="currentColor" />
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