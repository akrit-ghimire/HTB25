import React from "react";
import Message from "./Message";
import { SquarePlus, SendHorizonal, SendHorizontal } from "lucide-react";

const Chat = ({ sendClick, name, messages = [], newClick }) => {
  return (
    <div className="h-screen min-w-[450px] bg-light_c py-6 pr-6">
      <div className="flex flex-col p-6 items-center w-full h-full bg-light_c_3 rounded-3xl">
        <div className="flex flex-row justify-between w-full py-6">
          <p>New Conversation</p>
          <SquarePlus size={24} />
        </div>
        <div className="py-6 h-full flex flex-col gap-3 justify-end items-end w-full">
          {messages.map((message, index) => (
            <Message
              key={index}
              text={message.message}
              type={message.person != "You" ? "bot" : ""}
            />
          ))}
        </div>
        <div className="py-3 px-4 bg-dark w-full rounded-lg text-light">
          <p>
            Ask CryptoWhiz about <strong>{name}</strong>
          </p>
        </div>
        <div className="py-6 w-full flex flex-row justify-between gap-[4px]">
          <input
            type="text"
            class="w-full px-4 py-3 bg-light_c rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter text..."
          />

          <div className="flex flex-row items-center bg-primary rounded-lg px-4">
            <SendHorizontal color="#fff" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
