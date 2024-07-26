/* eslint-disable no-unused-vars */
import React from "react";
import BiaxialLineChart from "../../../components/Charts/BiAxialLineChart";
import IEBar from "../../../sections/reports/Charts/IEBar";
import ReportDailyCashFlows from "../../../sections/reports/tables/ReportDailyCashFlows";
import ReportDailyTransactions from "../../../sections/reports/tables/ReportDailyTransactions";
import { RECENT_CASHFLOWS, RECENT_TRANSACTIONS } from "../../../constants";

const ReportToday = () => {
  const totalIncome = 1000;
  const totalExpense = 375;
  const date = "20-17-2024";

  let reportFlows = RECENT_CASHFLOWS;
  let reportTS = RECENT_TRANSACTIONS;

  return (
    <div className="justify-center items-center">
      <BiaxialLineChart headerText={"Today's spending overview"} />
      <IEBar
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        subHead={"today"}
      />
      <div className="flex flex-wrap align-center justify-center items-center">
        <ReportDailyCashFlows date={date} reportFlows={reportFlows} />
        <ReportDailyTransactions date={date} reportTS={reportTS} />
      </div>
    </div>
  );
};

export default ReportToday;
