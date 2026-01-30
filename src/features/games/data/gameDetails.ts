import { Trophy, GraduationCap, Target, Brain, Baby, Languages, Puzzle } from "lucide-react";
import type { GameDetail } from "../types/gameDetail";

const placeholders = {
  hero: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1920&q=80",
  heroKids: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80",
  icon: "/assets/images/games/lipi-epics/lipi-epics-logo.webp",
  iconKids: "/assets/images/games/lipi-kids/lipi-kids-logo.webp",
  screenshots: [
    "/assets/images/games/lipi-epics/lg-1.webp",
    "/assets/images/games/lipi-epics/lg-2.webp",
    "/assets/images/games/lipi-epics/lg-3.webp",
    "/assets/images/games/lipi-epics/lg-4.webp",
    "/assets/images/games/lipi-epics/lg-5.webp",
    "/assets/images/games/lipi-epics/lg-6.webp",
    "/assets/images/games/lipi-epics/lg-7.webp",
    "/assets/images/games/lipi-epics/lg-8.webp",
    "/assets/images/games/lipi-kids/lk-1.webp",
    "/assets/images/games/lipi-kids/lk-2.webp",
    "/assets/images/games/lipi-kids/lk-3.webp",
    "/assets/images/games/lipi-kids/lk-4.webp",
    "/assets/images/games/lipi-kids/lk-5.webp",
    "/assets/images/games/lipi-kids/lk-6.webp",
    "/assets/images/games/lipi-kids/lk-7.webp",
    "/assets/images/games/lipi-kids/lk-8.webp",
  ]
};

export const gameDetails: Record<string, GameDetail> = {
  "lipi-epics": {
    id: "lipi-epics",
    title: "LIPI EPICS",
    tagline: "Learn Mahabharata & Ramayana the Smart Way.",
    heroImage: placeholders.hero,
    heroImageAlt: "Cinematic digital art of Mahabharata and Ramayana characters",
    gameIcon: placeholders.icon,
    appStoreUrl: "https://apps.apple.com/us/app/lipi-epics-wordgames/id6736470264",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lipi&pcampaignid=web_share",
    overviewTitle: "Ancient Stories. Modern Minds.",
    overviewDescription: "India’s most complete learning app for the Mahabharata and Ramayana. Whether you are a student, parent, or competitive exam aspirant, explore Indian heritage through immersive storytelling, AI-generated videos, and structured quizzes. Master the epics in Telugu, English, and Hindi.",
    screenshots: [
      { src: placeholders.screenshots[0], alt: "Epic word battle gameplay" },
      { src: placeholders.screenshots[1], alt: "Character selection screen" },
      { src: placeholders.screenshots[2], alt: "Story mode chapter" },
      { src: placeholders.screenshots[3], alt: "Achievements unlocked" },
      { src: placeholders.screenshots[4], alt: "Game displayed on mobile device" },
      { src: placeholders.screenshots[5], alt: "In-game power-ups" },
      { src: placeholders.screenshots[6], alt: "Multiplayer word challenge" },
      { src: placeholders.screenshots[7], alt: "Leaderboard and rankings" },
    ],
    featuresTitle: "Experience the Legend",
    features: [
      {
        icon: "📜",
        title: "Complete Learning Modules",
        description: "Read, listen, and master the epics at your own pace.",
      },
      {
        icon: "🧠",
        title: "Test Your Knowledge",
        description: "Reinforce learning with interactive quizzes, track your progress, and earn digital certificates upon completion.",
      },
      {
        icon: "🎬",
        title: "AI-Powered Immersion",
        description: "Watch the epics come alive with stunning AI-generated videos that make mythology visually unforgettable.",
      },
    ],
    ctaTitle: "Begin Your Journey",
    ctaSubtitle: "Join the wisdom of the Bhagavad Gita",
    metaTitle: "For All Ages",
    metaDescription: "Perfect for students, families, and spiritual seekers. Discover the timeless wisdom that shapes modern character.",
    stats: [
      { Icon: Trophy, label: "Leaderboards", value: "Compete Globally" },
      { Icon: GraduationCap, label: "Learning", value: "Earn Certificates" },
      { Icon: Target, label: "Challenges", value: "Daily Rewards" },
    ],
  },
  "lipi-kids": {
    id: "lipi-kids",
    title: "LIPI KIDS",
    tagline: "Turn screen time into meaningful learning time.",
    heroImage: placeholders.heroKids,
    heroImageAlt: "Vibrant learning world with friendly animals and letters",
    gameIcon: placeholders.iconKids,
    appStoreUrl: "https://apps.apple.com/us/app/lipi-kids/id6749450279",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lipi.kids&pcampaignid=web_share",
    overviewTitle: "Fun, Safe & Bilingual",
    overviewDescription: "Designed for ages 3–14, Lipi Kids helps children develop strong bilingual vocabulary in English and Telugu. With 20+ exciting categories like animals, colors, and vehicles, we transform early education into a playful adventure trusted by schools and parents alike.",
    screenshots: [
      { src: placeholders.screenshots[8], alt: "Fun word puzzle for kids", orientation: "landscape" },
      { src: placeholders.screenshots[9], alt: "Colorful character world", orientation: "landscape" },
      { src: placeholders.screenshots[10], alt: "Learning achievements", orientation: "landscape" },
      { src: placeholders.screenshots[11], alt: "Parent dashboard", orientation: "landscape" },
      { src: placeholders.screenshots[12], alt: "Interactive story mode", orientation: "landscape" },
      { src: placeholders.screenshots[13], alt: "Educational mini-games", orientation: "landscape" },
      { src: placeholders.screenshots[14], alt: "Reward system for kids", orientation: "landscape" },
      { src: placeholders.screenshots[15], alt: "Game displayed on tablet device", orientation: "landscape" },
    ],
    featuresTitle: "Why Kids Love It",
    features: [
      {
        icon: "🗣️",
        title: "Bilingual Mastery",
        description: "Learn English and Telugu side-by-side with crystal-clear audio pronunciation and easy transliteration.",
      },
      {
        icon: "🛡️",
        title: "100% Safe & Ad-Free",
        description: "A secure environment with no ads or distractions, featuring healthy screen-time controls for parents.",
      },
      {
        icon: "🏫",
        title: "Trusted by Schools",
        description: "Aligned with the Bala Ranjani curriculum and used by educators like Mana Badi for structured classroom learning.",
      },
    ],
    ctaTitle: "Start Learning Today!",
    ctaSubtitle: "Download now to grow one joyful word at a time",
    metaTitle: "Track Their Growth",
    metaDescription: "Get detailed progress reports on your child's memory, focus, and vocabulary development.",
    stats: [
      { Icon: Puzzle, label: "20+ Themes", value: "Fun Categories" },
      { Icon: Languages, label: "Bilingual", value: "English, Telugu and Hindi" },
      { Icon: Baby, label: "Ages 3-14", value: "Safe Learning" },
    ],
  },
};

export function getGameDetail(id: string): GameDetail | undefined {
  return gameDetails[id];
}
