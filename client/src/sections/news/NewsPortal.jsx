/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import MarketCard from "../../components/Cards/MarketCard";
import { MARKET_PORTAL_NEWS } from "../../constants";
import NewsCard from "../../components/Cards/NewsCard";

const NewsPortal = () => {
  return (
    <div className="my-5">
      <h1 className="text-4xl text-slate-700 text-center text-bold my-5">
        News Portal
      </h1>
      {MARKET_PORTAL_NEWS.map((news, index) => (
        <motion.div
          key={index}
          className=""
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {true && (
            <NewsCard
              className=""
              id={"1234"}
              title={news.title}
              paper={news.paper}
              preview={news.preview}
              link={news.link}
            />
          )}
        </motion.div>
      ))}

      <h1 className="text-center">
        <a
          href="https://sharenews.com"
          title="Market News"
          className="text-green-500 text-center hover:text-green-700 underline"
        >
          See more news
        </a>
      </h1>
    </div>
  );
};

export default NewsPortal;
