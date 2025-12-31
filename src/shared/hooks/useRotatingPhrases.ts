import { useState, useEffect, useMemo } from "react";

interface UseRotatingPhrasesOptions {
  phrases: string[];
  intervalMs?: number;
}

export function useRotatingPhrases({
  phrases,
  intervalMs = 2800,
}: UseRotatingPhrasesOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (phrases.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [phrases.length, intervalMs]);

  return {
    currentPhrase: phrases[currentIndex],
    currentIndex,
    prefersReducedMotion,
  };
}
