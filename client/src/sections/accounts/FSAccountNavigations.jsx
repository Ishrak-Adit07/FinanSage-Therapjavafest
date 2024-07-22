/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Subscribe from "../../components/Buttons/Subscribe";

const FSAccountNavigations = () => {
  const navigate = useNavigate();

  const goToBankTransactions = () => {
    navigate("/user/transactions/fs/bank");
  };

  const goToSendMoney = () => {
    navigate("/user/transactions/send/money");
  };

  const goToMakePayment = () => {
    navigate("/user/transactions/make/pay");
  };

  const goToPayBill = () => {
    navigate("/user/transactions/bill/pay");
  };

  return (
    <section className="w-full text-center justify-center items-center my-10">
      <div>
        {
          <div className="w-full flex flex-col justify-center items-center">
            <button className="chbtn" onClick={goToSendMoney}>
              Send Money
            </button>

            <button className="chbtn" onClick={goToMakePayment}>
              Make Payment
            </button>

            <button className="chbtn" onClick={goToPayBill}>
              Pay Bill
            </button>

            <button className="chbtn" onClick={goToBankTransactions}>
              Bank Transactions
            </button>
          </div>
        }
      </div>
    </section>
  );
};

export default FSAccountNavigations;
