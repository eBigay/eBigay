import { DependencyList, useEffect } from "react";

const useOverflow = (isOpen: boolean, deps?: DependencyList) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, deps);
};

export default useOverflow;
