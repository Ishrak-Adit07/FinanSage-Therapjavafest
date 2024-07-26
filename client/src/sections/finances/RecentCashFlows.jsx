/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { RECENT_CASHFLOWS } from "../../constants";
import CashFlowDocCard from "../../components/Cards/CashFlowDocCard";

const RecentCashFlows = () => {
  const [loading, setLoading] = useState(true);
  const [showCashFlows, setShowCashFlows] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
      if (RECENT_CASHFLOWS.length === 0) setShowCashFlows(false);
    }, 1000);
  }, []);

  return (
    <section className="layoutSection w-full flex flex-col justify-center items-center my-40">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl my-10 text-center bg-gradient-to-r from-purple-400 to-blue-400 p-4 rounded-lg shadow-md text-slate-200">
          Recent Cashflows
        </h1>
        {showCashFlows &&
          RECENT_CASHFLOWS.map((cashFlow, index) => (
            <motion.div
              key={index}
              className="w-3/5"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              {true && (
                <CashFlowDocCard
                  className="w-full"
                  id={cashFlow.id}
                  walletName={cashFlow.wallet.name}
                  amount={cashFlow.amount}
                  date={cashFlow.date}
                  type={cashFlow.type}
                />
              )}
            </motion.div>
          ))}
        {!showCashFlows && (
          <h1 className="text-2xl my-10 text-center">
            There are no recent cashflows
          </h1>
        )}
      </div>
    </section>
  );
};

export default RecentCashFlows;
