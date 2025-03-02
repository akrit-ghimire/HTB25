import React, { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  List,
} from "lucide-react";

const SidebarItemContainer = ({ children, name }) => {
  const [isOpen, setIsOpen] = useState(true); //open default
  const handleCollapseClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex justify-between w-full pt-4 pb-2">
        <div className="flex gap-2 px-2">
          <List size={24} className="rounded-full" />
          <h2 className="rounded-lg ">{name}</h2>
        </div>
        <button
          className="hover:bg-dark_c rounded-full cursor-pointer"
          onClick={() => handleCollapseClick()}
        >
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

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
