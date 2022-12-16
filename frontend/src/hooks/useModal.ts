import { useState } from "react";

const useModal = <T>(initialContent: T) => {
  const [modal, setModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<T>(initialContent);
  const handleModal = (content?: T) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };
  return { modal, handleModal, modalContent };
};
export default useModal;
