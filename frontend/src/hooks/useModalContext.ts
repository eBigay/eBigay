import { useContext } from "react";
import { modalContext } from "../context/ModalContext";

const useModalContext = () => {
  const context = useContext(modalContext);

  if (!context) {
    throw Error("useModalContext must be used inside an ModalContextProvider");
  }

  return context;
};

export default useModalContext;
