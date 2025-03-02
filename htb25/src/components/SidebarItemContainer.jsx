import React, { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  List,
} from "lucide-react";

const SidebarItemContainer = ({ children, name, expandedOnOpen, icon }) => {
  const [isOpen, setIsOpen] = useState(expandedOnOpen); //open default
  const handleCollapseClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className="hover:bg-dark_c rounded-xl cursor-pointer w-full pr-4"
        onClick={() => handleCollapseClick()}
      >
        <div className="flex justify-between w-full pt-2 pb-2">
          <div className="flex items-center gap-2 px-2">
            {icon}
            <h2 className="rounded-lg ">{name}</h2>
          </div>

          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
      </button>

      <div className="pl-4">
        <div
          className={`flex flex-col gap-2 pl-2 border-l border-dark_c_2 w-auto ${
            isOpen
              ? ""
              : "h-0  overflow-hidden transition-transform duration-500"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default SidebarItemContainer;
