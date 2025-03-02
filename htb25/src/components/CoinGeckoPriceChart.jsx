import React, { useEffect } from "react";

const CoinGeckoWidget = ({
  coinId = "bitcoin", // Default to Bitcoin
  currency = "gbp", // Default to GBP
  locale = "en", // Default to English
}) => {
  useEffect(() => {
    // Dynamically load the CoinGecko widget script only once
    const script = document.createElement("script");
    script.src =
      "https://widgets.coingecko.com/gecko-coin-price-chart-widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []); // Only load the script once

  return (
    <div className="relative">
      {/* Render the CoinGecko custom element with a dynamic key */}
      <gecko-coin-price-chart-widget
        key={coinId} // Use coinId as the key to trigger re-render
        coin-id={coinId}
        locale={locale}
        transparent-background="true"
        initial-currency={currency}
        style={{ height: "100%", width: "100%", backgroundColor: "black" }}
      ></gecko-coin-price-chart-widget>
      <div className="absolute bg-light w-48 h-6 right-0 bottom-0 flex items-center justify-end text-dark_c_2 text-xs px-4">
        <p>Powered by CryptoWhiz©</p>
      </div>
    </div>
  );
};

export default CoinGeckoWidget;
