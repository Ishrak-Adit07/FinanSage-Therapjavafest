/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { USER_WALLETS } from "../../constants";

const EditCashFlowWallet = ({id}) => {
  //UserContext
  const { setUser } = useContext(UserContext);

  //UseNavigate
  const navigate = useNavigate();

  // Error state
  const [error, setError] = useState(null);

  // Form data states
  const [newWalletName, setNewWalletName] = useState("");

  const editCashFlowWallet = (e) => {
    e.preventDefault();
    console.log(newWalletName);
    setNewWalletName("");
    navigate("/user/dashboard");
  };

  return (
    <div>
      <div className="flex flex-wrap align-center my-10">
        <select
          className="xinput w-3/4 text-slate-700"
          value={newWalletName}
          onChange={(e) => setNewWalletName(e.target.value)}
        >
          <option value="" disabled>
            Select New Wallet
          </option>
          {USER_WALLETS.map((wallet, index) => (
            <option key={index} value={wallet.name}>
              {wallet.name}
            </option>
          ))}
        </select>

        <button className="chbtn" onClick={editCashFlowWallet}>
          Edit Wallet
        </button>
      </div>
    </div>
  );
};

export default EditCashFlowWallet;
