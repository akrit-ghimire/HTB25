import React from "react";

const Message = ({ type, text }) => {
  if (type === "bot") {
    return (
      <div className="bg-light p-3 rounded-lg w-full">
        <p className="font-bold">CryptoWhiz</p>
        <p>{text}</p>
      </div>
    );
  }
  return (
    <div className="bg-light_c_2 p-3 rounded-lg flex flex-col justify-end max-w-[300px]">
      <p className="font-bold text-end">You</p>
      <p className="text-end">{text}</p>
    </div>
  );
};

export default Message;
