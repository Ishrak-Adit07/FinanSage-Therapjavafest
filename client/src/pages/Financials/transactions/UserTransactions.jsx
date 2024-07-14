/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AddCashFlow from '../../../sections/finances/AddCashFlow';
import InterWalletCashFlow from '../../../sections/finances/InterWalletCashFlow';

const UserTransactions = () => {

  return (
    <div className=''>
      <AddCashFlow />
      <InterWalletCashFlow />
    </div>
  );
}

export default UserTransactions;