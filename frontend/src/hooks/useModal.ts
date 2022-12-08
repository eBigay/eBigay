import { useState } from "react";
import { IItem } from "../interfaces/IItem.interface";

const useModal = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<IItem>({
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
      fullName: "",
      imgUrl: "",
    },
  });

  const handleModal = (content?: IItem) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, modalContent };
};

export default useModal;
