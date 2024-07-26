/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CashFlowDocCard = ({ id, walletName, type, amount, date }) => {

  const [showIncome, setShowIncome] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if(type==="Expense") setShowIncome(false);
  }, [type]);

  const handleCashFlowEdit = () => {
    navigate(`/user/cashFlow/edit/${type}/${id}`);
  };

  const handleCashFlowDelete = () => {
    if (confirm("Are you sure you want to delete this transaction?")) {
      navigate("/user/dashboard");
    }
  };

  return (
    <div>
      <div className="w-full flex flex-wrap justify-between rounded-md shadow-md p-6 m-2">
        <div className="flex flex-wrap items-center justify-center gap-10 w-3/4">
          <p className="bg-slate-200 font-bold text-blue-400 text-center py-2 rounded-md shadow-md w-1/4">{walletName}</p>
          {showIncome && <p className="bg-gradient-to-r from-green-400 to-green-600 text-slate-200 text-center py-2 rounded-md shadow-md w-1/4">{type} : {amount}</p>}
          {!showIncome && <p className="bg-gradient-to-r from-red-400 to-red-600 text-slate-200 text-center py-2 rounded-md shadow-md w-1/4">{type} : {amount}</p>}
          <p className="bg-slate-200 text-slate-700 text-center text-sm py-2 rounded-md shadow-md w-1/4">{date} 12:07:58</p>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-5">
          <button 
            className="fa-solid fa-house-chimney text-green-400"
            title="Edit"
            onClick={handleCashFlowEdit}
          ></button>
          <button
            className="fa-solid fa-house-chimney text-red-600"
            title="Delete"
            onClick={handleCashFlowDelete}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default CashFlowDocCard;
