/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Alert from "../../messages/Alert";
import { USER_WALLETS } from "../../constants";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const BankAccountCashFlow = () => {
  const [transactionType, setTransactionType] = useState("");

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleCashflow = (e) => {
    e.preventDefault();
    console.log(amount, wallet);
    setWallet("");
    setAmount("");
  };

  // Error state
  const [error, setError] = useState(null);

  // Form data states
  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("");

  return (
    <div className="layoutSection text-slate-200 border-b border-neutral-900 pb-4 flex flex-col items-center my-10">
      <h1 className="text-slate-700 text-bold text-4xl">
        Exchange money within wallets and bank account
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
            <div className="mb-4">
              <label className="block text-slate-700 text-sm font-bold mb-2">
                Transaction Type:
              </label>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="walletToBank"
                  name="transactionType"
                  value="Wallet to Bank"
                  checked={transactionType === "Wallet to Bank"}
                  onChange={handleTransactionTypeChange}
                  className="mr-2"
                />
                <label htmlFor="walletToBank" className="text-slate-700">
                  Wallet to Bank
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="bankToWallet"
                  name="transactionType"
                  value="Bank to Wallet"
                  checked={transactionType === "Bank to Wallet"}
                  onChange={handleTransactionTypeChange}
                  className="mr-2"
                />
                <label htmlFor="bankToWallet" className="text-slate-700">
                  Bank to Wallet
                </label>
              </div>
            </div>
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
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
              >
                <option value="" disabled>
                  Select a Wallet
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

              <button type="submit" className="btn mt-4">
                Make Transaction
              </button>
              {error && <Alert msg={error} />}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BankAccountCashFlow;
