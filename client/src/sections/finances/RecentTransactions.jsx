/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { RECENT_TRANSACTIONS } from "../../constants";
import UserTransactionDocCard from "../../components/Cards/UserTransactionDocCard";
import BankTransactionDocCard from "../../components/Cards/BankTransactionDocCard";

const RecentTransactions = () => {
  const [loading, setLoading] = useState(true);
  const [showTransacions, setShowTransactions] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
      if (RECENT_TRANSACTIONS.length === 0) setShowTransactions(false);
    }, 1000);
  }, []);

  return (
    <section className="layoutSection w-full flex flex-col justify-center items-center mt-40">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl my-10 text-center bg-gradient-to-r from-purple-400 to-blue-400 p-4 rounded-lg shadow-md text-slate-200">Recent Transactions</h1>
        {showTransacions &&
          RECENT_TRANSACTIONS.map((transaction, index) => (
            <motion.div
              key={index}
              className="w-3/5"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              {true && (
                <BankTransactionDocCard
                className="w-full"
                id={transaction.id}
                accountName={transaction.bankName}
                accountID={transaction.accID}
                amount={transaction.amount}
                date={transaction.date}
                type={transaction.type}
              />
              )}
            </motion.div>
          ))}
          {
            !showTransacions &&
            <h1 className="text-2xl my-10 text-center">There are no recent transactions</h1>
          }
      </div>
    </section>
  );
};

export default RecentTransactions;
