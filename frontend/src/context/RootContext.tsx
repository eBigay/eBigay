import React, { createContext, useMemo } from "react";
import useModal from "../hooks/useModal";
import { IItem } from "../interfaces/IItem.interface";

const INITIAL_STATE: IItem = {
  id: "",
  qty: 0,
  itemName: "",
  mainImg: "",
  category: "",
  location: "",
  createdAt: 0,
  description: "",
  imgs: [],
  createdBy: {
    id: "",
    email: "",
    name: "",
    imgUrl: "",
    isAdmin: false,
  },
};

export type RootContextType = {
  modal: boolean;
  handleModal: (content?: IItem) => void;
  modalContent: IItem;
};

export const rootContext = createContext<RootContextType>(
  {} as RootContextType
);
const RootContextProvider = ({
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
    <rootContext.Provider value={providerValue}>
      {children}
    </rootContext.Provider>
  );
};

export default RootContextProvider;
