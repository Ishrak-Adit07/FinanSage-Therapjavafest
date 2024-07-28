/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import BrushBarChart from "../../../components/Charts/BrushBarChart";
import BiaxialLineChart from "../../../components/Charts/BiAxialLineChart";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const WalletGraph = () => {
  return (
    <div className="layoutSection text-slate-200 my-10">
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
          <div className="flex flex-col items-center w-full my-20">
            <BrushBarChart headerText={"Wallet Brush Bar"} />
          </div>
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-wrap items-center justify-center my-20">
            <div className="flex flex-col items-center w-1/2">
              <BiaxialLineChart headerText={"Wallet Line Bar"} />
            </div>
            <div className="flex flex-col items-center w-1/2">
              <BiaxialLineChart headerText={"Wallet Line Bar"} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WalletGraph;
