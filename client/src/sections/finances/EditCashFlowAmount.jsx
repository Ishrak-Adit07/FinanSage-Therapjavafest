/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const EditCashFlowAmount = ({id}) => {
  //UserContext
  const { setUser } = useContext(UserContext);

  //UseNavigate
  const navigate = useNavigate();

  // Error state
  const [error, setError] = useState(null);

  const [newAmount, setNewAmount] = useState();

  const editCashFlowAmount = (e) => {
    e.preventDefault();
    console.log(newAmount);
    setNewAmount();
    navigate("/user/dashboard");
  };

  return (
    <div>
      <div className="flex flex-wrap align-center my-10">
        <input
          type="number"
          placeholder="New Amount"
          className="xinput w-3/4"
          autoFocus
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
        />

        <button className="chbtn" onClick={editCashFlowAmount}>
          Edit Amount
        </button>
      </div>
    </div>
  );
};

export default EditCashFlowAmount;
