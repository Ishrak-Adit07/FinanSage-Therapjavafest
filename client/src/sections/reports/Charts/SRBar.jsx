/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import StraightAnglePieChart from "../../../components/Charts/StraightAnglePieChart";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const SRBar = ({ totalSend, totalReceive, subHead }) => {
  return (
    <div className="layoutSection pb-4 mt-40 align-center items-center justify-center">
      <h1 className="text-slate-900 text-4xl text-center">User Transaction Comparison</h1>
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
          <div className="flex flex-col text-slate-700 text-2xl items-center">
            <p>Sent: {totalSend}</p>
          </div>
        </motion.div>

        <motion.div
          className="w-1/3 py-4 lg:p-10"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <div className="">
            <StraightAnglePieChart headerText={"Send-Receive Bar Graph"} />
          </div>
        </motion.div>

        <motion.div
          className="w-1/4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col text-slate-700 text-2xl items-center">
            <p>Received: {totalReceive}</p>
          </div>
        </motion.div>
      </motion.div>
      </div>
    </div>
  );
};

export default SRBar;
