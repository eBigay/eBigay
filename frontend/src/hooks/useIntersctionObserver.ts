import { useEffect, RefObject } from "react";
export default function useIntersectionObserver({
  enabled = true,
  onIntersect,
  root,
  dependencies,
  rootMargin = "0px",
  target,
  threshold = 0.1,
}: {
  enabled?: boolean;
  onIntersect: () => void;
  root?: RefObject<Element>;
  dependencies: boolean[];
  rootMargin?: string;
  target: RefObject<Element>;
  threshold?: number;
}): void {
  useEffect(() => {
    if (!enabled) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root && root.current,
        rootMargin,
        threshold,
      }
    );
    const el = target && target.current;
    if (!el) {
      return;
    }
    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [enabled, ...dependencies, target.current]);
}
