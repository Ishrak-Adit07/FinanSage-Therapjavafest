/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import GradualText from "../../components/TextAnimations/GradualText";
import Subscribe from "../../components/buttons/Subscribe";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const catchPhrase = "Carpe Diem!";

const CashGraph = () => {
  const handleTargetContact = () => {
    console.log("This is for contact");
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
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='pb-12 text-4xl font-thin text-slate-700 tracking-tight lg:mt-16 lg:text-6xl xl:text-8xl'>
              Cash Graph
            </h1>
            <div className="bg-gradient-to-r from-red-400 via-purple-500 to-pink-400 bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl xl:text-4xl">
              <GradualText text={catchPhrase} />
            </div>
            <p className='my-2 max-w-xl py-6 font-light text-slate-700 tracking-tighter text-center lg:text-left'>
            This is for showing user wallets
            </p>
            <div className='flex items-center justify-center gap-5 mt-6 w-full lg:justify-start'>
            <Subscribe text={"Download CV"} onClickAction={handleTargetContact}/>
            <Subscribe text={"Let's talk"} onClickAction={handleTargetContact} />
            </div>
          </div>
        </motion.div >
      </motion.div>
    </div>
  );
}

export default CashGraph;