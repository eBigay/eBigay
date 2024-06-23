import { useRef, useState } from "react";
import PrimaryButton from "../assets/styles/base/Button.styled";
import {
  ChatBox,
  ChatBoxBottom,
  ChatBoxTop,
  ChatContainer,
  ChatInput,
} from "../assets/styles/components/Chat.styled";
import useAuthContext from "../hooks/useAuthContext";
import Message from "./Message";

const Chat = () => {
  const scrollRef = useRef<any>();
  const [newMessage, setNewMessage] = useState<string>("");
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const {
    auth: { user },
  } = useAuthContext();

  const handleSubmit = () => {};

  return (
    <ChatContainer>
      <ChatBox>
        <ChatBoxTop>
          {messages.map((m: any) => (
            <div ref={scrollRef}>
              <Message message={m} own={m.sender === user?._id} />
            </div>
          ))}
        </ChatBoxTop>
        <ChatBoxBottom>
          <ChatInput
            placeholder="write something..."
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          ></ChatInput>
          <PrimaryButton onClick={handleSubmit}>Send</PrimaryButton>
        </ChatBoxBottom>
      </ChatBox>
    </ChatContainer>
  );
};

export default Chat;
