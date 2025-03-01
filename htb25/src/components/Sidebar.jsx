import React from "react";
import SidebarItem from "./SidebarItem";
import SidebarItemContainer from "./SidebarItemContainer";
const Sidebar = ({ watchlist }) => {
  return (
    <div className="h-screen bg-dark  text-light w-[360px] px-4">
      <div className="flex flex-col justify-between items-center pt-16">
        <h1 className="text-2xl">CryptoWhiz</h1>
        <div className="h-full bg-grey-700 w-full">
          <SidebarItemContainer name={"Watchlist"}>
            {watchlist &&
              watchlist.map((coin, index) => (
                <SidebarItem
                  key={index}
                  name={coin.item.name}
                  icon={coin.item.small}
                />
              ))}
          </SidebarItemContainer>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
