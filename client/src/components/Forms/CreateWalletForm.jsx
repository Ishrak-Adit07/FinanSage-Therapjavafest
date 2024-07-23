/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../messages/Alert";
import { PropContext } from "../../contexts/PropContext";
import { EnumContext } from "../../contexts/EnumContext";

const CreateWalletForm = () => {
  const navigate = useNavigate();

  const { setProps } = useContext(PropContext);
  const { enums } = useContext(EnumContext);

  const [formData, setFormData] = useState({
    walletName: "",
    currency: "",
    initialBalance: "",
  });
  const [error, setError] = useState(null);

  const handleCreateWallet = async (e) => {
    e.preventDefault();

    try {
      //const responseData = await createWallet(formData.walletName, formData.currency, formData.initialBalance);

      const responseData = true;

      if (responseData) {
        console.log(formData);

        // setProps({
        //   walets: responseData.wallets
        // });

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
          {enums.currencies.map((currency, index) => (
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
