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

  const getUserTSReport = async () => {
    console.log(user2);
  };

  return (
    <div className="justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl text-slate-500 text-center my-10">
          Friend User ID
        </h1>
        <input
          type="text"
          placeholder="Friend User ID"
          className="input"
          autoFocus
          value={user2}
          onChange={(e) => setUser2(e.target.value)}
        />

        <Subscribe text={"Get Report"} onClickAction={getUserTSReport} />
      </div>
      <BiaxialLineChart headerText={"Transactions' overview"} />
      <SRBar totalSend={totalSend} totalReceive={totalReceive} subHead={""} />
      <div className="flex flex-wrap align-center justify-center items-center">
        <ReportUserUserTransactions user2={user2} reportTS={reportTS} />
      </div>
    </div>
  );
};

export default ReportUserTransactions;
