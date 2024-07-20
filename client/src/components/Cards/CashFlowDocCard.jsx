/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const CashFlowDocCard = ({ id, walletName, type, amount, date }) => {
  const navigate = useNavigate();

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
      <div className="straightCard w-full flex flex-col justify-between">
        <div>
          {walletName};{type};{amount};{date}
        </div>

        <div className="justify-between items-center">
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
