import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash anchor, let browser handle it
    if (hash) return;

    // Scroll to top smoothly on route change
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, hash]);
}
