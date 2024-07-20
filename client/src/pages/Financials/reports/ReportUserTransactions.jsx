/* eslint-disable no-unused-vars */
import React from "react";
import BiaxialLineChart from "../../../components/Charts/BiAxialLineChart";
import SRBar from "../../../sections/reports/Charts/SRBar";
import ReportUserUserTransactions from "../../../sections/reports/tables/ReportUserUserTransactions";

const ReportUserTransactions = () => {
  const totalSend = 1000;
  const totalReceive = 375;

  return (
    <div className="justify-center items-center">
      <BiaxialLineChart headerText={"Transactions' overview"} />
      <SRBar
        totalSend={totalSend}
        totalReceive={totalReceive}
        subHead={""}
      />
      <div className="flex flex-wrap align-center justify-center items-center">
        <ReportUserUserTransactions />
      </div>
    </div>
  );
};

export default ReportUserTransactions;