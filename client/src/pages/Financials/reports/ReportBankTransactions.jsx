/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BiaxialLineChart from "../../../components/Charts/BiAxialLineChart";
import DCBar from "../../../sections/reports/Charts/DCBar";
import ReportUserBankTransactions from "../../../sections/reports/tables/ReportUserBankTransactions";
import { RECENT_TRANSACTIONS } from "../../../constants";
import Subscribe from "../../../components/Buttons/Subscribe";

const ReportBankTransactions = () => {
  const totalCredit = 1000;
  const totalWithdrawal = 375;
  const [bank, setBank] = useState("");

  let reportTS = RECENT_TRANSACTIONS;

  return (
    <div className="justify-center items-center">
      <BiaxialLineChart headerText={"Transactions' overview"} />
      <DCBar
        totalCredit={totalCredit}
        totalWithdrawal={totalWithdrawal}
        subHead={"of this user"}
      />
      <div className="flex flex-wrap align-center justify-center items-center">
        <ReportUserBankTransactions bank={bank} reportTS={reportTS} />
      </div>
    </div>
  );
};

export default ReportBankTransactions;
