/**
 * Carousel helper utilities for the experts section.
 */
export class ExpertsManager {
  /**
   * Clamps a value between min and max.
   */
  static clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }

  /**
   * Gets the next index, wrapping around if needed.
   */
  static getNextIndex(current: number, total: number): number {
    return (current + 1) % total;
  }

  /**
   * Gets the previous index, wrapping around if needed.
   */
  static getPrevIndex(current: number, total: number): number {
    return (current - 1 + total) % total;
  }

  /**
   * Gets a safe index within bounds.
   */
  static getSafeIndex(index: number, total: number): number {
    if (total === 0) return 0;
    return ((index % total) + total) % total;
  }

  /**
   * Calculates visible cards based on viewport width.
   */
  static getVisibleCards(width: number): number {
    if (width >= 1024) return 3; // Desktop
    if (width >= 768) return 2;  // Tablet
    return 1;                     // Mobile
  }
}
