/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import BankAccountTransactions from "./BankAccountTransactions";

const FSAccountTransactions = ({ fsTS }) => {
  const [showTransacions, setShowTransactions] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      if (fsTS.length === 0) setShowTransactions(false);
    }, 1000);
  }, [fsTS.length]);

  return (
    <section className="layoutSection w-full flex flex-col justify-center items-center my-10">
      <div>
        <h1 className="text-4xl my-10 text-center">Account Transactions</h1>
        {showTransacions &&
          fsTS.map((transaction, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              {true && (
                <BankAccountTransactions
                  className="w-full"
                  id={transaction.id}
                  walletName={transaction.wallet.name}
                  amount={transaction.amount}
                  date={transaction.date}
                  type={transaction.type}
                />
              )}
            </motion.div>
          ))}
        {!showTransacions && (
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-2xl my-10 text-center">
              There are no transactions in this account
            </h1>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FSAccountTransactions;
