import { cn } from "@/lib/utils";
import type { GameShowcase } from "../types/gameDetail";

interface GameDetailShowcaseProps {
  showcases: GameShowcase[];
}

export function GameDetailShowcase({ showcases }: GameDetailShowcaseProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        {showcases.map((showcase, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={index}
              className={cn(
                "flex flex-col gap-6 sm:gap-8 items-center",
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              )}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-muted shadow-lg">
                  <img
                    src={showcase.image}
                    alt={showcase.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  {showcase.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
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
