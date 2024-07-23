/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EnumContext } from "../../contexts/EnumContext";
import { PropContext } from "../../contexts/PropContext";
import Alert from "../../messages/Alert";

const CreateBudgetForm = () => {
  const navigate = useNavigate();

  const { setProps } = useContext(PropContext);
  const { enums } = useContext(EnumContext);

  const [formData, setFormData] = useState({
    budgetName: "",
    currency: "",
    budget: "",
  });
  const [error, setError] = useState(null);

  //Handle Register
  const handleCreateBudget = async (e) => {
    e.preventDefault();

    try {
      //const responseData = await createWallet(formData.walletName, formData.currency, formData.initialBalance);

      const responseData = true;

      if (responseData) {
        setError(null);
        navigate("/user/budgets");
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleCreateBudget}
        className="justify-center items-center h-screen"
      >
        <input
          type="text"
          placeholder="Name of Budget"
          className="input"
          autoFocus
          value={formData.budgetName}
          onChange={(e) => {
            setFormData({ ...formData, budgetName: e.target.value });
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
          placeholder="Budget"
          className="input"
          value={formData.budget}
          onChange={(e) => {
            setFormData({ ...formData, budget: e.target.value });
          }}
        />

        <button type="submit" className="btn">
          Create Budget
        </button>

        {error && <Alert msg={error} />}
      </form>
    </div>
  );
};

export default CreateBudgetForm;
