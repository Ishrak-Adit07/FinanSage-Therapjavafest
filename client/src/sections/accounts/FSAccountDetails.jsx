/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const FSAccountDetails = () => {
  let finanSageAccountDetails = {
    name: "Haymitch Abernathy",
    accID: "7373837362883828",
    balance: 1275.95,
  };

  return (
    <section className="card w-full flex flex-wrap justify-center items-center">
      <div>
        {
          <div className="w-full justify-center items-center">
            <h1 className="text-4xl text-bold text-slate-700 text-center my-2">
              {finanSageAccountDetails.name}
            </h1>
            <h1 className="text-2xl text-bold text-slate-700 text-center my-2">
              Account ID: {finanSageAccountDetails.accID}
            </h1>
            <h1 className="text-2xl text-bold text-slate-700 text-center my-2">
              Balance: {finanSageAccountDetails.balance}
            </h1>
          </div>
        }
      </div>
    </section>
  );
};

export default FSAccountDetails;
