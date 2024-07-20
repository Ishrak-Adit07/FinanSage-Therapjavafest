/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import Subscribe from "../../../components/Buttons/Subscribe";

const CashFlowReports = () => {
  const navigate = useNavigate();

  const goToTodayReport = () => {
    navigate("/user/report/cashFlow/today");
  };

  const goToDailyReport = () => {
    navigate("/user/report/cashFlow/day");
  };

  const goToWeeklyReport = () => {
    navigate("/user/report/cashFlow/week");
  };

  const goToMonthlyReport = () => {
    navigate("/user/report/cashFlow/month");
  };

  const goToWalletReport = () => {
    navigate("/user/report/cashFlow/wallet");
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
        <Subscribe text={"Today's CashFlows"} onClickAction={goToTodayReport} />
      </div>
      <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
        <Subscribe text={"Daily CashFlows"} onClickAction={goToDailyReport} />
      </div>
      <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
        <Subscribe text={"Weekly CashFlows"} onClickAction={goToWeeklyReport} />
      </div>
      <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
        <Subscribe
          text={"Monthly CashFlows"}
          onClickAction={goToMonthlyReport}
        />
      </div>
      <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
        <Subscribe text={"Wallet CashFlows"} onClickAction={goToWalletReport} />
      </div>
    </div>
  );
};

export default CashFlowReports;
