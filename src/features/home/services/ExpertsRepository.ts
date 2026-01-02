import type { Expert } from "../types/expert";
import expertsData from "../data/experts.json";

/**
 * Repository for accessing expert data.
 * 
 * NOTE: Place your poster images and video files in /public/experts/
 * e.g., /public/experts/expert-1.jpg, /public/experts/expert-1.mp4
 */
export class ExpertsRepository {
  static getAll(): Expert[] {
    return expertsData as Expert[];
  }

  static getById(id: string): Expert | undefined {
    return this.getAll().find((expert) => expert.id === id);
  }

  static getCount(): number {
    return this.getAll().length;
  }
}
