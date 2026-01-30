import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GameDetailHeroProps {
  title: string;
  tagline: string;
  heroImage: string;
  heroImageAlt: string;
  appStoreUrl: string;
  playStoreUrl: string;
  accentColor?: string;
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
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto mb-10 drop-shadow-md">
          {tagline}
        </p>

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
              className="h-12 sm:h-14"
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
              className="h-[52px] sm:h-[60px]"
            />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
