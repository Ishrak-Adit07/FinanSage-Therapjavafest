/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WALLET_EXPENSE_TYPES, WALLET_INCOME_TYPES } from '../../../constants';
import TransactionIcon from '../../../components/cards/Transaction.icon';
import Subscribe from '../../../components/buttons/Subscribe';
import ToggleButton from '../../../components/buttons/ToggleButton';

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const UserTransactions = () => {
  const [showExpense, setShowExpense] = useState(false);

  const handleTransactionToggle = () => {
    setShowExpense(!showExpense);
  };

  return (
    <div className='layoutSection text-slate-200 border-b border-neutral-900 pb-4'>
      <motion.div
        variants={gridSquareVariants}
        className='flex flex-wrap items-center justify-center lg:justify-start'
      >
        <motion.div
          className='w-full lg:w-1/2'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <ToggleButton />
          <button onClick={handleTransactionToggle} className='text-red-500'>Change</button>

          {showExpense && (
            <div className="text-slate-900 pb-4 items-center py-4 my-4 lg:items-start">
              <motion.div
                variants={gridSquareVariants}
                className="flex flex-wrap justify-center lg:justify-start"
              >
                {WALLET_EXPENSE_TYPES.map((expense, index) => (
                  <motion.div
                    key={index}
                    className="w-full lg:w-1/2 items-center justify-center"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  >
                    <TransactionIcon name={expense.name} icon={expense.icon} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {!showExpense && (
            <div className="text-slate-900 pb-4 items-center py-4 my-4 lg:items-start">
              <motion.div
                variants={gridSquareVariants}
                className="flex flex-wrap justify-center lg:justify-start"
              >
                {WALLET_INCOME_TYPES.map((income, index) => (
                  <motion.div
                    key={index}
                    className="w-full lg:w-1/2 items-center justify-center"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  >
                    <TransactionIcon name={income.name} icon={income.icon} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </motion.div>

        <motion.div
          className='w-full lg:w-1/2 py-4 lg:p-10'
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >

          <button onClick={handleTransactionToggle} className='text-red-500'>Change</button>

          {showExpense && (
            <div className="text-slate-900 pb-4 items-center py-4 my-4 lg:items-start">
              <motion.div
                variants={gridSquareVariants}
                className="flex flex-wrap justify-center lg:justify-start"
              >
                {WALLET_EXPENSE_TYPES.map((expense, index) => (
                  <motion.div
                    key={index}
                    className="w-full lg:w-1/2 items-center justify-center"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  >
                    <TransactionIcon name={expense.name} icon={expense.icon} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {!showExpense && (
            <div className="text-slate-900 pb-4 items-center py-4 my-4 lg:items-start">
              <motion.div
                variants={gridSquareVariants}
                className="flex flex-wrap justify-center lg:justify-start"
              >
                {WALLET_INCOME_TYPES.map((income, index) => (
                  <motion.div
                    key={index}
                    className="w-full lg:w-1/2 items-center justify-center"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  >
                    <TransactionIcon name={income.name} icon={income.icon} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default UserTransactions;