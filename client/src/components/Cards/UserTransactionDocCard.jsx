/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserTransactionDocCard = ({
  id,
  username,
  userID,
  type,
  amount,
  date,
}) => {
  const [showReceive, setShowReceive] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (type === "Sent") setShowReceive(false);
  }, [type]);

  return (
    <div>
      <div className="w-full flex flex-wrap justify-between rounded-md shadow-md p-6 m-2">
        <div className="flex flex-wrap items-center justify-center gap-10 w-full">
          {showReceive && (
            <p className="bg-slate-200 font-bold text-blue-400 text-center py-2 rounded-md shadow-md w-1/4">
              From : {username}
            </p>
          )}
          {!showReceive && (
            <p className="bg-slate-200 font-bold text-blue-400 text-center py-2 rounded-md shadow-md w-1/4">
              To : {username}
            </p>
          )}
          {showReceive && (
            <p className="bg-gradient-to-r from-green-400 to-green-600 text-slate-200 text-center py-2 rounded-md shadow-md w-1/4">
              {type} : {amount}
            </p>
          )}
          {!showReceive && (
            <p className="bg-gradient-to-r from-red-400 to-red-600 text-slate-200 text-center py-2 rounded-md shadow-md w-1/4">
              {type} : {amount}
            </p>
          )}
          <p className="bg-slate-200 text-slate-700 text-center text-sm py-2 rounded-md shadow-md w-1/4">
            {date} 12:07:58
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserTransactionDocCard;
