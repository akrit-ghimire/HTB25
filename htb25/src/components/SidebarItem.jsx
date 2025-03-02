import React from "react";

const SidebarItem = ({
  coin,
  token,
  name,
  tokenId,
  icon,
  active,
  onSelectTokenObj,
}) => {
  return (
    <div
      className="hover:bg-dark_c cursor-pointer  rounded-md px-2 overflow-hidden"
      onClick={() => onSelectTokenObj(coin)}
    >
      <div className="flex text-md rounded-md px-2 py-1 gap-4 w-max">
        <img className="w-6 h-6 rounded-full" src={icon} />
        <div className="w-full text-nowrap ">{name}</div>
      </div>
    </div>
  );
};

export default SidebarItem;
