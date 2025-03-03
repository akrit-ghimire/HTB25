import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import SidebarItemContainer from "./SidebarItemContainer";
import Modal from "./Modal";
import { ChartNoAxesCombined, Eye, List, Plus, Search } from "lucide-react";
import axios from "axios";
import HomeButton from "./homeButton";

const Sidebar = ({
  watchlist,
  trending,
  onSelectTokenObj,
  onAddWatchlist,
  onHomeClick,
}) => {
  //onclick is for click of home button
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${searchInput}`
      );
      setSearchResults(response.data.coins);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleAddToWatchlist = (token) => {
    onAddWatchlist(token); // Add the selected token to the watchlist
    setIsModalOpen(false); // Close the modal
    setSearchInput(""); // Reset the search input
    setSearchResults([]); // Clear the search results
  };

  return (
    <div className="h-screen flex flex-col bg-dark text-light px-6 overflow-y-auto ">
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
          <h1 className="text-2xl">CryptoWhiz</h1>
        </div>

        <div className="h-full bg-grey-700 w-[250px] flex flex-col gap-3">
          <HomeButton onClick={onHomeClick} />
          <SidebarItemContainer
            name={"Watchlist"}
            expandedOnOpen={true}
            icon={<Eye />}
          >
            {watchlist &&
              watchlist.map((coin, index) => (
                <SidebarItem
                  coin={coin}
                  key={index}
                  name={coin.item.name}
                  icon={coin.item.small}
                  tokenId={coin.item.id}
                  onSelectTokenObj={onSelectTokenObj}
                />
              ))}
            <div
              className="bg-dark_c cursor-pointer rounded-md px-2 py-1 overflow-hidden flex justify-center"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus />
            </div>
          </SidebarItemContainer>
          <SidebarItemContainer
            name={"Trending"}
            expandedOnOpen={false}
            icon={<ChartNoAxesCombined />}
          >
            {trending &&
              trending.map((coin, index) => (
                <SidebarItem
                  coin={coin}
                  key={index}
                  name={coin.item.name}
                  icon={coin.item.small}
                  tokenId={coin.item.id}
                  onSelectTokenObj={onSelectTokenObj}
                />
              ))}
          </SidebarItemContainer>
        </div>
      </div>

      {/* Modal for Adding to Watchlist */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-row gap-1">
            <input
              type="text"
              class="w-full px-4 py-3 bg-dark_c rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for a Crypto"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="bg-primary text-white px-3 rounded-lg"
            >
              <Search />
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            {searchResults.slice(0, 5).map((coin) => (
              <div
                key={coin.id}
                className="flex items-center justify-between px-4 py-1 cursor-pointer hover:bg-dark_c outline outline-dark_c rounded-lg"
                onClick={() => handleAddToWatchlist(coin)}
              >
                <div className="flex items-center gap-2 py-3">
                  <img
                    src={coin.thumb}
                    alt={coin.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span>{coin.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;
