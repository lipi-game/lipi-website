import type { Game } from "../types/game";
import { getAllGames } from "./GamesRepository";

export interface GameCardData extends Game {
  isPlayable: boolean;
  ctaLabel: string;
}

export function getGameCardsData(): GameCardData[] {
  const games = getAllGames();

  return games.map((game) => ({
    ...game,
    isPlayable: game.ctaType === "play",
    ctaLabel: game.ctaType === "play" ? "Play" : "Coming Soon",
  }));
}
