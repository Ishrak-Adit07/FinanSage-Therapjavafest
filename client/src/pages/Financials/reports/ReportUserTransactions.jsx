/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BiaxialLineChart from "../../../components/Charts/BiAxialLineChart";
import SRBar from "../../../sections/reports/Charts/SRBar";
import ReportUserUserTransactions from "../../../sections/reports/tables/ReportUserUserTransactions";

const ReportUserTransactions = () => {
  const totalSend = 1000;
  const totalReceive = 375;
  const [user2, setUser2] = useState("");

  return (
    <div className="justify-center items-center">
      <h1 className="text-4xl text-slate-500 text-center my-10">
        Select Other User
      </h1>
      <input
        type="text"
        placeholder="Select Other User"
        className="input"
        autoFocus
        value={user2}
        onChange={(e) => setUser2(e.target.value)}
      />
      <BiaxialLineChart headerText={"Transactions' overview"} />
      <SRBar
        totalSend={totalSend}
        totalReceive={totalReceive}
        subHead={""}
      />
      <div className="flex flex-wrap align-center justify-center items-center">
        <ReportUserUserTransactions user2={user2}/>
      </div>
    </div>
  );
};

export default ReportUserTransactions;