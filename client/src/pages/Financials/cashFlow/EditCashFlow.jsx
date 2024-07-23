/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import EditCashFlowWallet from "../../../sections/finances/EditCashFlowWallet";
import EditCashFlowAmount from "../../../sections/finances/EditCashFlowAmount";
import EditCashFlowType from "../../../sections/finances/EditCashFlowType";
import { useParams } from "react-router-dom";
import { PropContext } from "../../../contexts/PropContext";
import EditCashFlowForm from "../../../components/Forms/EditCashFlowForm";

const EditCashFlow = () => {

  const {props} = useContext(PropContext);

  let {type, id} = useParams();

  let typeIncome = false;
  if(type === "Income") typeIncome=true;

  return (
    <div className="">
      <EditCashFlowForm cashFlowID={id} typeIncome={typeIncome}/>
    </div>
  );
};

export default EditCashFlow;
