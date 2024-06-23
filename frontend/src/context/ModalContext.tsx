import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";
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
  condition: "",
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
  handleModal: (content?: any) => void;
  modalContent: any;
  modalType: string;
  setModalType: Dispatch<SetStateAction<string>>;
};

export const modalContext = createContext<ModalContextType>(
  {} as ModalContextType
);
const ModalContextProvider = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) => {
  const [modalType, setModalType] = useState("item");
  const { modal, handleModal, modalContent } = useModal(INITIAL_STATE);

  const providerValue = useMemo(
    () => ({
      modal,
      handleModal,
      modalContent,
      modalType,
      setModalType,
    }),
    [modal, handleModal, modalContent, modalType, setModalType]
  );
  return (
    <modalContext.Provider value={providerValue}>
      {children}
    </modalContext.Provider>
  );
};

export default ModalContextProvider;
