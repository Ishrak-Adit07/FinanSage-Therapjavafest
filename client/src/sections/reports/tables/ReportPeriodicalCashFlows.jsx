/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CashFlowDocCard from "../../../components/Cards/CashFlowDocCard";

const ReportPeriodicalCashFlows = ({ date, period, reportFlows }) => {
  const [showCashFlows, setShowCashFlows] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      if (reportFlows.length === 0) setShowCashFlows(false);
    }, 1000);
  }, [reportFlows]);

  return (
    <section className="w-full flex flex-col justify-center items-center my-10">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-slate-900 text-4xl text-center">
          Cashflow History
        </h1>
        <h1 className="text-slate-700 text-2xl text-center mt-2">
          in this time period
        </h1>
        {showCashFlows &&
          reportFlows.map((cashFlow, index) => (
            <motion.div
              key={index}
              className="w-full lg:w-1/2"
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
            There are no cashflows in this period
          </h1>
        )}
      </div>
    </section>
  );
};

export default ReportPeriodicalCashFlows;
