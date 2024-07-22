/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { WALLET_EXPENSE_TYPES, WALLET_INCOME_TYPES } from "../../constants";

const EditCashFlowType = ({ typeIncome, id }) => {
  //UserContext
  const { setUser } = useContext(UserContext);

  //UseNavigate
  const navigate = useNavigate();

  // Error state
  const [error, setError] = useState(null);

  const [newType, setNewType] = useState("");

  const editCashFlowType = (e) => {
    e.preventDefault();
    console.log(typeIncome, id, newType);
    setNewType("");
    navigate("/user/dashboard");
  };

  return (
    <div>
      <div className="flex flex-wrap align-center my-10">
        {typeIncome && (
          <select
            className="xinput w-3/4"
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
            className="xinput w-3/4"
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

        <button className="chbtn" onClick={editCashFlowType}>
          Edit Type
        </button>
      </div>
    </div>
  );
};

export default EditCashFlowType;
