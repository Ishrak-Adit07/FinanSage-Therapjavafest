/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Alert from "../../messages/Alert";
import ToggleButton from "../../components/Buttons/ToggleButton";
import { USER_WALLETS } from "../../constants";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Wallet2FSShift = () => {
  const [showExpense, setShowExpense] = useState(false);

  const handleTransactionToggle = () => {
    setShowExpense(!showExpense);
  };

  const handleCashflow = (e) => {
    e.preventDefault();
    console.log(amount);
    setAmount();
    setFromWallet("");
  };

  // Error state
  const [error, setError] = useState(null);

  // Form data states

  const [fromWallet, setFromWallet] = useState();
  const [amount, setAmount] = useState();

  return (
    <div className="layoutSection text-slate-200 border-b border-neutral-900 pb-4 flex flex-col items-center my-10">
      <h1 className="text-slate-700 text-bold text-4xl">
        Shift Money from Wallet to FS Account
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
            <ToggleButton />
            <button onClick={handleTransactionToggle} className="text-red-500">
              Change
            </button>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 py-4 lg:p-10"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <form
              onSubmit={handleCashflow}
              className="justify-center items-center text-slate-700"
            >
              <select
                className="input mt-2"
                value={fromWallet}
                onChange={(e) => setFromWallet(e.target.value)}
              >
                <option value="" disabled>
                  Select From Wallet
                </option>
                {USER_WALLETS.map((wallet, index) => (
                  <option key={index} value={wallet.name}>
                    {wallet.name}
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

              <button type="submit" className="btn">
                Shift Money
              </button>
              {error && <Alert msg={error} />}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Wallet2FSShift;