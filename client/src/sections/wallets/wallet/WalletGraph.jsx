/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import StraightAnglePieChart from "../../../components/Charts/StraightAnglePieChart";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const WalletGraph = () => {

  return (
    <div className="layoutSection text-slate-200 border-b border-neutral-900 pb-4">
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-wrap items-center justify-center"
      >
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col items-center w-full">
            {false && <h1 className="pb-12 text-4xl font-thin text-slate-700 tracking-tight lg:mt-16 lg:text-4xl xl:text-6xl">
              Wallet Cash Graph
            </h1>}

            <StraightAnglePieChart headerText={"Wallet Cashflow Overview"}/>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WalletGraph;
