/* eslint-disable no-unused-vars */
import React from "react";
import BiaxialLineChart from "../../../components/Charts/BiAxialLineChart";
import DCBar from "../../../sections/reports/Charts/DCBar";
import ReportUserBankTransactions from "../../../sections/reports/tables/ReportUserBankTransactions";

const ReportBankTransactions = () => {
  const totalCredit = 1000;
  const totalWithdrawal = 375;

  return (
    <div className="justify-center items-center">
      <BiaxialLineChart headerText={"Transactions' overview"} />
      <DCBar
        totalCredit={totalCredit}
        totalWithdrawal={totalWithdrawal}
        subHead={"of this user"}
      />
      <div className="flex flex-wrap align-center justify-center items-center">
        <ReportUserBankTransactions />
      </div>
    </div>
  );
};

export default ReportBankTransactions;
