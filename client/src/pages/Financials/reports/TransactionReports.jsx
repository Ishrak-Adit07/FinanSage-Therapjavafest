/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import Subscribe from "../../../components/Buttons/Subscribe";

const TransactionReports = () => {
  const navigate = useNavigate();

  const goToBankTransactions = () => {
    navigate("/user/report/transactions/bank");
  };

  const goToUserTransactions = () => {
    navigate("/user/report/transactions/user");
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
        <Subscribe
          text={"Bank Transactions"}
          onClickAction={goToBankTransactions}
        />
      </div>
      <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
        <Subscribe
          text={"User Transactions"}
          onClickAction={goToUserTransactions}
        />
      </div>
    </div>
  );
};

export default TransactionReports;
