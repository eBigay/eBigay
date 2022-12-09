import { DependencyList, useEffect } from "react";

export function useOverflow(isOpen: boolean, deps?: DependencyList) {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, deps);
}
