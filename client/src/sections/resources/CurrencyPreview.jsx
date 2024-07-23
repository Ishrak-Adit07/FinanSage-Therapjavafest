/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GradualText from "../../components/TextAnimations/GradualText";
import { HERO_CONTENT } from "../../constants";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CurrencyPreview = () => {
  return (
    <div className="layoutSection text-slate-200 border-b border-neutral-900 p-60 w-full">
      <Link to="/user/resources/currency/converter" title="Currencies">
        <motion.div
          variants={gridSquareVariants}
          className="flex flex-wrap items-center justify-center lg:justify-start"
        >
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="pb-12 text-4xl font-thin text-slate-700 tracking-tight lg:mt-12 lg:text-6xl xl:text-8xl">
                Coinage
              </h1>
              <div className="bg-gradient-to-r from-red-400 via-purple-500 to-pink-400 bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl xl:text-4xl">
                <GradualText
                  text={
                    "Learn about currencies worldwide and use currency converters!"
                  }
                />
              </div>
              <p className="my-4 max-w-xl font-light text-slate-700 tracking-tighter text-center lg:text-left">
                {HERO_CONTENT}
              </p>
              <div className="flex items-center justify-center gap-5 mt-4 w-full lg:justify-start">
                <p className="text-slate-500 text-center">
                  <Link
                    to="/user/resources/currency/converter"
                    title="Currencies"
                  >
                    <span className="underline">Learn more</span>
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 py-4 lg:p-10"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <div className="flex justify-center max-w-xl"></div>
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
};

export default CurrencyPreview;
