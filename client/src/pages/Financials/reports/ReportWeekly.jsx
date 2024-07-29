/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BiaxialLineChart from "../../../components/Charts/BiAxialLineChart";
import IEBar from "../../../sections/reports/Charts/IEBar";
import ReportPeriodicalCashFlows from "../../../sections/reports/tables/ReportPeriodicalCashFlows";
import ReportPeriodicalTransactions from "../../../sections/reports/tables/ReportPeriodicalTransactions";
import { RECENT_CASHFLOWS, RECENT_USER_TRANSACTIONS } from "../../../constants";
import SimplePieChart from "../../../components/Charts/SimplePieChart";
import Footer from "../../../sections/Footer";

const ReportWeekly = () => {
  const totalIncome = 1000;
  const totalExpense = 375;
  const [date, setDate] = useState("20-17-2024");

  let reportFlows = RECENT_CASHFLOWS;
  let reportTS = RECENT_USER_TRANSACTIONS;

  const data01 = [
    { name: "Salary", value: 400 },
    { name: "Gift", value: 300 },
    { name: "Tution", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  const data02 = [
    { name: "Health", value: 2400 },
    { name: "Groceries", value: 4567 },
    { name: "Market", value: 1398 },
    { name: "Transport", value: 9800 },
    { name: "Group E", value: 3908 },
    { name: "Group F", value: 4800 },
    { name: "Group E", value: 3908 },
    { name: "Group F", value: 4800 },
    { name: "Group E", value: 3908 },
    { name: "Group F", value: 4800 },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <BiaxialLineChart headerText={"Weekly spending overview"} />
      <IEBar
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        subHead={"in this time period"}
      />

      <div className="flex flex-wrap align-center justify-center items-center w-full">
        <ReportPeriodicalCashFlows
          date={date}
          period={"week"}
          reportFlows={reportFlows}
        />
      </div>

      <div className="w-3/4 flex flex-wrap items-center justify-center my-20">
        <div className="w-1/2">
          <SimplePieChart
            headerText={"Income Purpose Analysis"}
            pieColor={"#08a6a3"}
            data={data01}
          />
        </div>
        <div className="w-1/2">
          <SimplePieChart
            headerText={"Expense Purpose Analysis"}
            pieColor={"#f02b11"}
            data={data02}
          />
        </div>
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default ReportWeekly;
