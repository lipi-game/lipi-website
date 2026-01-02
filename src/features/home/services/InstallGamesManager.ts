import { InstallGamesRepository } from "./InstallGamesRepository";
import type { InstallGame } from "../types/installGame";

const repository = new InstallGamesRepository();

export class InstallGamesManager {
  static getGames(): InstallGame[] {
    return repository.getAll();
  }

  static getDefaultGame(): InstallGame | undefined {
    const games = repository.getAll();
    return games[0];
  }

  static getGameById(id: string): InstallGame | undefined {
    const games = repository.getAll();
    return games.find((game) => game.id === id);
  }
}
