import { useContext } from "react";
import styled from "styled-components";
import { rootContext } from "../context/RootContext";

interface ItemModalProps {
  isOpen: boolean;
}

const BackDrop = styled.div.attrs({ className: "backdrop" })`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;
  display: block;
  position: fixed;
  left: 0;
  top: 0;
`;

const ModalWrapper = styled.div.attrs({
  className: "modal-wrapper",
})<ItemModalProps>`
  padding: 15px;
  background-color: white;
  text-align: center;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  min-width: 1000px;
  min-height: 500px;
  border-radius: 30px;
  flex-direction: row;
`;

const BigPic = styled.div.attrs({ className: "picture" })`
  width: 40%;
  background-color: red;
  border-radius: 30px;
`;

const ItemModal = () => {
  const { notificationContent, notificationOpen, setNotificationOpen } =
    useContext(rootContext);
  return (
    <>
      <ModalWrapper isOpen={notificationOpen}>
        <p style={{ fontSize: "30px" }}>{notificationContent.title}</p>
        <BigPic />
      </ModalWrapper>
      {notificationOpen && (
        <BackDrop onClick={() => setNotificationOpen(false)} />
      )}
    </>
  );
};

export default ItemModal;
