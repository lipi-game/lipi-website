import { motion } from "framer-motion";
import type { GameShowcase } from "../types/gameDetail";

interface ImmersiveGameplayProps {
  showcase: GameShowcase;
  reversed?: boolean;
}

export function ImmersiveGameplay({ showcase, reversed = false }: ImmersiveGameplayProps) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className={`flex flex-col gap-8 lg:gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          {/* Image Side */}
          <motion.div
            initial={{ x: reversed ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="flex-1 w-full"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-game-orange/30 via-game-red/20 to-game-purple/30 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={showcase.image}
                  alt={showcase.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ x: reversed ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground mb-4 sm:mb-6 leading-tight">
              {showcase.title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              {showcase.description}
            </p>
            
            {/* Decorative element */}
            <motion.div
              className="mt-8 flex justify-center lg:justify-start gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-game-orange"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  style={{
                    opacity: 1 - i * 0.25,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
