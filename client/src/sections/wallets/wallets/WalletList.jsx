/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { motion } from "framer-motion";
import WalletCard from "../../../components/Cards/Wallet.Card";
import { PropContext } from "../../../contexts/PropContext";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const WalletList = () => {

  const {props} = useContext(PropContext);

  return (
    <div className="text-slate-200 border-b border-neutral-900 pb-4 items-center py-4 my-4 lg:items-start">
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-wrap justify-center lg:justify-start"
      >
        {props.wallets.map((wallet, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-1/2 items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <WalletCard
              id={wallet.id}
              name={wallet.name}
              currency={wallet.currency}
              cashFlowIDs={wallet.cashFlowIDs}
              balance={wallet.balance}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WalletList;
