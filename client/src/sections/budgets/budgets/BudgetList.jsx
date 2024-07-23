/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import BudgetCard from '../../../components/Cards/Budget.Card';
import { USER_BUDGETS } from '../../../constants';

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const BudgetList = () => {
  return (
    <div className="text-slate-200 my-20 items-center my-4">
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-wrap justify-center lg:justify-start"
      >
        {USER_BUDGETS.map((budget, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-1/2 flex flex-wrap items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <BudgetCard name={budget.name} currency={budget.currency} balance={budget.balance} budget={budget.budget} cashFlowIDs={budget.cashFlowIDs} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default BudgetList;