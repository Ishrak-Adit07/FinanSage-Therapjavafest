/* eslint-disable no-unused-vars */
import React from "react";
import EditCashFlowWallet from "../../../sections/finances/EditCashFlowWallet";
import EditCashFlowAmount from "../../../sections/finances/EditCashFlowAmount";
import EditCashFlowType from "../../../sections/finances/EditCashFlowType";
import { useParams } from "react-router-dom";

const EditCashFlow = () => {

  let {typeIncome, id} = useParams();
  if(typeIncome === "Income") typeIncome=true;
  else typeIncome=false;

  return (
    <div className="">
      <EditCashFlowWallet id={id}/>
      <EditCashFlowAmount id={id}/>
      <EditCashFlowType typeIncome={typeIncome} id={id}/>
    </div>
  );
};

export default EditCashFlow;
