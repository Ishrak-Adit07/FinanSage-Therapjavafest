/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import BankTransactionDocCard from "../../../components/Cards/BankTransactionDocCard";

const ReportUserBankTransactions = ({bank, reportTS}) => {
  const [loading, setLoading] = useState(true);
  const [showTransacions, setShowTransactions] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
      if (reportTS.length === 0) setShowTransactions(false);
    }, 1000);
  }, [reportTS]);

  return (
    <section className="layoutSection w-full flex flex-col justify-center items-center my-10">
      <div>
        <h1 className="text-4xl my-10 text-center">Transactions</h1>
        {showTransacions &&
          reportTS.map((transaction, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              {true && (
                <BankTransactionDocCard
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
          {
            !showTransacions &&
            <h1 className="text-2xl my-10 text-center">There are no transactions for this User</h1>
          }
      </div>
    </section>
  );
};

export default ReportUserBankTransactions;
