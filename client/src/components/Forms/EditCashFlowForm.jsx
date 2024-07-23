/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropContext } from "../../contexts/PropContext";
import { WALLET_EXPENSE_TYPES, WALLET_INCOME_TYPES } from "../../constants";

const EditCashFlowForm = ({ cashFlowID, typeIncome }) => {
  //UseNavigate
  const navigate = useNavigate();

  const { props } = useContext(PropContext);

  const [newWalletID, setNewWalletID] = useState("");
  const [newAmount, setNewAmount] = useState();
  const [newType, setNewType] = useState("");
  const [error, setError] = useState(null);

  const editCashFlowWallet = (e) => {
    e.preventDefault();
    console.log(newWalletID, newType, newAmount);
    setNewWalletID("");
    setNewType("");
    setNewAmount("");

    // try {
    //     const responseData = await editCashFlowWallet(cashFlowID, newWalletID, newType, newAmount);
    //     if(responseData){

    //     }
    // } catch (e) {
    //     setError(e.message)
    // }

    setError("");
  };

  return (
    <div>
      <form onSubmit={editCashFlowWallet}>
        <div className="flex flex-col items-center justify-center my-10 gap-5">
          <select
            className="input w-3/4 text-slate-700"
            value={newWalletID}
            onChange={(e) => setNewWalletID(e.target.value)}
          >
            <option value="" disabled>
              Select New Wallet
            </option>
            {props.wallets.map((wallet, index) => (
              <option key={index} value={wallet.id}>
                {wallet.name}
              </option>
            ))}
          </select>

          {typeIncome && (
            <select
              className="input w-3/4"
              value={newType}
              onChange={(e) => setNewType(e.target.value)}
            >
              <option value="" disabled>
                Select Type
              </option>
              {WALLET_INCOME_TYPES.map((type, index) => (
                <option key={index} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          )}

          {!typeIncome && (
            <select
              className="input w-3/4"
              value={newType}
              onChange={(e) => setNewType(e.target.value)}
            >
              <option value="" disabled>
                Select Type
              </option>
              {WALLET_EXPENSE_TYPES.map((type, index) => (
                <option key={index} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          )}

          <input
            type="number"
            placeholder="New Amount"
            className="input w-3/4"
            autoFocus
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
          />

          <button className="chbtn" type="submit">
            Edit CashFlow
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCashFlowForm;
