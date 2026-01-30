import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface Screenshot {
  src: string;
  alt?: string;
  orientation?: "portrait" | "landscape"; 
}

interface GameScreenshotsProps {
  screenshots: Screenshot[];
}

export function GameScreenshots({ screenshots }: GameScreenshotsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  if (!screenshots || screenshots.length === 0) return null;

  // --- Scroll Logic ---
  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollBy = (offset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  // --- Lightbox Logic ---
  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const navigateLightbox = (direction: "next" | "prev", e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex === null) return;
    
    if (direction === "next") {
      setSelectedImageIndex((prev) => 
        prev === screenshots.length - 1 ? 0 : (prev as number) + 1
      );
    } else {
      setSelectedImageIndex((prev) => 
        prev === 0 ? screenshots.length - 1 : (prev as number) - 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateLightbox("next");
      if (e.key === "ArrowLeft") navigateLightbox("prev");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <section className="py-12 bg-background relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Preview
          </h2>
          <div className="hidden sm:flex gap-2">
            <button 
              onClick={() => scrollBy(-300)}
              disabled={!showLeftArrow}
              className={`p-2 rounded-full border border-border transition-opacity ${!showLeftArrow ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#118fdd]'}`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollBy(300)}
              disabled={!showRightArrow}
              className={`p-2 rounded-full border border-border transition-opacity ${!showRightArrow ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#118fdd]'}`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* --- Horizontal Scroll Container --- */}
        {/* Added 'items-center' to ensure mixed portrait/landscape shots align nicely */}
        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-4 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {screenshots.map((shot, index) => {
            const isLandscape = shot.orientation === "landscape";
            
            return (
              <motion.div
                key={index}
                className="relative flex-shrink-0 snap-center group cursor-zoom-in"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                onClick={() => openLightbox(index)}
              >
                {/* Conditional Styling based on Orientation 
                   Portrait: Tall and narrow (approx 9:16)
                   Landscape: Wide and shorter (approx 16:9)
                */}
                <div 
                  className={`
                    rounded-[32px] overflow-hidden bg-muted shadow-lg border border-border/40 
                    transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2
                    ${isLandscape 
                      ? "w-[480px] h-[270px] sm:w-[640px] sm:h-[360px]" // Landscape Dimensions
                      : "w-[280px] h-[500px] sm:w-[320px] sm:h-[580px]" // Portrait Dimensions
                    }
                  `}
                >
                  <img
                    src={shot.src}
                    alt={shot.alt || `Screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                     <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 drop-shadow-md" />
                  </div>
                </div>
              </motion.div>
            );
          })}
          
          <div className="w-4 flex-shrink-0" />
        </div>
      </div>

      {/* --- Lightbox / Fullscreen Gallery --- */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 rounded-full bg-muted/50 hover:bg-muted text-foreground transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => navigateLightbox("prev", e)}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-muted/50 hover:bg-muted text-foreground transition-colors z-50 hidden md:block"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => navigateLightbox("next", e)}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-muted/50 hover:bg-muted text-foreground transition-colors z-50 hidden md:block"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl max-h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={screenshots[selectedImageIndex].src}
                  alt="Full screen view"
                  className="max-h-[85vh] w-auto object-contain"
                />
              </div>
              
              <div className="mt-4 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium">
                {selectedImageIndex + 1} / {screenshots.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}