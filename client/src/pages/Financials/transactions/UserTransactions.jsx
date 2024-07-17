/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import AddCashFlow from '../../../sections/finances/AddCashFlow';
import InterWalletCashFlow from '../../../sections/finances/InterWalletCashFlow';
import BankCashFlow from '../../../sections/finances/BankCashFlow';
import InterUserTransactions from '../../../sections/finances/InterUserTransaction';

const UserTransactions = () => {

  return (
    <div className=''>
      <AddCashFlow />
      <InterWalletCashFlow />
      <InterUserTransactions />
      <BankCashFlow />
    </div>
  );
}

export default UserTransactions;