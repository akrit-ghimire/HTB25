import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Tiles from "./components/Tiles";
import Chat from "./components/Chat";
import axios from "axios"; // Import axios

function App() {
  const [trendingTokens, setTrendingTokens] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // Fetch trending tokens from CoinGecko
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        setTrendingTokens(response.data.coins);
        setWatchlist(response.data.coins); // Set watchlist to trending tokens by default
        console.log("Watchlist updated:", response.data.coins);
      })
      .catch((error) => {
        console.error("Error fetching trending tokens:", error);
      });
  }, []);

  return (
    <>
      <Sidebar watchlist={watchlist} />
      <Tiles />
      <Chat />
    </>
  );
}
export default App;
