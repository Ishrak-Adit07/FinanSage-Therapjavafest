/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { USER_BUDGETS } from '../../../constants';
import WalletCard from '../../../components/Cards/Wallet.Card';

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const BudgetList = () => {
  return (
    <div className="text-slate-200 border-b border-neutral-900 pb-4 items-center py-4 my-4 lg:items-start">
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-wrap justify-center lg:justify-start"
      >
        {USER_BUDGETS.map((project, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-1/2 items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <WalletCard Title={project.title} Balance={project.balance} Image={project.image} GithubLink={project.githubLink} Descroption={project.description} TechStack={project.technologies} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default BudgetList;