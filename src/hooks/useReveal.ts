import { useEffect } from "react";

/**
 * Adds the `in-view` class to any element with the `reveal` class
 * once it scrolls into the viewport. Runs once on mount.
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      for (const el of els) el.classList.add("in-view");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, []);
}
