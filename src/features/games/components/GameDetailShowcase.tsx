import { cn } from "@/lib/utils";
import type { GameShowcase } from "../types/gameDetail";

interface GameDetailShowcaseProps {
  showcases: GameShowcase[];
}

export function GameDetailShowcase({ showcases }: GameDetailShowcaseProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {showcases.map((showcase, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={index}
              className={cn(
                "flex flex-col gap-8 md:gap-12 items-center mb-16 md:mb-24 last:mb-0",
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              )}
            >
              {/* Image */}
              <div className="flex-1 w-full max-w-xl lg:max-w-none">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                  <img
                    src={showcase.image}
                    alt={showcase.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  {showcase.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {showcase.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
