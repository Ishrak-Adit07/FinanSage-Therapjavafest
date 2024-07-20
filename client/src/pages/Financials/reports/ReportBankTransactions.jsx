/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BiaxialLineChart from "../../../components/Charts/BiAxialLineChart";
import DCBar from "../../../sections/reports/Charts/DCBar";
import ReportUserBankTransactions from "../../../sections/reports/tables/ReportUserBankTransactions";

const ReportBankTransactions = () => {
  const totalCredit = 1000;
  const totalWithdrawal = 375;
  const [bank, setBank] = useState("");

  return (
    <div className="justify-center items-center">
      <h1 className="text-4xl text-slate-500 text-center my-10">
        Select Bank
      </h1>
      <input
        type="text"
        placeholder="Select Wallet"
        className="input"
        autoFocus
        value={bank}
        onChange={(e) => setBank(e.target.value)}
      />
      <BiaxialLineChart headerText={"Transactions' overview"} />
      <DCBar
        totalCredit={totalCredit}
        totalWithdrawal={totalWithdrawal}
        subHead={"of this user"}
      />
      <div className="flex flex-wrap align-center justify-center items-center">
        <ReportUserBankTransactions bank={bank} />
      </div>
    </div>
  );
};

export default ReportBankTransactions;
