/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BiaxialLineChart from "../../../components/Charts/BiAxialLineChart";
import SRBar from "../../../sections/reports/Charts/SRBar";
import ReportUserUserTransactions from "../../../sections/reports/tables/ReportUserUserTransactions";
import Subscribe from "../../../components/Buttons/Subscribe";
import { RECENT_TRANSACTIONS } from "../../../constants";

const ReportUserTransactions = () => {
  const totalSend = 1000;
  const totalReceive = 375;
  const [user2, setUser2] = useState("");

  let reportTS = RECENT_TRANSACTIONS;

  return (
    <div className="justify-center items-center">
      <BiaxialLineChart headerText={"Transactions' overview"} />
      <SRBar totalSend={totalSend} totalReceive={totalReceive} subHead={""} />
      <div className="flex flex-wrap align-center justify-center items-center">
        <ReportUserUserTransactions user2={user2} reportTS={reportTS} />
      </div>
    </div>
  );
};

export default ReportUserTransactions;
