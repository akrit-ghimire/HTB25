import React, { useState } from "react";
import Au_SidebarItem from "./Au_SidebarItem";
import SidebarItemContainer from "./SidebarItemContainer";
import Modal from "./Modal";
import {
  ChartNoAxesCombined,
  Eye,
  Home,
  List,
  Plus,
  Search,
} from "lucide-react";
import axios from "axios";
import HomeButton from "./homeButton";

const Au_Sidebar = ({ onHomeClick, name }) => {
  return (
    <div className="h-screen flex flex-col bg-dark text-light w-[400px] px-6 overflow-y-auto ">
      <div className="flex flex-col justify-between items-center pt-16 gap-6">
        <div className="flex items-center flex-col gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1729.219"
            height="1774.374"
            viewBox="0 0 1729.219 1774.374"
            className="w-8 h-8"
          >
            <defs></defs>
            <path
              class="cls-1"
              d="M147,1555L791,887,495,847,829,665,773,259l282,282,340-184L1213,717l286,290-382-62L935,1293l-50-290L251,1669ZM953.983,32.5l57.547-7.516,35.48,217.489-57.555,7.516Zm260.107-9.356,57.09,10.465-32.82,217.9-57.09-10.466Zm523.05,498.123,8.99,57.34-216.51,41.037-8.99-57.339ZM1748,773.87l-8.22,57.455-219.02-24.278,8.22-57.454ZM213,1703L109,1589,21,1689s-14.375,57.62,30,88,71.625,19.62,82,14S213,1703,213,1703Z"
              transform="translate(-18.781 -23.156)"
              fill="#4b2ed3"
            />
          </svg>
          <h1 className="text-2xl">MarketingWhiz</h1>
        </div>

        <div className="h-full bg-grey-700 w-full flex flex-col gap-3">
          <HomeButton onClick={onHomeClick} />
          <SidebarItemContainer
            name={"Market"}
            expandedOnOpen={true}
            icon={<Eye />}
          >
            <Au_SidebarItem name={"Agriculture"} />
          </SidebarItemContainer>
        </div>
      </div>
    </div>
  );
};

export default Au_Sidebar;
