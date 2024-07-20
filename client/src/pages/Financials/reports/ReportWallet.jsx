/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BiaxialLineChart from "../../../components/Charts/BiAxialLineChart";
import IEBar from "../../../sections/reports/Charts/IEBar";
import ReportWalletCashFlows from "../../../sections/reports/tables/ReportWalletCashFlows";

const ReportWallet = () => {
  const totalIncome = 1000;
  const totalExpense = 375;
  const [wallet, setWallet] = useState("");

  return (
    <div className="justify-center items-center">
      <h1 className="text-4xl text-slate-500 text-center my-10">
        Select Wallet
      </h1>
      <input
        type="text"
        placeholder="Select Wallet"
        className="input"
        autoFocus
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
      />
      <BiaxialLineChart headerText={"Spending overview"} />
      <IEBar
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        subHead={"in this wallet"}
      />
      <div className="flex flex-wrap align-center justify-center items-center">
        <ReportWalletCashFlows wallet={wallet} />
      </div>
    </div>
  );
};

export default ReportWallet;
