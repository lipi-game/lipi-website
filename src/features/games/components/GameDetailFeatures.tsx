import type { GameFeature } from "../types/gameDetail";

interface GameDetailFeaturesProps {
  title: string;
  features: GameFeature[];
}

export function GameDetailFeatures({ title, features }: GameDetailFeaturesProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/40">
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-10 sm:mb-12">
          {title}
        </h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border transition-all duration-200 hover:shadow-lg hover:border-primary/20"
            >
              {/* Icon */}
              <div className="text-4xl sm:text-5xl mb-4">{feature.icon}</div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
