import type { GameDetail } from "../types/gameDetail";

// Placeholder images for development
const placeholders = {
  hero: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1920&q=80",
  heroKids: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80",
  icon: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&q=80",
  screenshots: [
    "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&q=80",
    "https://images.unsplash.com/photo-1493711662062-fa541f7f897a?w=400&q=80",
    "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&q=80",
    "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&q=80",
  ],
  showcase1: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
  showcase2: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
};

export const gameDetails: Record<string, GameDetail> = {
  "lipi-epics": {
    id: "lipi-epics",
    title: "LIPI EPICS",
    tagline: "Embark on an epic journey through Indian mythology with immersive word games.",
    heroImage: placeholders.hero,
    heroImageAlt: "LIPI EPICS hero banner",
    gameIcon: placeholders.icon,
    appStoreUrl: "https://apps.apple.com/us/app/lipi-epics-wordgames/id6736470264",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lipi&pcampaignid=web_share",
    overviewTitle: "The Game",
    overviewDescription: "LIPI EPICS brings ancient Indian epics to life through engaging word puzzles and interactive storytelling. Challenge your vocabulary while exploring mythology.",
    screenshots: [
      { src: placeholders.screenshots[0], alt: "Gameplay screenshot 1" },
      { src: placeholders.screenshots[1], alt: "Gameplay screenshot 2" },
      { src: placeholders.screenshots[2], alt: "Gameplay screenshot 3" },
      { src: placeholders.screenshots[3], alt: "Gameplay screenshot 4" },
    ],
    featuresTitle: "Discover Your Journey",
    features: [
      {
        icon: "📚",
        title: "Learn Through Stories",
        description: "Immerse yourself in ancient tales while expanding your vocabulary.",
      },
      {
        icon: "🧩",
        title: "Challenging Puzzles",
        description: "Test your word skills with progressively challenging puzzles.",
      },
      {
        icon: "🏆",
        title: "Earn Achievements",
        description: "Collect rewards and unlock new chapters as you progress.",
      },
    ],
    showcases: [
      {
        image: placeholders.showcase1,
        imageAlt: "Epic word battles",
        title: "Enter the Arena",
        description: "Challenge yourself in epic word battles that test your vocabulary and quick thinking.",
      },
      {
        image: placeholders.showcase2,
        imageAlt: "Story mode gameplay",
        title: "Uncover Secrets",
        description: "Journey through beautifully illustrated chapters that reveal ancient wisdom.",
      },
    ],
    ctaTitle: "Start Your Adventure",
    ctaSubtitle: "Download now and begin your journey",
  },
  "lipi-kids": {
    id: "lipi-kids",
    title: "LIPI KIDS",
    tagline: "A fun and educational word game designed specially for young minds.",
    heroImage: placeholders.heroKids,
    heroImageAlt: "LIPI KIDS hero banner",
    gameIcon: placeholders.icon,
    appStoreUrl: "https://apps.apple.com/us/app/lipi-kids/id6749450279",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lipi.kids&pcampaignid=web_share",
    overviewTitle: "The Game",
    overviewDescription: "LIPI KIDS makes learning fun with colorful word puzzles designed for children. Watch your little ones develop language skills while having a blast.",
    screenshots: [
      { src: placeholders.screenshots[0], alt: "Kids gameplay 1" },
      { src: placeholders.screenshots[1], alt: "Kids gameplay 2" },
      { src: placeholders.screenshots[2], alt: "Kids gameplay 3" },
      { src: placeholders.screenshots[3], alt: "Kids gameplay 4" },
    ],
    featuresTitle: "Learn While Playing",
    features: [
      {
        icon: "🎨",
        title: "Colorful Adventures",
        description: "Vibrant graphics and friendly characters make learning exciting.",
      },
      {
        icon: "📖",
        title: "Build Vocabulary",
        description: "Age-appropriate challenges help children expand vocabulary naturally.",
      },
      {
        icon: "⭐",
        title: "Rewards & Progress",
        description: "Fun rewards keep kids motivated to learn more every day.",
      },
    ],
    showcases: [
      {
        image: placeholders.showcase1,
        imageAlt: "Fun learning environment",
        title: "A World of Wonder",
        description: "Explore a magical world filled with letters, words, and friendly guides.",
      },
      {
        image: placeholders.showcase2,
        imageAlt: "Interactive puzzles",
        title: "Play Together",
        description: "Interactive puzzles designed by educators for effective learning.",
      },
    ],
    ctaTitle: "Start Learning Today",
    ctaSubtitle: "Download now and watch vocabulary grow",
  },
};

export function getGameDetail(id: string): GameDetail | undefined {
  return gameDetails[id];
}
