/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Alert from "../../messages/Alert";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const BankCashFlow = () => {
  const [transactionType, setTransactionType] = useState("");

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleCashflow = (e) => {
    e.preventDefault();
    console.log(amount, note, bank, bankAccount, wallet);
    setNote("");
    setAmount("");
    setBank("");
    setBankAccount("");
    setWallet("");
  };

  // Error state
  const [error, setError] = useState(null);

  // Form data states
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [bank, setBank] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [wallet, setWallet] = useState("");

  const banks = ["Bank A", "Bank B", "Bank C"]; // Example bank names
  const wallets = ["Wallet X", "Wallet Y", "Wallet Z"]; // Example wallet names

  return (
    <div className="layoutSection text-slate-200 border-b border-neutral-900 pb-4 flex flex-col items-center my-10">
      <h1 className="text-slate-700 text-bold text-4xl">
        Exchange money within wallets and bank accounts
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
                value={bank}
                onChange={(e) => setBank(e.target.value)}
              >
                <option value="" disabled>
                  Select a Bank
                </option>
                {banks.map((bankName, index) => (
                  <option key={index} value={bankName}>
                    {bankName}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Bank Account Number"
                className="input mt-2"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />

              <select
                className="input mt-2"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
              >
                <option value="" disabled>
                  Select a Wallet
                </option>
                {wallets.map((walletName, index) => (
                  <option key={index} value={walletName}>
                    {walletName}
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

export default BankCashFlow;
