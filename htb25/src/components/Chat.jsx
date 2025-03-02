import React, { useState } from "react";
import Message from "./Message";
import { SquarePlus, SendHorizonal, SendHorizontal } from "lucide-react";

const Chat = ({ onSubmitQuery, name, messages = [], newClick }) => {
  // State to manage the input field value
  const [userInput, setUserInput] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (userInput.trim()) {
      onSubmitQuery(userInput); // Call the passed function with the user's input
      setUserInput(""); // Clear the input field
    }
    console.log("Submitted input:", userInput);
  };

  return (
    <div className="h-screen min-w-[450px] w-[450px] bg-light_c py-6 pr-6">
      <div className="flex flex-col p-6 items-center w-full h-full bg-light_c_3 rounded-3xl">
        <div className="flex flex-row justify-between w-full py-6">
          <p>New Conversation</p>
          <SquarePlus size={24} />
        </div>
        <div className="py-6 h-full flex flex-col gap-3 justify-end items-end w-full overflow-y-auto">
          {messages.map((message, index) => (
            <Message
              key={index}
              text={message.message}
              type={message.person !== "You" ? "bot" : ""}
            />
          ))}
        </div>
        <div className="py-3 px-4 bg-dark w-full rounded-lg text-light">
          <p>
            Ask CryptoWhiz about <strong>{name}</strong>
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="py-6 w-full flex flex-row justify-between gap-[4px]"
        >
          <input
            type="text"
            className="w-full px-4 py-3 bg-light_c rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter text..."
            value={userInput} // Bind the value of the input to the state
            onChange={handleInputChange} // Update state when input changes
          />
          <button
            type="submit"
            className="flex flex-row items-center bg-primary rounded-lg px-4"
          >
            <SendHorizontal color="#fff" size={24} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
