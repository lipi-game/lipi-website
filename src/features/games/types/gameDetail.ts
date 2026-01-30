import { LucideIcon } from "lucide-react";

export interface GameFeature {
  icon: string;
  title: string;
  description: string;
}

export interface GameShowcase {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface GameDetail {
  id: string;
  title: string;
  tagline: string;
  heroImage: string;
  heroImageAlt: string;
  gameIcon: string;
  appStoreUrl: string;
  playStoreUrl: string;
  overviewTitle: string;
  overviewDescription: string;
  screenshots: Array<{
    src: string;
    alt: string;
    orientation?: "portrait" | "landscape";
  }>;
  featuresTitle: string;
  features: GameFeature[];
  ctaTitle: string;
  ctaSubtitle?: string;
  accentColor?: string;
  metaTitle?: string;
  metaDescription?: string;
  stats: Array<{
    Icon: LucideIcon; // or React.ElementType
    label: string;
    value: string;
  }>;
}
