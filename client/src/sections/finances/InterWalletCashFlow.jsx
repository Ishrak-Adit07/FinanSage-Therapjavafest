/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import ToggleButton from "../../components/Buttons/ToggleButton";
import { USER_WALLETS, WALLET_EXPENSE_TYPES, WALLET_INCOME_TYPES } from "../../constants";
import Alert from "../../messages/Alert";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const InterWalletCashFlow = () => {
  const [showExpense, setShowExpense] = useState(false);

  const handleTransactionToggle = () => {
    setShowExpense(!showExpense);
  };

  const handleCashflow = (e) => {
    e.preventDefault();
    console.log(amount, note);
    setNote();
    setAmount();
    setFromWallet("");
    setToWallet("");
  };

  // Error state
  const [error, setError] = useState(null);

  // Form data states

  const [fromWallet, setFromWallet] = useState();
  const [toWallet, setToWallet] = useState();
  const [amount, setAmount] = useState();
  const [note, setNote] = useState("");

  return (
    <div className="layoutSection text-slate-200 border-b border-neutral-900 pb-4 flex flex-col items-center my-10">
      <h1 className="text-slate-700 text-bold text-4xl">Exchange money within Wallet</h1>
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
              className="justify-center items-center  text-slate-700"
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
                  <option key={index} value={wallet.title}>
                    {wallet.title}
                  </option>
                ))}
              </select>

              <select
                className="input mt-2"
                value={toWallet}
                onChange={(e) => setToWallet(e.target.value)}
              >
                <option value="" disabled>
                  Select To Wallet
                </option>
                {USER_WALLETS.map((wallet, index) => (
                  <option key={index} value={wallet.title}>
                    {wallet.title}
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

              <input
                type="text"
                placeholder="Add note"
                className="input"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />

              <button type="submit" className="btn">
                Add
              </button>
              {error && <Alert msg={error} />}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default InterWalletCashFlow;
