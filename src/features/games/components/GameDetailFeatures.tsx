import { cn } from "@/lib/utils";
import type { GameFeature } from "../types/gameDetail";

interface GameDetailFeaturesProps {
  title: string;
  features: GameFeature[];
}

export function GameDetailFeatures({ title, features }: GameDetailFeaturesProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center mb-12 md:mb-16">
          {title}
        </h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-8 rounded-3xl bg-card border border-border",
                "transition-all duration-300 hover:shadow-2xl hover:-translate-y-2",
                "hover:border-primary/30"
              )}
            >
              {/* Icon */}
              <div className="text-5xl mb-6">{feature.icon}</div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
