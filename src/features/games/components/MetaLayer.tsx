import { motion } from "framer-motion";
import { Trophy, Users, Zap, Star, Target, Crown } from "lucide-react";

interface MetaLayerProps {
  title: string;
  description: string;
}

const floatingItems = [
  { Icon: Trophy, color: "text-game-yellow", delay: 0, position: { top: "10%", left: "5%" } },
  { Icon: Star, color: "text-game-orange", delay: 0.5, position: { top: "20%", right: "8%" } },
  { Icon: Crown, color: "text-game-purple", delay: 1, position: { bottom: "25%", left: "10%" } },
  { Icon: Zap, color: "text-game-cyan", delay: 1.5, position: { bottom: "15%", right: "5%" } },
];

export function MetaLayer({ title, description }: MetaLayerProps) {
  const stats = [
    { Icon: Trophy, label: "Leaderboards", value: "Compete Globally" },
    { Icon: Users, label: "Multiplayer", value: "Play with Friends" },
    { Icon: Target, label: "Challenges", value: "Daily Rewards" },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
      {/* Floating Background Elements */}
      {floatingItems.map(({ Icon, color, delay, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} opacity-20`}
          style={position}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-12 h-12 sm:w-16 sm:h-16" />
        </motion.div>
      ))}

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8"
        >
          {stats.map(({ Icon, label, value }, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { type: "spring", bounce: 0.4 },
                },
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 } 
              }}
              className="relative group"
            >
              {/* Card glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-game-orange via-game-red to-game-purple rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
              
              <div className="relative bg-card border border-border rounded-3xl p-8 text-center shadow-lg">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-game-orange to-game-red mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                >
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-1">{label}</h3>
                <p className="text-muted-foreground">{value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
