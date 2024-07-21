/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../messages/Alert";
import { CURRENCIES } from "../../constants";

const CreateWalletForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  //Form data states
  const [formData, setFormData] = useState({
    walletName: "",
    currency: "",
    initialBalance: null,
  });

  //Handle Register
  const handleCreateWallet = async (e) => {
    e.preventDefault();

    try {
      //const responseData = await createWallet(formData.walletName, formData.currency, formData.initialBalance);

      const responseData = true;

      if (responseData) {
        console.log(formData);
        setError(null);
        navigate("/user/wallets");
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

        <select
          className="input mt-2"
          value={formData.currency}
          onChange={(e) => {
            setFormData({ ...formData, currency: e.target.value });
          }}
        >
          <option value="" disabled>
            Select Currency
          </option>
          {CURRENCIES.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>

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
