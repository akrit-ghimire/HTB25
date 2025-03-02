import { Home } from "lucide-react";
import React from "react";

const HomeButton = ({ onClick }) => {
  return (
    <div
      className="hover:bg-dark_c cursor-pointer rounded-md  overflow-hidden"
      onClick={onClick}
    >
      <div className="flex text-md rounded-md px-2 py-1 gap-4 w-max items-center">
        <Home size={32} />
        <div className="w-full text-nowrap ">Home</div>
      </div>
    </div>
  );
};

export default HomeButton;
