/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { WALLET_EXPENSE_TYPES, WALLET_INCOME_TYPES } from "../../../constants";
import Alert from "../../../messages/Alert";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const WalletAddCashFlow = ({ walletID }) => {
  const [showExpense, setShowExpense] = useState(false);

  const handleTransactionToggle = () => {
    setShowExpense(!showExpense);
    setFlowType("");
  };

  const handleCashflow = (e) => {
    e.preventDefault();
    console.log(flowType, amount);
    console.log(walletID);
    setAmount("");
    setFlowType("");

    // const responseData = await AddCashFlow(walletID, flowType, amount);
    // if(responseData){

    // }
    // else{

    // }
  };

  const [flowType, setFlowType] = useState();
  const [amount, setAmount] = useState();
  const [error, setError] = useState(null);

  return (
    <div className="layoutSection text-slate-200 pb-4 flex flex-col items-center justify-center my-20 mb-40 bg-gradient-to-r from-indigo-400 to-slate-200 rounded-lg shadow-lg">
      <h1 className="text-slate-700 text-bold text-4xl my-10">
        Add CashFlow to Wallet
      </h1>
      <div className="lg:w-4/5 w-full">
        <motion.div
          variants={gridSquareVariants}
          className="flex flex-wrap items-center justify-center lg:justify-start w-full"
        >
          <motion.div
            className="w-full lg:w-1/2 my-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {showExpense && (
              <div className="text-slate-900 items-center lg:items-start">
                <motion.div
                  variants={gridSquareVariants}
                  className="flex flex-wrap justify-center lg:justify-start"
                >
                  <select
                    className="w-full lg:w-1/2 input"
                    value={flowType}
                    onChange={(e) => setFlowType(e.target.value)}
                  >
                    <option value="" disabled selected hidden>
                      Select an expense type
                    </option>
                    {WALLET_EXPENSE_TYPES.map((income, index) => (
                      <option key={index} value={income.name}>
                        {income.name}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>
            )}

            {!showExpense && (
              <div className="text-slate-900 items-center lg:items-start">
                <motion.div
                  variants={gridSquareVariants}
                  className="flex flex-wrap justify-center lg:justify-start"
                >
                  <select
                    className="w-full lg:w-1/2 input"
                    value={flowType}
                    onChange={(e) => setFlowType(e.target.value)}
                  >
                    <option value="" disabled selected hidden>
                      Select an income type
                    </option>
                    {WALLET_INCOME_TYPES.map((income, index) => (
                      <option key={index} value={income.name}>
                        {income.name}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>
            )}

            <button onClick={handleTransactionToggle} className="btn w-1/2">
              Income / Expense
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
              <input
                type="number"
                placeholder="Amount"
                className="input"
                autoFocus
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
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

export default WalletAddCashFlow;
