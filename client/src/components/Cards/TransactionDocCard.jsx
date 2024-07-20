/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TransactionDocCard = ({ walletName, type, amount, date }) => {
  return (
    <div>
      <div className="straightCard w-full flex flex-col justify-between">
        <div>
          {walletName};{type};{amount};{date}
        </div>

        <div className="justify-between items-center">
          <button className="fa-solid fa-house-chimney text-green-400" title="Edit"></button>
          <button className="fa-solid fa-house-chimney text-red-600" title="Delete"></button>
        </div>
      </div>
    </div>
  );
};

export default TransactionDocCard;
