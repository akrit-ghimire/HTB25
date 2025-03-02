import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Au_Sidebar from "./components/Au_Sidebar";
import Tiles from "./components/Tiles";
import AuTiles from "./components/Au_Tiles";
import Chat from "./components/Chat";
import axios from "axios"; // Import axios
import CoinGeckoPriceChart from "./components/CoinGeckoPriceChart";

function App() {
  const [trendingTokens, setTrendingTokens] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [selectedTokenObj, setSelectedTokenObj] = useState(null);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentMessages, setCurrentMessages] = useState([]);
  const [currentSummary, setCurrentSummary] = useState("");
  const [currentPage, setCurrentPage] = useState("Australia");

  const newsApiKey = "587a84574b4942cea09cbbc329b78e87";

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log("Selected token:", selectedTokenObj);
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${selectedTokenObj?.item?.name}&apiKey=${newsApiKey}`
        );
        const data = await response.json();
        setArticles(data.articles.slice(0, 5)); // Get top 3 articles
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
    setCurrentNewsIndex(0);
  }, [selectedTokenObj]);

  useEffect(() => {
    // changing summary each time
    const fetchData = async () => {
      try {
        // Prepare the data in x-www-form-urlencoded format
        const formData = new URLSearchParams();
        formData.append(
          "user_input",
          `[SUMMARY] Give me a summary for ${selectedTokenObj?.item?.name}.` //  Things to touch on in this summary: evnrionmental impact of the crypto currency, the typical usecases of this currency (i.e legal / illegal). What the sentiment is for this, whether people should use this or not. Also a summary of how well known this is.
        );

        // Make the POST request
        const response = await axios.post(
          "https://chfmath.eu.pythonanywhere.com/get_insights",
          formData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded", // Specify content type
            },
          }
        );

        console.log("Response:", response.data);
        setCurrentSummary(response.data.response);
      } catch (error) {
        console.error("Error fetching insights:", error);
      }
    };

    // Call the fetchData function when selectedTokenObj changes
    fetchData();
  }, [selectedTokenObj]);

  useEffect(() => {
    const storedWatchlist = localStorage.getItem("watchlist");

    if (storedWatchlist) {
      const parsedWatchlist = JSON.parse(storedWatchlist);
      setWatchlist(parsedWatchlist);
      setSelectedTokenObj(parsedWatchlist[0] || null); // Set the first token in the list as selected
    }
  }, []); // Runs once on component mount to check localStorage

  // Fetch trending tokens from CoinGecko API (only if no watchlist exists)
  useEffect(() => {
    const storedWatchlist = localStorage.getItem("watchlist");

    if (!storedWatchlist) {
      // Only fetch trending tokens if no watchlist exists
      axios
        .get("https://api.coingecko.com/api/v3/search/trending")
        .then((response) => {
          const trending = response.data.coins;
          setTrendingTokens(trending);
          const initialWatchlist = trending.slice(0, 3); // Initialize with top 3 trending tokens
          setWatchlist(initialWatchlist);
          setSelectedTokenObj(initialWatchlist[0] || null); // Set the first token as selected
          localStorage.setItem("watchlist", JSON.stringify(initialWatchlist)); // Save initial watchlist to localStorage
        })
        .catch((error) => {
          console.error("Error fetching trending tokens:", error);
        });
    }
  }, []); // Runs once on component mount to fetch trending tokens if no watchlist is found

  const onSubmitQuery = async (userInput) => {
    const newMessages = [
      ...currentMessages,
      { person: "You", message: userInput },
    ];
    setCurrentMessages(newMessages);

    try {
      // Prepare the data in x-www-form-urlencoded format
      const formData = new URLSearchParams();
      formData.append("user_input", userInput);

      const response = await axios.post(
        "https://chfmath.eu.pythonanywhere.com/get_insights",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Specify content type
          },
        }
      );

      console.log("Response:", response.data);
      setCurrentMessages([
        ...newMessages,
        { person: "CryptoWhiz", message: response.data.response },
      ]);
    } catch (error) {
      console.error("Error fetching insights:", error);
    }
  };

  useEffect(() => {
    const storedWatchlist = localStorage.getItem("watchlist");

    // Only fetch trending tokens if no watchlist exists
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        const trending = response.data.coins;
        setTrendingTokens(trending);
      })
      .catch((error) => {
        console.error("Error fetching trending tokens:", error);
      });
  }, []); // Runs once on component mount to fetch trending tokens if no watchlist is found

  // Save the watchlist to localStorage whenever it changes
  useEffect(() => {
    if (watchlist.length > 0) {
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }
  }, [watchlist]);

  const handleSelectToken = (token) => {
    setSelectedTokenObj(token);
    console.log("Selected token ID:", token);
  };

  // const selectedToken = trendingTokens.find(
  //   (token) => token.item.id === selectedTokenObj?.item.id
  // );

  const handleAddWatchlist = (token) => {
    const newWatchlist = [...watchlist, { item: token }];
    console.log("Added token to watchlist:", token);
    setWatchlist(newWatchlist);
  };

  if (currentPage === "home") {
    return (
      <>
        <div className="w-full h-full p-[120px] text-light">
          <h1>WhizApps</h1>
          <p>The only financial tools you’ll ever need</p>
        </div>
        <header className="App-header ">
          <button
            onClick={() => setCurrentPage("hello")}
            type="submit"
            className="flex flex-row items-center bg-primary rounded-lg px-4"
          >
            CryptoWhiz
          </button>
          <button
            onClick={() => setCurrentPage("Australia")}
            type="submit"
            className="flex flex-row items-center bg-primary rounded-lg px-4"
          >
            MarketingWhiz
          </button>
        </header>
      </>
    );
  } else if (currentPage === "Australia") {
    return (
      <>
        <div className="flex flex-row">
          <Au_Sidebar
            onHomeClick={() => setCurrentPage("home")}
            name={"Home"}
          />
          <AuTiles />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-row">
        <Sidebar
          watchlist={watchlist}
          trending={trendingTokens}
          onSelectTokenObj={handleSelectToken}
          onAddWatchlist={handleAddWatchlist}
          onHomeClick={() => setCurrentPage("home")}
        />
        <Tiles
          name={selectedTokenObj?.item?.name}
          summary={currentSummary}
          article={articles[currentNewsIndex]}
          incrementArticles={() => {
            setCurrentNewsIndex((prev) =>
              prev + 1 >= articles.length ? prev : prev + 1
            );
          }}
          decrementArticles={() => {
            setCurrentNewsIndex((prev) => (prev - 1 < 0 ? prev : prev - 1));
          }}
          hideLeft={currentNewsIndex == 0}
          hideRight={currentNewsIndex == articles.length - 1}
        >
          {selectedTokenObj && (
            <CoinGeckoPriceChart coinId={selectedTokenObj?.item?.id} />
          )}
        </Tiles>
        <Chat
          name={selectedTokenObj?.item?.name}
          onSubmitQuery={onSubmitQuery}
          messages={currentMessages}
        />
      </div>
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
// - large crypto names make the sidebar too big it shifts things to the right
