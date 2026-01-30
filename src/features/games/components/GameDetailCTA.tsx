interface GameDetailCTAProps {
  title: string;
  subtitle?: string;
  gameIcon: string;
  appStoreUrl: string;
  playStoreUrl: string;
}

export function GameDetailCTA({
  title,
  subtitle,
  gameIcon,
  appStoreUrl,
  playStoreUrl,
}: GameDetailCTAProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/40">
      <div className="px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto text-center">
        {/* Game Icon */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-background">
            <img
              src={gameIcon}
              alt="Game icon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground text-sm sm:text-base mb-8 sm:mb-10">
            {subtitle}
          </p>
        )}

        {/* Download Buttons */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-12 sm:h-14"
            />
          </a>
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="h-[52px] sm:h-[60px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
