import { DependencyList, useEffect } from "react";

const useOverflow = (isOpen: boolean, deps?: DependencyList) => {
  useEffect(() => {
    /* eslint-disable-next-line */
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [deps, isOpen]);
};

export default useOverflow;
