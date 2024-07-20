/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ANNULA_TAX_RATES,
  USER_WALLETS,
  WALLET_INCOME_TYPES,
} from "../../constants";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const AnnualTax = () => {
  const handleCalculateTax = (e) => {
    e.preventDefault();
    console.log(wallets, types, rate);
  };

  // Error state
  const [error, setError] = useState(null);

  // Form data states
  const [wallets, setWallets] = useState([]);
  const [types, setTypes] = useState([]);
  const [rate, setRate] = useState(0);

  return (
    <div className="layoutSection text-slate-200 border-b border-neutral-900 pb-4 flex flex-col items-center my-10">
      <h1 className="text-slate-700 text-bold text-4xl">
        Fill out the form to calculate annual tax
      </h1>
      <div className="lg:w-4/5 w-full">
        <motion.div
          variants={gridSquareVariants}
          className="flex flex-wrap items-center justify-center lg:justify-start w-full"
        >
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {
              <div className="text-slate-900 pb-4 items-center py-4 my-4 lg:items-start">
                <motion.div
                  variants={gridSquareVariants}
                  className="flex flex-wrap justify-center lg:justify-start"
                >
                  <select
                    className="w-full lg:w-1/2 items-center justify-center bg-indigo-200 text-slate-700 border border-slate-300 rounded-md p-2"
                    value={wallets}
                    onChange={(e) => setWallets(e.target.value)}
                  >
                    <option value="" disabled selected hidden>
                      Select wallets
                    </option>
                    {USER_WALLETS.map((wallet, index) => (
                      <option key={index} value={wallet.title}>
                        {wallet.title}
                      </option>
                    ))}
                  </select>

                  <select
                    className="w-full lg:w-1/2 items-center justify-center bg-indigo-200 text-slate-700 border border-slate-300 rounded-md p-2"
                    value={types}
                    onChange={(e) => setTypes(e.target.value)}
                  >
                    <option value="" disabled selected hidden>
                      Select types
                    </option>
                    {WALLET_INCOME_TYPES.map((income, index) => (
                      <option key={index} value={income.name}>
                        {income.name}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>
            }
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 py-4 lg:p-10"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <form
              onSubmit={handleCalculateTax}
              className="justify-center items-center  text-slate-700"
            >
              <select
                className="w-full lg:w-1/2 items-center justify-center bg-indigo-200 text-slate-700 border border-slate-300 rounded-md p-2"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              >
                <option value="" disabled selected hidden>
                  Select rate
                </option>
                {ANNULA_TAX_RATES.map((category, index) => (
                  <option key={index} value={category.rate}>
                    {category.name}:{category.rate}
                  </option>
                ))}
              </select>

              <button type="submit" className="smbtn">
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnnualTax;
