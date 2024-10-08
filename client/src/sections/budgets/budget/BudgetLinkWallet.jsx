/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { PropContext } from "../../../contexts/PropContext";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const BudgetLinkWallet = ({id}) => {
  const [showSettings, setShowSettings] = useState(false);
  const handleShowSettings = () => {
    setShowSettings(!showSettings);
  };

  const { props } = useContext(PropContext);
  const findByID = (id) => {
    return props.budgets.find(budget => budget.id === id);
  };

  const resultByID = findByID(id);

  const [linkWallet, setLinkWallet] = useState("");

  const handleLinkWallet = () => {
    console.log(linkWallet);
    setLinkWallet("");
  };


  return (
    <div className="layoutSection text-slate-200 border-neutral-900 pb-4 flex flex-col items-center mt-10">
      <button className="chbtn" onClick={handleShowSettings}>
        Link Wallets
      </button>

      {showSettings && (
        <div className="lg:w-4/5 w-full">
          <motion.div
            variants={gridSquareVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start w-full"
          >
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <h1 className="text-2xl text-slate-500 text-semibold text-left">
                Connected Wallets
              </h1>
              {resultByID.linkedWallets.map((wallet, index) => (
                <div key={index} value={wallet.name} className="text-slate-700">
                  <p>{wallet.name}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 py-4 lg:p-10"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              <select
                className="xinput w-full text-slate-700"
                value={linkWallet}
                onChange={(e) => {
                  setLinkWallet(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select Wallet to Connect
                </option>
                {props.wallets.map((wallet, index) => (
                  <option key={index} value={wallet.name}>
                    {wallet.name}
                  </option>
                ))}
              </select>
              <button className="chbtn mx-4" onClick={handleLinkWallet}>
                Connect
              </button>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BudgetLinkWallet;
