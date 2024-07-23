/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { WALLET_INCOME_TYPES } from "../../constants";
import { PropContext } from "../../contexts/PropContext";
import { EnumContext } from "../../contexts/EnumContext";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const AnnualTax = () => {
  const { props } = useContext(PropContext);
  const { enums } = useContext(EnumContext);

  const handleCalculateTax = (e) => {
    e.preventDefault();
    console.log(wallets, types, rate);
  };

  const [wallets, setWallets] = useState("");
  const [types, setTypes] = useState("");
  const [rate, setRate] = useState("");
  const [tax, setTax] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="layoutSection text-slate-200 border-b border-neutral-900 pb-4 flex flex-col items-center my-10">
      <h1 className="text-slate-700 text-bold text-4xl">
        Fill out the form to calculate annual tax
      </h1>
      <div className="lg:w-4/5 w-full">
        <motion.div variants={gridSquareVariants} className="w-full">
          <motion.div
            className="w-full py-4 lg:p-10"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <form
              onSubmit={handleCalculateTax}
              className="flex flex-col items-center justify-center text-slate-700"
            >
              <h1 className="text-xl text-center text-slate-500  mb-2">
                Select wallets to consider
              </h1>
              <select
                className="w-full lg:w-1/2 input"
                value={wallets}
                onChange={(e) => setWallets(e.target.value)}
              >
                <option value="" disabled selected hidden>
                  Select wallets to consider
                </option>
                {props.wallets.map((wallet, index) => (
                  <option key={index} value={wallet.name}>
                    {wallet.name}
                  </option>
                ))}
              </select>

              <h1 className="text-xl text-center text-slate-500  mb-2">
                Select income types to consider
              </h1>
              <select
                className="w-full lg:w-1/2 input"
                value={types}
                onChange={(e) => setTypes(e.target.value)}
              >
                <option value="" disabled selected hidden>
                  Select income types to consider
                </option>
                {WALLET_INCOME_TYPES.map((income, index) => (
                  <option key={index} value={income.name}>
                    {income.name}
                  </option>
                ))}
              </select>
              <h1 className="text-xl text-center text-slate-500  mb-2">
                Select tax category
              </h1>
              <select
                className="w-full lg:w-1/2 input"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              >
                <option value="" disabled selected hidden>
                  Select tax category
                </option>
                {enums.taxRates.map((category, index) => (
                  <option key={index} value={category.rate}>
                    {category.name}:{category.rate}
                  </option>
                ))}
              </select>

              <h1 className="text-xl text-center text-slate-500 mb-2">Annual Tax</h1>
              <input
                type="number"
                placeholder="Tax"
                className="w-full lg:w-1/2 input"
                value={tax}
              />

              <button type="submit" className="chbtn">
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
