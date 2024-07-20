/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import IEBiaxialLineChart from "../../components/Charts/IEBiaxialLineChart";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CashGraph = () => {
  return (
    <div className="layoutSection text-slate-200 my-6 pb-4">
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
            <IEBiaxialLineChart headerText={"User Cashflow Overview"} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CashGraph;
