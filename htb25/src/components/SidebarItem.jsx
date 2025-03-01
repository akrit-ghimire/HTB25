import React from "react";

const SidebarItem = ({ name, icon, active }) => {
  return (
    <div className="flex text-md rounded-md p-1 w-full gap-3 hover:bg-dark_c cursor-pointer">
      <img className="w-6 h-6 rounded-full" src={icon} />
      <div className="w-max text-nowrap">{name}</div>
    </div>
  );
};

export default SidebarItem;
