/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import StraightAnglePieChart from "../../../components/Charts/StraightAnglePieChart";
import SimpleBarGraph from "../../../components/Charts/SimpleBarGraph";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const goToIncomePurposeAnalysis = () => {
  console.log("Income Purpose Analysis");
};

const goToExpensePurposeAnalysis = () => {
  console.log("Expense Purpose Analysis");
};

const IEBar = ({ totalIncome, totalExpense, subHead }) => {
  return (
    <div className="layoutSection pb-4 mt-40 align-center items-center justify-center mb-20">
      <h1 className="text-slate-900 text-4xl text-center">
        Cashflow Comparison
      </h1>
      <h1 className="text-slate-700 text-2xl text-center mt-2">{subHead}</h1>
      <div>
        <motion.div
          variants={gridSquareVariants}
          className="flex flex-wrap items-center justify-center"
        >
          <motion.div
            className="w-1/4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex flex-col text-slate-700 text-2xl items-center justify-center gap-5 mt-10">
              <p>Income: {totalIncome}</p>
              <button
                className="bg-gradient-to-r from-blue-400 to-purple-400 p-2 px-10 rounded-lg shadown-md text-sm"
                onClick={goToIncomePurposeAnalysis}
              >
                Purpose Analysis
              </button>
            </div>
          </motion.div>

          <motion.div
            className="w-1/3 py-4 lg:p-10"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <SimpleBarGraph headerText={"Income-Expense Bar Graph"} totalIncome={totalIncome} totalExpense={totalExpense}/>
          </motion.div>

          <motion.div
            className="w-1/4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex flex-col text-slate-700 text-2xl items-center justify-center gap-5 mt-10">
              <p>Expense: {totalExpense}</p>
              <button
                className="bg-gradient-to-r from-blue-400 to-purple-400 p-2 px-10 rounded-lg shadown-md text-sm"
                onClick={goToExpensePurposeAnalysis}
              >
                Purpose Analysis
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default IEBar;
