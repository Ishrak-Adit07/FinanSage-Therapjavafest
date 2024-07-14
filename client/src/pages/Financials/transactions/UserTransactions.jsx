/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AddCashFlow from '../../../sections/finances/AddCashFlow';
import InterWalletCashFlow from '../../../sections/finances/InterWalletCashFlow';
import BankCashFlow from '../../../sections/finances/BankCashFlow';

const UserTransactions = () => {

  return (
    <div className=''>
      <AddCashFlow />
      <InterWalletCashFlow />
      <BankCashFlow />
    </div>
  );
}

export default UserTransactions;