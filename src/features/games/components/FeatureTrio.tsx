import { motion } from "framer-motion";
import type { GameFeature } from "../types/gameDetail";

interface FeatureTrioProps {
  title: string;
  features: GameFeature[];
  screenshots: Array<{ src: string; alt: string }>;
}

export function FeatureTrio({ title, features, screenshots }: FeatureTrioProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12 sm:mb-16"
        >
          <span className="bg-gradient-to-r from-game-orange via-game-red to-game-purple bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h2>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative bg-card rounded-3xl overflow-hidden shadow-lg border border-border transition-shadow group-hover:shadow-xl">
                {/* Screenshot */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={screenshots[index]?.src || "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=600&q=80"}
                    alt={screenshots[index]?.alt || feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Floating Icon */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-5xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
