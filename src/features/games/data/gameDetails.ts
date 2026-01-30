import type { GameDetail } from "../types/gameDetail";

// High-quality placeholder images
const placeholders = {
  hero: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1920&q=80",
  heroKids: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80",
  icon: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&q=80",
  iconKids: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=200&q=80",
  screenshots: [
    "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&q=80",
    "https://images.unsplash.com/photo-1493711662062-fa541f7f897a?w=600&q=80",
    "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80",
    "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&q=80",
  ],
  showcase1: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80",
  showcase2: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80",
  mockup: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
};

export const gameDetails: Record<string, GameDetail> = {
  "lipi-epics": {
    id: "lipi-epics",
    title: "LIPI EPICS",
    tagline: "Master words. Conquer mythology. Become a legend.",
    heroImage: placeholders.hero,
    heroImageAlt: "Epic battle scene with mythological characters",
    gameIcon: placeholders.icon,
    appStoreUrl: "https://apps.apple.com/us/app/lipi-epics-wordgames/id6736470264",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lipi&pcampaignid=web_share",
    overviewTitle: "Rule the Word Arena",
    overviewDescription: "LIPI EPICS brings ancient Indian epics to life through engaging word puzzles and interactive storytelling. Challenge your vocabulary while exploring mythology.",
    screenshots: [
      { src: placeholders.screenshots[0], alt: "Epic word battle gameplay" },
      { src: placeholders.screenshots[1], alt: "Character selection screen" },
      { src: placeholders.screenshots[2], alt: "Story mode chapter" },
      { src: placeholders.screenshots[3], alt: "Achievements unlocked" },
    ],
    featuresTitle: "Unleash Your Power",
    features: [
      {
        icon: "⚔️",
        title: "Train Your Skills!",
        description: "Master ancient words and unlock powerful abilities in epic word battles.",
      },
      {
        icon: "🏰",
        title: "Build Your Kingdom!",
        description: "Collect legendary heroes and build the ultimate word-wielding army.",
      },
      {
        icon: "🎭",
        title: "Live the Legends!",
        description: "Experience mythology like never before through immersive storytelling.",
      },
    ],
    showcases: [
      {
        image: placeholders.showcase1,
        imageAlt: "Epic arena battle with word warriors",
        title: "Enter the Arena",
        description: "Face off against legendary foes in heart-pounding word battles. Every letter counts, every word strikes!",
      },
      {
        image: placeholders.showcase2,
        imageAlt: "Magical spells and power-ups",
        title: "Cast Powerful Spells",
        description: "Combine words to unleash devastating combos and magical abilities that turn the tide of battle.",
      },
    ],
    ctaTitle: "Download Now!",
    ctaSubtitle: "Join millions of word warriors worldwide",
    metaTitle: "Rise Through the Ranks",
    metaDescription: "Compete on global leaderboards, team up with friends, and complete daily challenges for exclusive rewards.",
  },
  "lipi-kids": {
    id: "lipi-kids",
    title: "LIPI KIDS",
    tagline: "Where learning meets play. Words come alive!",
    heroImage: placeholders.heroKids,
    heroImageAlt: "Colorful kids learning environment with friendly characters",
    gameIcon: placeholders.iconKids,
    appStoreUrl: "https://apps.apple.com/us/app/lipi-kids/id6749450279",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lipi.kids&pcampaignid=web_share",
    overviewTitle: "Adventure Awaits",
    overviewDescription: "LIPI KIDS makes learning fun with colorful word puzzles designed for children. Watch your little ones develop language skills while having a blast!",
    screenshots: [
      { src: placeholders.screenshots[0], alt: "Fun word puzzle for kids" },
      { src: placeholders.screenshots[1], alt: "Colorful character world" },
      { src: placeholders.screenshots[2], alt: "Learning achievements" },
      { src: placeholders.screenshots[3], alt: "Parent dashboard" },
    ],
    featuresTitle: "Learn Through Play",
    features: [
      {
        icon: "🎨",
        title: "Colorful Adventures!",
        description: "Vibrant worlds and adorable characters make every lesson an exciting journey.",
      },
      {
        icon: "🌟",
        title: "Grow Every Day!",
        description: "Age-appropriate challenges that adapt to your child's learning pace.",
      },
      {
        icon: "🎁",
        title: "Earn Cool Rewards!",
        description: "Stickers, badges, and surprises keep kids motivated and eager to learn more.",
      },
    ],
    showcases: [
      {
        image: placeholders.showcase1,
        imageAlt: "Magical learning world for kids",
        title: "A World of Wonder",
        description: "Explore enchanted lands where every word unlocks new surprises and friendly helpers guide the way.",
      },
      {
        image: placeholders.showcase2,
        imageAlt: "Interactive puzzles for children",
        title: "Play Together",
        description: "Games designed by educators that make learning feel like pure fun. Perfect for curious minds!",
      },
    ],
    ctaTitle: "Start Learning Today!",
    ctaSubtitle: "Trusted by parents. Loved by kids.",
    metaTitle: "Track Their Progress",
    metaDescription: "Parent-friendly dashboard to monitor learning milestones and celebrate every achievement together.",
  },
};

export function getGameDetail(id: string): GameDetail | undefined {
  return gameDetails[id];
}
