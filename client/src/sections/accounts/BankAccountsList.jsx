/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { BANK_ACCOUNTS } from '../../constants';
import BankAccountCard from '../../components/Cards/BankAccountCard';

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const BankAccountList = () => {
  return (
    <div className="text-slate-200 border-b border-neutral-900 pb-4 items-center py-4 my-4 lg:items-start">
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-wrap justify-center lg:justify-start"
      >
        {BANK_ACCOUNTS.map((bank, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-1/2 items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <BankAccountCard  BankName={bank.BankName} AccID={bank.AccID} Balance={bank.Balance}/>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default BankAccountList;