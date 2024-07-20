/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BiaxialLineChart from "../../../components/Charts/BiAxialLineChart";
import IEBar from "../../../sections/reports/Charts/IEBar";
import ReportDailyCashFlows from "../../../sections/reports/tables/ReportDailyCashFlows";
import ReportDailyTransactions from "../../../sections/reports/tables/ReportDailyTransactions";
import Subscribe from "../../../components/Buttons/Subscribe";
import { RECENT_CASHFLOWS, RECENT_TRANSACTIONS } from "../../../constants";

const ReportDaily = () => {
  const totalIncome = 1000;
  const totalExpense = 375;
  const [date, setDate] = useState("20-17-2024");

  let reportFlows = RECENT_CASHFLOWS;
  let reportTS = RECENT_TRANSACTIONS;

  const getDailyCashFlowReport = async () => {
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

        <Subscribe text={"Get Report"} onClickAction={getDailyCashFlowReport} />
      </div>

      <BiaxialLineChart headerText={"Spending overview"} />
      <IEBar
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        subHead={"in this time period"}
      />
      <div className="flex flex-wrap align-center justify-center items-center">
        <ReportDailyCashFlows date={date} reportFlows={reportFlows}/>
        <ReportDailyTransactions date={date} reportTS={reportTS}/>
      </div>
    </div>
  );
};

export default ReportDaily;
