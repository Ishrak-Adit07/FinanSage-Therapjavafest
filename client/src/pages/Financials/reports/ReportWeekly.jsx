/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BiaxialLineChart from "../../../components/Charts/BiAxialLineChart";
import IEBar from "../../../sections/reports/Charts/IEBar";
import ReportPeriodicalCashFlows from "../../../sections/reports/tables/ReportPeriodicalCashFlows";
import ReportPeriodicalTransactions from "../../../sections/reports/tables/ReportPeriodicalTransactions";
import { RECENT_CASHFLOWS, RECENT_TRANSACTIONS } from "../../../constants";
import Subscribe from "../../../components/Buttons/Subscribe";

const ReportWeekly = () => {
  const totalIncome = 1000;
  const totalExpense = 375;
  const [date, setDate] = useState("20-17-2024");

  let reportFlows = RECENT_CASHFLOWS;
  let reportTS = RECENT_TRANSACTIONS;

  return (
    <div className="justify-center items-center">
      <BiaxialLineChart headerText={"Weekly spending overview"} />
      <IEBar
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        subHead={"in this time period"}
      />
      <div className="flex flex-wrap align-center justify-center items-center">
        <ReportPeriodicalCashFlows
          date={date}
          period={"week"}
          reportFlows={reportFlows}
        />
        <ReportPeriodicalTransactions
          date={date}
          period={"week"}
          reportTS={reportTS}
        />
      </div>
    </div>
  );
};

export default ReportWeekly;
