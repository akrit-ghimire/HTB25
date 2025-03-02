import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Tiles from "./components/Tiles";
import Chat from "./components/Chat";
import axios from "axios"; // Import axios
import CoinGeckoPriceChart from "./components/CoinGeckoPriceChart";

function App() {
  const [trendingTokens, setTrendingTokens] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [selectedTokenObj, setSelectedTokenObj] = useState(null);

  useEffect(() => {
    // Fetch trending tokens from CoinGecko
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        setTrendingTokens(response.data.coins);
        setWatchlist(response.data.coins); // should get from local storage

        if (response.data.coins.length > 0) {
          // while we don't have set watchlist from local storage
          setSelectedTokenObj(response.data.coins[0]); // Set the first token ID
        }
      })
      .catch((error) => {
        console.error("Error fetching trending tokens:", error);
      });
  }, []);

  const handleSelectToken = (token) => {
    setSelectedTokenObj(token);
    console.log("Selected token ID:", token);
  };

  // const selectedToken = trendingTokens.find(
  //   (token) => token.item.id === selectedTokenObj?.item.id
  // );

  return (
    <>
      <Sidebar watchlist={watchlist} onSelectTokenObj={handleSelectToken} />
      <Tiles
        name={selectedTokenObj?.item?.name}
        summary={"lorem ipsum dolor amet"}
      >
        {selectedTokenObj && (
          <CoinGeckoPriceChart coinId={selectedTokenObj?.item?.id} />
        )}
      </Tiles>
      <Chat
        name={selectedTokenObj?.item?.name}
        messages={[
          {
            person: "CryptoWhiz",
            message: "lorem ipsum dolor amet",
          },
          {
            person: "You",
            message: "lorem ipsum dolor amet",
          },
        ]}
      />
    </>
  );
}
export default App;

// todo
// - integrate chat api - host cameron python to fetch from react
// - summary ai as pre prompt sent and response recieved - environment, use case (legal / illegal),
// - add the remaining tiles - carbon fooprint, news, community sentiment (meter postive negative)
// - proper watchlist

// extra todos
// - currency feature at bottom of sidebar
