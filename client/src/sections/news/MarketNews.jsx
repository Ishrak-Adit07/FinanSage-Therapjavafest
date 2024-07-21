/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { MARKET_NEG, MARKET_POS } from "../../constants";
import MarketCard from "../../components/Cards/MarketCard";

const MarketNews = () => {
  return (
    <div className="my-5">
      <h1 className="text-4xl text-slate-700 text-center text-bold my-5">
        Market News
      </h1>
      {MARKET_POS.map((marketHL, index) => (
        <motion.div
          key={index}
          className=""
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {true && (
            <MarketCard
              className=""
              id={"1234"}
              name={marketHL.name}
              change={marketHL.change}
            />
          )}
        </motion.div>
      ))}

      {MARKET_NEG.map((marketHL, index) => (
        <motion.div
          key={index}
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {true && (
            <MarketCard
              className="w-full"
              id={"1234"}
              name={marketHL.name}
              change={marketHL.change}
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
          See more market news
        </a>
      </h1>
    </div>
  );
};

export default MarketNews;
