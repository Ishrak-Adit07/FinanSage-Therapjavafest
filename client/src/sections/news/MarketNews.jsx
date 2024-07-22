/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { MARKET_NEG, MARKET_POS } from "../../constants";
import MarketCard from "../../components/Cards/MarketCard";

const MarketNews = () => {
  return (
    <div className="my-5">
      <h1 className="text-4xl text-slate-700 text-center text-bold my-10">
        Market News
      </h1>
      <div className="flex flex-wrap items-center justify-between gap-10">
        <div className="flex flex-wrap items-center justify-center">
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
        </div>

        <div className="flex flex-wrap items-center justify-center">
          {MARKET_NEG.map((marketHL, index) => (
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
        </div>
      </div>

      <h1 className="text-center my-5">
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
