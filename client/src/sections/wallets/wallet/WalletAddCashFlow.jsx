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
    <div className="text-slate-200 pb-4 flex flex-col items-center justify-center mt-20 rounded-lg w-full">
      <h1 className="text-4xl my-10 text-center bg-gradient-to-r from-purple-400 to-blue-400 p-4 rounded-lg shadow-md text-slate-">
        Add Cashflow to Wallet
      </h1>
      <div className="w-full flex flex-col items-center justify-center">
        <motion.div
          variants={gridSquareVariants}
          className="flex flex-wrap items-center justify-center w-full"
        >
          <motion.div
            className="w-full flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <form
              onSubmit={handleCashflow}
              className="w-full flex flex-col justify-center items-center text-slate-700"
            >
              <motion.div
                className="w-full lg:w-1/2 my-4 flex flex-col justify-center items-center"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                <button
                  onClick={handleTransactionToggle}
                  className="chbtn w-1/2 my-4"
                >
                  Change Income / Expense
                </button>

                {showExpense && (
                  <div className="text-slate-900 w-full">
                    <motion.div
                      variants={gridSquareVariants}
                      className="flex flex-wrap justify-center my-4"
                    >
                      <select
                        className="w-full input bg-gradient-to-r from-red-400 via-red-300 to-red-400"
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
                  <div className="text-slate-900 w-full">
                    <motion.div
                      variants={gridSquareVariants}
                      className="flex flex-wrap justify-center my-4"
                    >
                      <select
                        className="w-full input bg-gradient-to-r from-green-400 via-green-300 to-green-400"
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

                <input
                  type="number"
                  placeholder="Amount"
                  className="input"
                  autoFocus
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

                <button type="submit" className="chbtn w-full">
                  Add
                </button>
              </motion.div>

              {error && <Alert msg={error} />}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WalletAddCashFlow;
