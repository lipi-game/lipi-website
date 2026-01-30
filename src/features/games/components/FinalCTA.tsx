import { motion } from "framer-motion";

interface FinalCTAProps {
  title: string;
  subtitle?: string;
  gameIcon: string;
  appStoreUrl: string;
  playStoreUrl: string;
  mockupImage?: string;
}

export function FinalCTA({
  title,
  subtitle,
  gameIcon,
  appStoreUrl,
  playStoreUrl,
  mockupImage,
}: FinalCTAProps) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-foreground overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-game-orange/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-game-purple/20 rounded-full blur-3xl" />

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Device Mockup */}
          <motion.div
            initial={{ x: -50, opacity: 0, rotate: -5 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-56 sm:w-64 lg:w-72">
                {/* Device shadow */}
                <div className="absolute inset-4 bg-background/20 rounded-[3rem] blur-2xl" />
                
                {/* Device frame */}
                <div className="relative bg-foreground/80 rounded-[2.5rem] p-2 shadow-2xl border-4 border-muted/20">
                  <div className="relative aspect-[9/19] rounded-[2rem] overflow-hidden bg-muted">
                    <img
                      src={mockupImage || gameIcon}
                      alt="Game on device"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/80 rounded-full" />
                </div>
              </div>

              {/* Floating game icon */}
              <motion.div
                className="absolute -right-4 -bottom-4 sm:-right-8 sm:-bottom-8"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-game-orange to-game-red rounded-2xl blur-lg opacity-60" />
                  <img
                    src={gameIcon}
                    alt="Game icon"
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-xl object-cover border-4 border-card"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-background mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg sm:text-xl text-background/70 mb-8 max-w-md mx-auto lg:mx-0">
                {subtitle}
              </p>
            )}

            {/* Download Buttons */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-4">
              <motion.a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center"
              >
                <div className="absolute -inset-1 bg-background/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="relative h-10 sm:h-12 w-auto object-contain"
                />
              </motion.a>
              <motion.a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center"
              >
                <div className="absolute -inset-1 bg-background/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="relative h-[58px] sm:h-[70px] w-auto object-contain"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
