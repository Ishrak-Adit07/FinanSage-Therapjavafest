/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../messages/Alert";

const CreateWalletForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  //Form data states
  const [formData, setFormData] = useState({
    walletName: "",
    currency: "",
    initialBalance: null,
    userID: [],
  });

  //Handle Register
  const handleCreateWallet = async (e) => {
    e.preventDefault();

    try {
      //const registerResponseData = await registerUser(formData.email, formData.password, formData.confirmPassword);

      const registerResponseData = true;

      if (registerResponseData) {
        navigate("/user/dashboard");

        setError(null);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleCreateWallet}
        className="justify-center items-center h-screen"
      >
        <input
          type="text"
          placeholder="Name of wallet"
          className="input"
          autoFocus
          value={formData.walletName}
          onChange={(e) => {
            setFormData({ ...formData, walletName: e.target.value });
          }}
        />

        <input
          type="text"
          placeholder="Currency"
          className="input"
          value={formData.currency}
          onChange={(e) => {
            setFormData({ ...formData, currency: e.target.value });
          }}
        />

        <input
          type="number"
          placeholder="Initial balance"
          className="input"
          value={formData.initialBalance}
          onChange={(e) => {
            setFormData({ ...formData, initialBalance: e.target.value });
          }}
        />

        <button type="submit" className="btn">
          Create Wallet
        </button>

        {error && <Alert msg={error} />}
      </form>
    </div>
  );
};

export default CreateWalletForm;
