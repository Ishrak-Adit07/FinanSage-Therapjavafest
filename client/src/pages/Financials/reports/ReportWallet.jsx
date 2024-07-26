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

  return (
    <div className="justify-center items-center">
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
