import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GameDetailOverviewProps {
  title: string;
  description: string;
  screenshots: Array<{
    src: string;
    alt: string;
  }>;
}

export function GameDetailOverview({
  title,
  description,
  screenshots,
}: GameDetailOverviewProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 350);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Screenshot Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10",
              "w-10 h-10 sm:w-12 sm:h-12 rounded-full",
              "bg-background/90 backdrop-blur border border-border shadow-lg",
              "flex items-center justify-center",
              "transition-all hover:bg-accent",
              "-translate-x-1/2",
              !canScrollLeft && "opacity-0 pointer-events-none"
            )}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => scroll("right")}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10",
              "w-10 h-10 sm:w-12 sm:h-12 rounded-full",
              "bg-background/90 backdrop-blur border border-border shadow-lg",
              "flex items-center justify-center",
              "transition-all hover:bg-accent",
              "translate-x-1/2",
              !canScrollRight && "opacity-0 pointer-events-none"
            )}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] snap-center first:ml-0"
              >
                <div className="aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden bg-muted shadow-lg">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
