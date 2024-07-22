/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import Subscribe from '../../components/Buttons/Subscribe';

const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

const BankAccountCreate = () => {

  const navigate = useNavigate();

  const handleCreateBankAccountButton = () =>{
    navigate("/user/account/bank/create");
  }

  return (
      <div className='layoutSection text-slate-200 border-b border-neutral-900 pb-4'>
      <motion.div 
        variants={gridSquareVariants}
        className='flex flex-wrap items-center justify-center'
      >
        <motion.div 
          className='w-full py-4 lg:p-10'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <div className='flex justify-center items-center w-full'>
            <Subscribe text={"Connect to a new account"} onClickAction={handleCreateBankAccountButton}/>
          </div>
        </motion.div >
      </motion.div>
      </div>
  );
}

export default BankAccountCreate;