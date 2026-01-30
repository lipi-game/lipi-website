import { cn } from "@/lib/utils";

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
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Game Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-background">
              <img
                src={gameIcon}
                alt="Game icon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground mb-10">
              {subtitle}
            </p>
          )}

          {/* Download Buttons */}
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-14 sm:h-16"
              />
            </a>
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-[60px] sm:h-[68px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
