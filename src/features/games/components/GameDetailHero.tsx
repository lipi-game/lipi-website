interface GameDetailHeroProps {
  title: string;
  tagline: string;
  heroImage: string;
  heroImageAlt: string;
  appStoreUrl: string;
  playStoreUrl: string;
}

export function GameDetailHero({
  title,
  tagline,
  heroImage,
  heroImageAlt,
  appStoreUrl,
  playStoreUrl,
}: GameDetailHeroProps) {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-xl mx-auto mb-8 sm:mb-10 px-4">
            {tagline}
          </p>

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
                className="h-10 sm:h-12 md:h-14"
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
                className="h-[44px] sm:h-[52px] md:h-[60px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
