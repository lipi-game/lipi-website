import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 300);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Screenshot Carousel */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <Button
            variant="secondary"
            size="icon"
            className={cn(
              "absolute left-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full shadow-lg",
              "opacity-0 group-hover:opacity-100 transition-opacity",
              !canScrollLeft && "hidden"
            )}
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full shadow-lg",
              "opacity-0 group-hover:opacity-100 transition-opacity",
              !canScrollRight && "hidden"
            )}
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px] snap-center"
              >
                <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-muted">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
