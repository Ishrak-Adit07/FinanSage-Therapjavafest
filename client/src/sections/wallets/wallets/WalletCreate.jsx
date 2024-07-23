/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Subscribe from "../../../components/Buttons/Subscribe";
import { useNavigate } from "react-router-dom";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const WalletCreate = () => {
  const navigate = useNavigate();

  const handleCreateWalletButton = () => {
    navigate("/wallet/create");
  };

  return (
    <div className="layoutSection text-slate-200 pb-10">
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-wrap items-center justify-center"
      >
        <motion.div
          className="w-full py-4 lg:p-10 flex flex-wrap items-center justify-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <button
            className="w-full flex flex-wrap items-center justify-center"
            onClick={handleCreateWalletButton}
          >
            <div className="flex justify-center items-center w-1/2 bg-gradient-to-r from-blue-400 to-red-600 px-20 py-10 rounded-lg shadow-md tracking-wide">
              <h1 className="text-3xl text-center text-bold text-slate-200">
                Create New Wallet
              </h1>
            </div>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WalletCreate;
