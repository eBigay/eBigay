import React, { createContext, useState, useMemo } from "react";
import { useModal } from "../hooks/useModal";
import { IItem } from "../interfaces/IItem.interface";

export type RootContextType = {
  modal: boolean;
  handleModal: any;
  modalContent: IItem | boolean;
};

const initialState: RootContextType = {
  modal: false,
  handleModal: () => {},
  modalContent: {
    _id: "",
    qty: 0,
    itemName: "",
    mainImg: "",
    category: "",
    location: "",
    createdAt: 0,
    description: "",
    imgs: [],
    createdBy: {
      _id: "",
      fullname: "",
      imgUrl: "",
    },
  },
};

export const rootContext = createContext<RootContextType>(initialState);
const RootContextProvider = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) => {
  const { modal, handleModal, modalContent } = useModal();

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
