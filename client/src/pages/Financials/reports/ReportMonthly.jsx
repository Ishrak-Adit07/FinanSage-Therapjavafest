/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BiaxialLineChart from "../../../components/Charts/BiAxialLineChart";
import IEBar from "../../../sections/reports/Charts/IEBar";
import ReportPeriodicalCashFlows from "../../../sections/reports/tables/ReportPeriodicalCashFlows";
import ReportPeriodicalTransactions from "../../../sections/reports/tables/ReportPeriodicalTransactions";
import Subscribe from "../../../components/Buttons/Subscribe";
import { RECENT_CASHFLOWS, RECENT_TRANSACTIONS } from "../../../constants";

const ReportMonthly = () => {
  const totalIncome = 1000;
  const totalExpense = 375;
  const [date, setDate] = useState("20-17-2024");

  let reportFlows = RECENT_CASHFLOWS;
  let reportTS = RECENT_TRANSACTIONS;

  const getMonthlyCashFlowReport = async () => {
    console.log(date);
  };

  return (
    <div className="justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl text-slate-500 text-center my-10">
          Select Date
        </h1>
        <input
          type="text"
          placeholder="Select Date"
          className="input"
          autoFocus
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <Subscribe
          text={"Get Report"}
          onClickAction={getMonthlyCashFlowReport}
        />
      </div>

      <BiaxialLineChart headerText={"Monthly spending overview"} />
      <IEBar
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        subHead={"in this time period"}
      />
      <div className="flex flex-wrap align-center justify-center items-center">
        <ReportPeriodicalCashFlows
          date={date}
          period={"month"}
          reportFlows={reportFlows}
        />
        <ReportPeriodicalTransactions
          date={date}
          period={"month"}
          reportTS={reportTS}
        />
      </div>
    </div>
  );
};

export default ReportMonthly;
