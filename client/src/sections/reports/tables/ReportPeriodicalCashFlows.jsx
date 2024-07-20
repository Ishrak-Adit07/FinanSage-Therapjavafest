/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { RECENT_CASHFLOWS } from "../../../constants";
import CashFlowDocCard from "../../../components/Cards/CashFlowDocCard";

const ReportPeriodicalCashFlows = ({ date, period }) => {
  const [showCashFlows, setShowCashFlows] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      if (RECENT_CASHFLOWS.length === 0) setShowCashFlows(false);
    }, 1000);
  }, []);

  return (
    <section className="layoutSection w-full flex flex-col justify-center items-center my-10">
      <div>
      <h1 className="text-slate-900 text-4xl text-center">Cashflow History</h1>
      <h1 className="text-slate-700 text-2xl text-center mt-2">in this time period</h1>
        {showCashFlows &&
          RECENT_CASHFLOWS.map((transaction, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              {true && (
                <CashFlowDocCard
                  className="w-full"
                  id={"12345678"}
                  walletName={transaction.wallet.title}
                  amount={transaction.amount}
                  date={transaction.date}
                  type={transaction.type}
                />
              )}
            </motion.div>
          ))}
        {!showCashFlows && (
          <h1 className="text-2xl my-10 text-center">
            There are no cashflows in this period
          </h1>
        )}
      </div>
    </section>
  );
};

export default ReportPeriodicalCashFlows;
