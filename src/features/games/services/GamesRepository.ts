import type { Game } from "../types/game";

// TODO: Place game images in src/assets/games/
// - lipi-epics.png
// - lipi-kids.png
// - lipi-brain-booster.png
// - lipi-word-cruise.png

const games: Game[] = [
  {
    id: "lipi-epics",
    title: "LIPI EPICS",
    description:
      "An interactive learning experience that brings Indian epics to life through story-based games and structured play.",
    imageUrl: "/Assets/Images/games/lipi-epics.png",
    imageAlt: "LIPI EPICS app preview",
    ctaType: "play",
    route: "/games/lipi-epics",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lipi.epics",
    appStoreUrl: "https://apps.apple.com/app/lipi-epics/id123456789",
  },
  {
    id: "lipi-kids",
    title: "LIPI - KIDS",
    description:
      "A safe, playful learning app where kids explore languages, stories, and games in multiple languages.",
    imageUrl: "/Assets/Images/games/lipi-kids.png",
    imageAlt: "LIPI KIDS app preview",
    ctaType: "play",
    route: "/games/lipi-kids",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lipi.kids",
    appStoreUrl: "https://apps.apple.com/app/lipi-kids/id123456790",
  },
  {
    id: "lipi-brain-booster",
    title: "LIPI - BRAIN BOOSTER",
    description:
      "A sharp-paced word puzzle game designed to boost memory, focus, and problem-solving skills through daily challenges.",
    imageUrl: "/Assets/Images/games/lipi-brain-booster.png",
    imageAlt: "LIPI BRAIN BOOSTER app preview",
    ctaType: "coming-soon",
  },
  {
    id: "lipi-word-cruise",
    title: "LIPI - WORD CRUISE",
    description:
      "A fun word-building game that helps improve vocabulary and pattern recognition through engaging levels.",
    imageUrl: "/Assets/Images/games/lipi-wordcruise.png",
    imageAlt: "LIPI WORD CRUISE app preview",
    ctaType: "coming-soon",
  },
];

export function getAllGames(): Game[] {
  return games;
}

export function getGameById(id: string): Game | undefined {
  return games.find((game) => game.id === id);
}
