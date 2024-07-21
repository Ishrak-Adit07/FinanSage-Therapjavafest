/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../messages/Alert";
import { BANKS } from "../../constants";

const CreateAccountForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  //Handle Register
  const handleCreateAccount = async (e) => {
    e.preventDefault();

    try {
      //const responseData = await registerUser(formData.email, formData.password, formData.confirmPassword);

      const responseData = true;

      if (responseData) {
        navigate("/user/accounts/bank");

        setError(null);
      }
    } catch (e) {
      setError(e.message);
    }
  };

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
          {BANKS.map((bank, index) => (
            <option key={index} value={bank.name}>
              {bank.name}
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
