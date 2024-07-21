/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Subscribe from "../../../components/Buttons/Subscribe";
import { useState } from "react";
import { CURRENCIES } from "../../../constants";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const BudgetSettings = () => {
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);
  const handleShowSettings = () => {
    setShowSettings(!showSettings);
  };

  const [newBudgetName, setNewBudgetName] = useState("");
  const [newCurrency, setNewCurrency] = useState("");
  const [newBudget, setNewBudget] = useState();

  //   const handleBackToWallets = () => {
  //     navigate("/user/wallets");
  //   };

  const handleEditBudgetName = () => {
    console.log(newBudgetName);
    setNewBudgetName("");
  };

  const handleEditCurrency = () => {
    console.log(newCurrency);
    setNewCurrency("");
  };

  const handleEditBudget = () => {
    console.log(newBudget);
    setNewBudget();
  };

  //   const handleEditWallet = () => {
  //     console.log( newWalletName, newCurrency, newBudget );
  //     setNewWalletName("");
  //     setNewCurrency("");
  //     setNewBudget();
  //   };

  const handleDeleteWallet = () => {
    if (confirm("Are you sure you want to delete this wallet?")) {
      navigate("/user/wallets");
    }
  };

  return (
    <div className="layoutSection text-slate-700 border-neutral-900 pb-4 flex flex-col mt-10">
      <div className="flex flex-wrap items-center justify-center w-full">
              <Subscribe text={"Settings"} onClickAction={handleShowSettings} />
      </div>
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-wrap items-center justify-center"
      >
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col items-center">
            {showSettings && (
              <div className="flex flex-col items-center justify-center gap-5 mt-6 w-full">
                <div className="flex flex-wrap w-full items-center justify-center">
                  <input
                    type="text"
                    placeholder="Enter new name for wallet"
                    className="xinput w-1/2"
                    autoFocus
                    value={newBudgetName}
                    onChange={(e) => {
                      setNewBudgetName(e.target.value);
                    }}
                  />
                  <button className="chbtn" onClick={handleEditBudgetName}>
                    Edit Name
                  </button>
                </div>

                <div className="flex flex-wrap w-full items-center justify-center">
                  <input
                    type="number"
                    placeholder="Enter new budget for wallet"
                    className="xinput w-1/2"
                    value={newBudget}
                    onChange={(e) => {
                      setNewBudget(e.target.value);
                    }}
                  />
                  <button className="chbtn" onClick={handleEditBudget}>
                    Edit Budget
                  </button>
                </div>

                <div className="flex flex-wrap w-full items-center justify-center">
                  <select
                    className="xinput w-1/2"
                    value={newCurrency}
                    onChange={(e) => {
                      setNewCurrency(e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      Select New Currency
                    </option>
                    {CURRENCIES.map((currency, index) => (
                      <option key={index} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                  <button className="chbtn" onClick={handleEditCurrency}>
                    Edit Currency
                  </button>
                </div>

                <button className="chbtn" onClick={handleDeleteWallet}>
                  Delete Budget
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BudgetSettings;
