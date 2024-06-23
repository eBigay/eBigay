import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";

export const ChatContainer = styled.div.attrs({
  className: "ChatContainer",
})`
  width: 100%;
  height: 90%;
  display: flex;
  gap: 40px;
  padding: 70px 60px;
  justify-content: center;
  ${RespondTo.laptopBreakpoint`
    padding: 2rem 1.5rem;
  `}
`;

export const ChatBox = styled.div.attrs({
  className: "ChatBox",
})`
  width: 70%;
  ${RespondTo.mobileBreakpoint`
    width: 90%;
  `}
`;

export const ChatBoxTop = styled.div.attrs({
  className: "ChatBoxTop",
})`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  background-color: white;
`;

export const ChatBoxBottom = styled.div.attrs({
  className: "ChatBoxBottom",
})`
  margin-top: 5px;
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChatInput = styled.textarea.attrs({
  className: "chatInput",
})`
  width: 80%;
  height: 90px;
  padding: 10px;
`;

export const ChatSubmitButton = styled.button`
  width: 70px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: teal;
  color: white;
`;
