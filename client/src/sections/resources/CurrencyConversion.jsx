/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { EnumContext } from "../../contexts/EnumContext";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CurrencyConversion = () => {
  const navigate = useNavigate();

  const { enums } = useContext(EnumContext);

  const convertCurrency = () => {
    console.log(fromCurrency, toCurrency, amount);
    setToAmount(amount * 10);
  };

  const goBackToProfile = () => {
    setFromCurrency("");
    setToCurrency("");
    setAmount(0);
    setToAmount(0);
    navigate("/user/profile");
  };

  const [fromCurrency, setFromCurrency] = useState("");
  const [amount, setAmount] = useState();
  const [toCurrency, setToCurrency] = useState("");
  const [toAmount, setToAmount] = useState(0);

  return (
    <div className="layoutSection text-slate-200 pb-4 items-center justify-center my-20">
      <h1 className="text-4xl text-center text-slate-400">
        Currency Conversion
      </h1>
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-wrap items-center justify-center"
      >
        <motion.div
          className="w-full lg:w-1/2 p-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col items-center text-slate-700 lg:items-start">
            <select
              className="input mt-2"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="" disabled>
                Select Currency
              </option>
              {enums.currencies.map((currency, index) => (
                <option key={index} value={currency}>
                  {currency}
                </option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Amount"
              className="input"
              autoFocus
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 p-4 text-slate-700"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <div className="flex flex-col items-center lg:items-start">
            <select
              className="input mt-2"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="" disabled>
                Select Currency
              </option>
              {enums.currencies.map((currency, index) => (
                <option key={index} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          {
            <input
              type="number"
              placeholder="Amount"
              className="input"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
            />
          }
        </motion.div>
      </motion.div>

      <div className="flex items-center justify-center gap-5 mt-6 w-full">
        <button className="chbtn" onClick={convertCurrency}>Convert</button>
      </div>
    </div>
  );
};

export default CurrencyConversion;
