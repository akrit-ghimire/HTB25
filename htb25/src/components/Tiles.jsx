import React from "react";

const Tiles = ({ children, name, summary }) => {
  return (
    <div className="h-screen bg-light_c w-full rounded-tl-3xl rounded-bl-3xl p-6 gap-3 flex flex-col">
      <div className="bg-light rounded-3xl px-6 py-6">
        <p className="font-bold">{name} Summary</p>
        <p>{summary}</p>
      </div>
      <div className="rounded-3xl overflow-hidden bg-light">{children}</div>
      <div className="flex flex-row gap-3">
        <div className="bg-light rounded-3xl px-6 py-12 w-1/2"></div>
        <div className="bg-light rounded-3xl px-6 py-12 w-1/2"></div>
      </div>
    </div>
  );
};

export default Tiles;
