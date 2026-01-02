import type { InstallGame } from "../types/installGame";
import gamesData from "../data/installGames.json";

export class InstallGamesRepository {
  getAll(): InstallGame[] {
    return gamesData as InstallGame[];
  }
}
