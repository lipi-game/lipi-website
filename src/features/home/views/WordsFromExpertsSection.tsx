import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { ExpertsRepository } from "../services/ExpertsRepository";
import { ExpertsManager } from "../services/ExpertsManager";
import type { Expert } from "../types/expert";
import { SectionWrapper } from "@/shared/components/SectionWrapper";

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
      setVisibleCards(ExpertsManager.getVisibleCards(window.innerWidth));
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
        setCurrentIndex((prev) => ExpertsManager.getNextIndex(prev, experts.length));
      }, 4500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isInView, playingId, experts.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => ExpertsManager.getPrevIndex(prev, experts.length));
  }, [experts.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => ExpertsManager.getNextIndex(prev, experts.length));
  }, [experts.length]);

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const handlePlayToggle = useCallback((expert: Expert) => {
    const video = videoRefs.current.get(expert.id);
    
    if (playingId === expert.id) {
      // Pause current video
      video?.pause();
      setPlayingId(null);
    } else {
      // Pause any playing video first
      if (playingId) {
        const currentVideo = videoRefs.current.get(playingId);
        currentVideo?.pause();
      }
      // Play new video
      video?.play();
      setPlayingId(expert.id);
    }
  }, [playingId]);

  // Handle video end
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

  // Calculate card dimensions based on screen size
  const getCardDimensions = () => {
    if (visibleCards === 1) return { width: 260, height: 470 };
    if (visibleCards === 2) return { width: 280, height: 510 };
    return { width: 312, height: 568 };
  };

  const { width: cardWidth, height: cardHeight } = getCardDimensions();
  const gap = 20;
  const totalWidth = cardWidth + gap;

  // Calculate offset to center current card(s)
  const getTranslateX = () => {
    const centerOffset = (visibleCards - 1) / 2;
    return -(currentIndex - centerOffset) * totalWidth;
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 overflow-hidden bg-white"
      style={{ backgroundColor: "#ffffff" }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Words from Experts carousel"
    >
      {/* Header */}
      <SectionWrapper className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Words from Experts
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
          Trusted voices on Lipi's approach to learning through play.
        </p>
      </SectionWrapper>

      {/* Carousel Container */}
      <div className="relative max-w-[1100px] mx-auto px-10 lg:px-20">
        {/* Left Fade Overlay */}
        <div 
          className="absolute left-0 top-0 h-full w-14 md:w-20 lg:w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0) 100%)",
          }}
        />
        
        {/* Right Fade Overlay */}
        <div 
          className="absolute right-0 top-0 h-full w-14 md:w-20 lg:w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        </button>

        {/* Cards Track */}
        <div className="flex justify-center overflow-hidden">
          <div 
            className="overflow-visible"
            style={{ width: visibleCards * totalWidth - gap }}
          >
            <motion.div
              className="flex"
              style={{ gap }}
              animate={{ x: getTranslateX() }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: prefersReducedMotion ? 0 : 0.5,
              }}
            >
              {experts.map((expert, index) => (
                <ExpertCard
                  key={expert.id}
                  expert={expert}
                  isPlaying={playingId === expert.id}
                  onPlayToggle={() => handlePlayToggle(expert)}
                  onVideoEnd={() => handleVideoEnd(expert.id)}
                  videoRef={(el) => {
                    if (el) videoRefs.current.set(expert.id, el);
                  }}
                  cardWidth={cardWidth}
                  cardHeight={cardHeight}
                  isActive={index === currentIndex}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {experts.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex 
                  ? "bg-gray-900" 
                  : "bg-gray-300 hover:bg-gray-400"
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
      className="relative flex-shrink-0 rounded-[20px] overflow-hidden shadow-lg bg-gray-200 transition-transform duration-300"
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
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-300 to-gray-400 flex items-center justify-center">
          {posterError ? (
            <span className="text-gray-500 text-sm">Expert Video</span>
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

      {/* Play Button */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onPlayToggle}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            aria-label="Play video"
          >
            <Play className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Pause button overlay when playing */}
      {isPlaying && (
        <button
          onClick={onPlayToggle}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
          aria-label="Pause video"
        >
          <Pause className="w-6 h-6 text-white" fill="currentColor" />
        </button>
      )}

      {/* Name and Role Overlay */}
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-white font-semibold text-lg">{expert.name}</h3>
        <p className="text-white/80 text-sm">{expert.role}</p>
      </div>
    </div>
  );
}
