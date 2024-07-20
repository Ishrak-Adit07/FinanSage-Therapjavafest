/* eslint-disable no-unused-vars */
import React from "react";
import BiaxialLineChart from "../../../components/Charts/BiAxialLineChart";
import IEBar from "../../../sections/reports/Charts/IEBar";
import ReportPeriodicalCashFlows from "../../../sections/reports/tables/ReportPeriodicalCashFlows";
import ReportPeriodicalTransactions from "../../../sections/reports/tables/ReportPeriodicalTransactions";

const ReportMonthly = () => {
  const totalIncome = 1000;
  const totalExpense = 375;
  const date = "20-17-2024";

  return (
    <div className="justify-center items-center">
      <BiaxialLineChart headerText={"This month's spending overview"} />
      <IEBar totalIncome={totalIncome} totalExpense={totalExpense} subHead={"in this time period"}/>
      <div className="flex flex-wrap align-center justify-center items-center">
        <ReportPeriodicalCashFlows date={date} period={"month"}/>
        <ReportPeriodicalTransactions date={date} period={"month"}/>
      </div>
    </div>
  );
};

export default ReportMonthly;
