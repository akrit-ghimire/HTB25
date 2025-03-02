import React from "react";
import News from "./News";
import { ChevronsRight, ChevronsLeft } from "lucide-react";

const Tiles = ({
  children,
  name,
  summary,
  article,
  incrementArticles,
  decrementArticles,
  hideLeft,
  hideRight,
}) => {
  return (
    <div className="h-screen bg-light_c w-full rounded-tl-3xl rounded-bl-3xl p-6 gap-3 flex flex-col">
      <div className="bg-light rounded-3xl px-6 py-6">
        <p className="font-bold">{name} Summary</p>
        <p>{summary}</p>
      </div>
      <div className="rounded-3xl overflow-hidden bg-light">{children}</div>
      <div className="flex flex-row gap-3">
        <div className="bg-light rounded-3xl p-6 w-1/2 flex flex-col gap-4">
          <h3 className="font-bold">Latest {name} News</h3>
          <News article={article} />

          <div className="flex flex-row justify-between">
            <div
              onClick={decrementArticles}
              className={`flex flex-row items-center rounded-lg px-4 py-2 cursor-pointer ${
                hideLeft == true
                  ? "bg-light_c hover:bg-light_c/90"
                  : "bg-primary hover:bg-primary/90"
              }`}
            >
              <ChevronsLeft color="#fff" size={24} />
            </div>
            <div
              onClick={incrementArticles}
              className={`flex flex-row items-center bg-primary rounded-lg px-4 py-2 cursor-pointer hover:bg-primary/90 ${
                hideRight == true
                  ? "bg-light_c hover:bg-light_c/90"
                  : "bg-primary hover:bg-primary/90"
              }`}
            >
              <ChevronsRight color="#fff" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-light rounded-3xl px-6 py-12 w-1/2"></div>
      </div>
    </div>
  );
};

export default Tiles;
