import ScreenOverlay from "./layout/ScreenOverlay";
import useOverflow from "../hooks/useOverflow";
import {
  PopUp,
  CancelIcon,
} from "../assets/styles/components/ItemDetails.styled";
import useModalContext from "../hooks/useModalContext";
import { ReactNode } from "react";

interface IModal {
  children: ReactNode;
}

const Modal = ({ children }: IModal) => {
  const { modal, handleModal } = useModalContext();

  useOverflow(modal);

  const toggleItemDetailsOpen = () => {
    handleModal();
  };

  return (
    <>
      <ScreenOverlay
        styleMode="darken"
        handleClick={toggleItemDetailsOpen}
        isItemDetailsOpen={modal}
      />
      <PopUp isItemDetailsOpen={modal}>
        {children}
        <CancelIcon onClick={toggleItemDetailsOpen} />
      </PopUp>
    </>
  );
};

export default Modal;
