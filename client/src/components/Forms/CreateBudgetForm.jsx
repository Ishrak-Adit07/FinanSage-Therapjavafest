/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../messages/Alert";
import { CURRENCIES } from "../../constants";

const CreateBudgetForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  //Form data states
  const [formData, setFormData] = useState({
    budgetName: "",
    currency: "",
    budget: null,
  });

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
          {CURRENCIES.map((currency, index) => (
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
