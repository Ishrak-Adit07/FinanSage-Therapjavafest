/* eslint-disable no-unused-vars */
import React from "react";
import MarketNews from "../../sections/news/MarketNews";
import NewsPortal from "../../sections/news/NewsPortal";

const News = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <MarketNews />
      <NewsPortal />
    </div>
  );
};

export default News;
