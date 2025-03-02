import React from "react";

const Au_SidebarItem = ({ name, icon, onClick }) => {
  return (
    <div
      className="hover:bg-dark_c cursor-pointer  rounded-md px-2 overflow-hidden"
      onClick={onClick}
    >
      <div className="flex text-md rounded-md px-2 py-1 gap-4 w-max">
        {icon}
        <div className="w-full text-nowrap ">{name}</div>
      </div>
    </div>
  );
};

export default Au_SidebarItem;
