/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CashFlowDocCard = ({ id, walletName, type, amount, date }) => {
  const [showIncome, setShowIncome] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (type === "Expense") setShowIncome(false);
  }, [type]);

  const handleCashFlowEdit = () => {
    navigate(`/user/cashFlow/edit/${type}/${id}`);
  };

  const handleCashFlowDelete = () => {
    if (confirm("Are you sure you want to delete this record?")) {
      navigate("/user/dashboard");
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap items-center justify-center lg:justify-between rounded-md shadow-md p-4 md:p-6 m-2">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 w-full md:w-3/4">
          <p className="bg-slate-200 font-bold text-blue-400 text-center py-1 md:py-2 rounded-md shadow-md w-1/2 sm:w-1/3 lg:w-1/4">
            {walletName}
          </p>
          {showIncome && (
            <p className="bg-gradient-to-r from-green-400 to-green-600 text-slate-200 text-center py-1 md:py-2 rounded-md shadow-md w-1/2 sm:w-1/3 lg:w-1/4">
              {type} : {amount}
            </p>
          )}
          {!showIncome && (
            <p className="bg-gradient-to-r from-red-400 to-red-600 text-slate-200 text-center py-1 md:py-2 rounded-md shadow-md w-1/2 sm:w-1/3 lg:w-1/4">
              {type} : {amount}
            </p>
          )}
          <p className="bg-slate-200 text-slate-700 text-center text-xs md:text-sm py-1 md:py-2 rounded-md shadow-md w-1/2 sm:w-1/3 lg:w-1/4">
            {date} 12:07:58
          </p>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 md:gap-5 my-4 lg:my-0">
          <button
            className="fa-solid fa-house-chimney text-green-400 text-lg md:text-xl"
            title="Edit"
            onClick={handleCashFlowEdit}
          ></button>
          <button
            className="fa-solid fa-house-chimney text-red-600 text-lg md:text-xl"
            title="Delete"
            onClick={handleCashFlowDelete}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default CashFlowDocCard;
