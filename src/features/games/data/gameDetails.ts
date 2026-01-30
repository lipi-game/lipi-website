import { assetUrl } from "@/config/assets";
import type { GameDetail } from "../types/gameDetail";

export const gameDetails: Record<string, GameDetail> = {
  "lipi-epics": {
    id: "lipi-epics",
    title: "LIPI EPICS",
    tagline: "Embark on an epic journey through Indian mythology with immersive word games and storytelling adventures.",
    heroImage: assetUrl("images/games/lipi-epics.webp"),
    heroImageAlt: "LIPI EPICS hero banner",
    gameIcon: assetUrl("images/logo/lipi-logo.webp"),
    appStoreUrl: "https://apps.apple.com/us/app/lipi-epics-wordgames/id6736470264",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lipi&pcampaignid=web_share",
    overviewTitle: "The Game",
    overviewDescription: "LIPI EPICS brings ancient Indian epics to life through engaging word puzzles and interactive storytelling. Challenge your vocabulary while exploring the rich tapestry of mythology, from the Ramayana to the Mahabharata.",
    screenshots: [
      { src: assetUrl("images/games/lipi-epics.webp"), alt: "Gameplay screenshot 1" },
      { src: assetUrl("images/games-popup/lipi-epics-popup.webp"), alt: "Gameplay screenshot 2" },
      { src: assetUrl("images/games/lipi-epics.webp"), alt: "Gameplay screenshot 3" },
      { src: assetUrl("images/games-popup/lipi-epics-popup.webp"), alt: "Gameplay screenshot 4" },
    ],
    featuresTitle: "Discover Your Epic Journey",
    features: [
      {
        icon: "📚",
        title: "Learn Through Stories",
        description: "Immerse yourself in ancient tales while expanding your vocabulary with every level.",
      },
      {
        icon: "🧩",
        title: "Challenging Puzzles",
        description: "Test your word skills with progressively challenging puzzles inspired by epic narratives.",
      },
      {
        icon: "🏆",
        title: "Earn Achievements",
        description: "Collect rewards and unlock new chapters as you master each legendary story.",
      },
    ],
    showcases: [
      {
        image: assetUrl("images/games/lipi-epics.webp"),
        imageAlt: "Epic word battles",
        title: "Enter the Arena of Words",
        description: "Challenge yourself in epic word battles that test your vocabulary and quick thinking. Each level brings new challenges inspired by legendary tales.",
      },
      {
        image: assetUrl("images/games-popup/lipi-epics-popup.webp"),
        imageAlt: "Story mode gameplay",
        title: "Uncover Ancient Secrets",
        description: "Journey through beautifully illustrated chapters that reveal the wisdom of ancient India. Every word you solve unlocks more of the story.",
      },
    ],
    ctaTitle: "Begin Your Epic Adventure",
    ctaSubtitle: "Download now and start your journey through legendary tales",
    accentColor: "hsl(25, 95%, 53%)",
  },
  "lipi-kids": {
    id: "lipi-kids",
    title: "LIPI KIDS",
    tagline: "A fun and educational word game designed specially for young minds to learn and grow.",
    heroImage: assetUrl("images/games/lipi-kids.webp"),
    heroImageAlt: "LIPI KIDS hero banner",
    gameIcon: assetUrl("images/logo/lipi-logo.webp"),
    appStoreUrl: "https://apps.apple.com/us/app/lipi-kids/id6749450279",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lipi.kids&pcampaignid=web_share",
    overviewTitle: "The Game",
    overviewDescription: "LIPI KIDS makes learning fun with colorful word puzzles designed for children. Watch your little ones develop language skills while having a blast with friendly characters and exciting challenges.",
    screenshots: [
      { src: assetUrl("images/games/lipi-kids.webp"), alt: "Kids gameplay 1" },
      { src: assetUrl("images/games-popup/lipi-kids-popup.webp"), alt: "Kids gameplay 2" },
      { src: assetUrl("images/games/lipi-kids.webp"), alt: "Kids gameplay 3" },
      { src: assetUrl("images/games-popup/lipi-kids-popup.webp"), alt: "Kids gameplay 4" },
    ],
    featuresTitle: "Learn While Having Fun",
    features: [
      {
        icon: "🎨",
        title: "Colorful Adventures",
        description: "Vibrant graphics and friendly characters make learning an exciting adventure for kids.",
      },
      {
        icon: "📖",
        title: "Build Vocabulary",
        description: "Age-appropriate word challenges help children expand their vocabulary naturally.",
      },
      {
        icon: "⭐",
        title: "Rewards & Progress",
        description: "Fun rewards and progress tracking keep kids motivated to learn more every day.",
      },
    ],
    showcases: [
      {
        image: assetUrl("images/games/lipi-kids.webp"),
        imageAlt: "Fun learning environment",
        title: "A World of Wonder",
        description: "Explore a magical world filled with letters, words, and friendly guides. Perfect for early learners taking their first steps into language.",
      },
      {
        image: assetUrl("images/games-popup/lipi-kids-popup.webp"),
        imageAlt: "Interactive puzzles",
        title: "Play and Learn Together",
        description: "Interactive puzzles designed by educators ensure your child learns effectively while having the time of their life.",
      },
    ],
    ctaTitle: "Start Learning Today",
    ctaSubtitle: "Download now and watch your child's vocabulary grow",
    accentColor: "hsl(280, 85%, 60%)",
  },
};

export function getGameDetail(id: string): GameDetail | undefined {
  return gameDetails[id];
}
