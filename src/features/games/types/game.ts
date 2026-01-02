export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  ctaType: "play" | "coming-soon";
  route?: string;
}
