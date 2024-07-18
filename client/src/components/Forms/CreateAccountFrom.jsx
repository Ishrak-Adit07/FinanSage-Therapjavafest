/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../messages/Alert";

const CreateAccountForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  //Handle Register
  const handleCreateAccount = async (e) => {
    e.preventDefault();

    try {
      //const registerResponseData = await registerUser(formData.email, formData.password, formData.confirmPassword);

      const registerResponseData = true;

      if (registerResponseData) {
        navigate("/user/accounts/bank");

        setError(null);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const banks = ["Bank A", "Bank B", "Bank C"];

  const [bank, setBank] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [accPin, setAccPin] = useState("");

  return (
    <div>
      <form
        onSubmit={handleCreateAccount}
        className="justify-center items-center  text-slate-700"
      >
        <select
          className="input mt-2"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        >
          <option value="" disabled>
            Select a Bank
          </option>
          {banks.map((bankName, index) => (
            <option key={index} value={bankName}>
              {bankName}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Bank Account Number"
          className="input mt-2"
          value={bankAccount}
          onChange={(e) => setBankAccount(e.target.value)}
        />

        <input
          type="number"
          placeholder="Pin Number"
          className="input"
          autoFocus
          value={accPin}
          onChange={(e) => setAccPin(e.target.value)}
        />

        <button type="submit" className="btn mt-4">
          Connect
        </button>
        {error && <Alert msg={error} />}
      </form>
    </div>
  );
};

export default CreateAccountForm;
