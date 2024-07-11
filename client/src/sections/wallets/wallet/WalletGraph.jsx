/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import GradualText from "../../../components/TextAnimations/GradualText";
import Subscribe from "../../../components/Buttons/Subscribe";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const catchPhrase = "Carpe Diem!";

const WalletGraph = () => {
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
              Wallet cash graph
            </h1>
            <div className="bg-gradient-to-r from-red-400 via-purple-500 to-pink-400 bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl xl:text-4xl">
              <GradualText text={catchPhrase} />
            </div>
            <p className='my-2 max-w-xl py-6 font-light text-slate-700 tracking-tighter text-center lg:text-left'>
            This is for showing user wallets
            </p>
            <div className='flex items-center justify-center gap-5 mt-6 w-full lg:justify-start'>
              <Subscribe text={"Download CV"} />
              <motion.button 
                whileTap={{ scale: 0.3 }}
                whileHover={{ scale: 1.1, backgroundColor: 'whitesmoke', color: 'black' }}
                transition={{ bounceDamping: 20, bounceStiffness: 600 }}
                className='bg-gradient-to-r from-red-400 to-purple-400 w-1/5 py-1 rounded-lg text-sm lg:text-2sm text-gray-900 font-lg tracking-wide mt-2 ml-1 mb-2'
                onClick={handleTargetContact}
              >
                Let's talk!
              </motion.button>
            </div>
          </div>
        </motion.div >
      </motion.div>
    </div>
  );
}

export default WalletGraph;