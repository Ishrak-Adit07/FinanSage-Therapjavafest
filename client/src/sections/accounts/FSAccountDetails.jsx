/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { PropContext } from "../../contexts/PropContext";

const FSAccountDetails = () => {

  const { props } = useContext(PropContext);

  let finanSageAccountDetails = {
    name: "Haymitch Abernathy",
    accID: "7373837362883828",
    balance: 1275.95,
  };

  return (
    <section className="card w-full flex flex-wrap justify-center items-center">
      <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-4 px-20 rounded-lg shadow-md">
        {
          <div className="w-full text-slate-200 flex flex-col justify-center items-center gap-5">
            <h1 className="text-4xl text-bold text-center">
              {props.fsAccount.username}
            </h1>
            <h1 className="text-2xl text-bold text-center my-2">
              Account ID: {props.fsAccount.accID}
            </h1>
            <h1 className="text-2xl text-bold text-center my-2">
              Balance: {props.fsAccount.balance}
            </h1>
          </div>
        }
      </div>
    </section>
  );
};

export default FSAccountDetails;
