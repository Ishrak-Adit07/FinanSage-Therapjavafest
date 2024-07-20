/* eslint-disable no-unused-vars */
import React from "react";
import BiaxialLineChart from "../../../components/Charts/BiAxialLineChart";
import IEBar from "../../../sections/reports/Charts/IEBar";
import ReportPeriodicalCashFlows from "../../../sections/reports/tables/ReportPeriodicalCashFlows";
import ReportPeriodicalTransactions from "../../../sections/reports/tables/ReportPeriodicalTransactions";

const ReportWeekly = () => {
  const totalIncome = 1000;
  const totalExpense = 375;
  const date = "20-17-2024";

  return (
    <div className="justify-center items-center">
      <BiaxialLineChart headerText={"This week's spending overview"} />
      <IEBar totalIncome={totalIncome} totalExpense={totalExpense} subHead={"in this time period"}/>
      <div className="flex flex-wrap align-center justify-center items-center">
        <ReportPeriodicalCashFlows date={date} period={"week"} />
        <ReportPeriodicalTransactions date={date} period={"week"} />
      </div>
    </div>
  );
};

export default ReportWeekly;
