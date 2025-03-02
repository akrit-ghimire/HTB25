import React from "react";

const News = ({ article }) => {
  return (
    <div>
      <div className="rounded-lg">
        <a
          href={article?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-2"
        >
          <h3 className="text-xl font-semibold">{article?.title}</h3>
          <div className="flex flex-row gap-4">
            <div className="w-full h-32 rounded-md overflow-hidden w-1/2">
              <img
                src={article?.urlToImage}
                alt=""
                srcset=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-600 w-full">{article?.content}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default News;
