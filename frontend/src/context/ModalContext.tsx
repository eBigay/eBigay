import { createContext, useMemo } from "react";
import useModal from "../hooks/useModal";
import { IItem } from "../interfaces/IItem.interface";

const INITIAL_STATE: IItem = {
  _id: "",
  qty: 0,
  itemName: "",
  category: "",
  location: "",
  createdAt: 0,
  description: "",
  images: [],
  createdBy: {
    _id: "",
    phoneNumber: "0",
    email: "",
    username: "",
    imageUrl: "",
  },
};

export type ModalContextType = {
  modal: boolean;
  handleModal: (content?: IItem) => void;
  modalContent: IItem;
};

export const modalContext = createContext<ModalContextType>(
  {} as ModalContextType
);
const ModalContextProvider = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) => {
  const { modal, handleModal, modalContent } = useModal(INITIAL_STATE);

  const providerValue = useMemo(
    () => ({
      modal,
      handleModal,
      modalContent,
    }),
    [modal, handleModal, modalContent]
  );
  return (
    <modalContext.Provider value={providerValue}>
      {children}
    </modalContext.Provider>
  );
};

export default ModalContextProvider;
