/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Subscribe from "../../components/Buttons/Subscribe";
import BiaxialLineChart from "../../components/Charts/BiAxialLineChart";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CashGraph = () => {
  const handleTargetContact = () => {
    console.log("This is for contact");
  };

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
            <h1 className="pb-12 text-4xl font-thin text-slate-700 tracking-tight lg:mt-16 lg:text-4xl xl:text-6xl">
              Wallet cash Graph
            </h1>

            <BiaxialLineChart headerText={"User Cashflow Overview"}/>

            <div className="flex items-center justify-center gap-5 mt-10 w-full">
              <Subscribe
                text={"Download CV"}
                onClickAction={handleTargetContact}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CashGraph;
