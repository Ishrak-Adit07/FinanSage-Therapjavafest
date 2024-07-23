/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { WALLET_EXPENSE_TYPES } from "../../../constants";
import Alert from "../../../messages/Alert";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const BudgetAddTransaction = () => {
  const handleCashflow = (e) => {
    e.preventDefault();
    console.log(flowType, amount);
    setAmount("");
    setFlowType("");
  };

  // Error state
  const [error, setError] = useState(null);

  // Form data states
  const [flowType, setFlowType] = useState("");
  const [amount, setAmount] = useState();

  return (
    <div className="layoutSection text-slate-200 pb-4 flex flex-col items-center justify-center my-20 mb-40 rounded-lg shadow-lg">
      <h1 className="text-slate-700 text-bold text-4xl my-4">
        Cut From Budget
      </h1>
      <div className="lg:w-4/5 w-full">
        <motion.div
          variants={gridSquareVariants}
          className="flex flex-wrap items-center justify-center w-full"
        >
          

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
              {
                <div className="text-slate-900 items-center lg:items-start">
                  <motion.div
                    variants={gridSquareVariants}
                    className="flex flex-wrap justify-center lg:justify-start"
                  >
                    <select
                      className="w-full input"
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
              }

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

export default BudgetAddTransaction;
