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

const AccountInterest = () => {
  const { props } = useContext(PropContext);
  const { enums } = useContext(EnumContext);

  const findAccountByID = (id) => {
    return props.accounts.find((account) => account.id === id);
  };

  const handleCalculateInterest = (e) => {
    e.preventDefault();
    const resultByID = findAccountByID(account);
    console.log(resultByID);
    setBalance(resultByID.Balance);
    setInterest((resultByID.Balance * resultByID.InterestRate) / 100);
  };

  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [interest, setInterest] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="layoutSection text-slate-200 border-b border-neutral-900 pb-4 flex flex-col items-center my-10">
      <h1 className="text-slate-700 text-bold text-4xl">
        Fill out the form to calculate monthly interest
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
              onSubmit={handleCalculateInterest}
              className="flex flex-col items-center justify-center text-slate-700"
            >
              <h1 className="text-xl text-center text-slate-500 mb-2">
                Select Account
              </h1>
              <select
                className="w-full lg:w-1/2 input"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              >
                <option value="" disabled selected hidden>
                  Select Account
                </option>
                {props.accounts.map((account, index) => (
                  <option key={index} value={account.id}>
                    {account.BankName} : {account.AccID}
                  </option>
                ))}
              </select>

              <h1 className="text-xl text-center text-slate-500 mb-2">
                Account Balance
              </h1>
              <input
                type="number"
                placeholder="Balance"
                className="w-full lg:w-1/2 input"
                autoFocus
                value={balance}
              />

              <h1 className="text-xl text-center text-slate-500 mb-2">
                Monthly Interest
              </h1>
              <input
                type="number"
                placeholder="Interest"
                className="w-full lg:w-1/2 input"
                value={interest}
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

export default AccountInterest;
