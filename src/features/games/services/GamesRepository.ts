import { assetUrl } from "@/config/assets";
import type { Game } from "../types/game";

// TODO: Place game images in src/assets/games/
// - lipi-epics.webp
// - lipi-kids.webp
// - lipi-brain-booster.webp
// - lipi-word-cruise.webp

const games: Game[] = [
  {
    id: "lipi-epics",
    title: "LIPI EPICS",
    description:
      "An interactive learning experience that brings Indian epics to life through story-based games and structured play.",
    imageUrl: assetUrl("images/games/lipi-epics.webp"),
    imageAlt: "LIPI EPICS app preview",
    ctaType: "play",
    route: "/games/lipi-epics",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lipi&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/us/app/lipi-epics-wordgames/id6736470264",
    // TODO: Place modal image at /Assets/Images/games/lipi-epics-modal.webp (wider hero image for modal)
    modalImageUrl: assetUrl("images/games-popup/lipi-epics-popup.webp")
    
  },
  {
    id: "lipi-kids",
    title: "LIPI - KIDS",
    description:
      "An interactive learning experience that brings Indian epics to life through story-based games and structured play.",
    imageUrl: assetUrl("images/games/lipi-kids.webp"),
    imageAlt: "LIPI KIDS app preview",
    ctaType: "play",
    route: "/games/lipi-kids",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lipi.kids&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/us/app/lipi-kids/id6749450279",
    // TODO: Place modal image at /Assets/Images/games/lipi-kids-modal.webp (wider hero image for modal)
    modalImageUrl: assetUrl("images/games-popup/lipi-kids-popup.webp"),
  },
  {
    id: "lipi-brain-booster",
    title: "LIPI - BRAIN BOOSTER",
    description:
      "A sharp-paced word puzzle game designed to boost memory, focus, and problem-solving skills through daily challenges.",
    imageUrl: assetUrl("images/games/lipi-brain-booster.webp"),
    imageAlt: "LIPI BRAIN BOOSTER app preview",
    ctaType: "coming-soon",
  },
  {
    id: "lipi-word-cruise",
    title: "LIPI - WORD CRUISE",
    description:
      "A fun word-building game that helps improve vocabulary and pattern recognition through engaging levels.",
    imageUrl: assetUrl("images/games/lipi-wordcruise.webp"),
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
