/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BiaxialLineChart from "../../../components/Charts/BiAxialLineChart";
import IEBar from "../../../sections/reports/Charts/IEBar";
import ReportWalletCashFlows from "../../../sections/reports/tables/ReportWalletCashFlows";
import Subscribe from "../../../components/Buttons/Subscribe";
import { RECENT_CASHFLOWS, RECENT_TRANSACTIONS } from "../../../constants";

const ReportWallet = () => {
  const totalIncome = 1000;
  const totalExpense = 375;
  const [wallet, setWallet] = useState("");

  let reportFlows = RECENT_CASHFLOWS;

  const getWalletCashFlowReport = async () => {
    console.log(wallet);
  };

  return (
    <div className="justify-center items-center">
      <div className="flex flex-col justify-center items-center">
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

        <Subscribe
          text={"Get Report"}
          onClickAction={getWalletCashFlowReport}
        />
      </div>

      <BiaxialLineChart headerText={"Spending overview of Wallet"} />
      <IEBar
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        subHead={"in this wallet"}
      />
      <div className="flex flex-wrap align-center justify-center items-center">
        <ReportWalletCashFlows wallet={wallet} reportFlows={reportFlows} />
      </div>
    </div>
  );
};

export default ReportWallet;
