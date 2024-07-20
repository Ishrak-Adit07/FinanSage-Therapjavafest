/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Subscribe from "../../../components/Buttons/Subscribe";
import { useState } from "react";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const BudgetFunctions = () => {
  const navigate = useNavigate();

  const [showSettings, setShowSettings] = useState(false);
  const handleShowSettings = () => {
    setShowSettings(!showSettings);
  };

  const [newBudgetName, setNewBudgetName] = useState("");

  const handleBackToBudgets = () => {
    navigate("/user/budgets");
  };

  const handleEditBudgetName = () => {
    console.log(newBudgetName);
  };

  const handleDeleteBudget = () => {
    if (confirm("Are you sure you want to delete this budget?")) {
      navigate("/user/budgets");
    } else {
      navigate("/");
    }
  };

  const goToTransaction = () => {
    navigate("/user/budget/transactions");
  };

  return (
    <div className="layoutSection text-slate-200 border-b border-neutral-900 pb-4">
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-wrap items-center justify-center lg:justify-start"
      >
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
              <Subscribe
                text={"Add Transaction"}
                onClickAction={goToTransaction}
              />
            </div>

            <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
              <Subscribe text={"Settings"} onClickAction={handleShowSettings} />
            </div>

            {showSettings && (
              <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
                <input
                  type="text"
                  placeholder="Enter name for wallet"
                  className="input"
                  autoFocus
                  value={newBudgetName}
                  onChange={(e) => {
                    setNewBudgetName(e.target.value);
                  }}
                />
                <Subscribe
                  text={"Edit Name"}
                  onClickAction={handleEditBudgetName}
                />
                <Subscribe text={"Delete"} onClickAction={handleDeleteBudget} />
              </div>
            )}

            <Subscribe text={"Back"} onClickAction={handleBackToBudgets} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BudgetFunctions;
