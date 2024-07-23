/* eslint-disable no-unused-vars */
import React from 'react';
import InterUserTransactions from '../../../sections/finances/InterUserTransaction';
import FS2BankShift from '../../../sections/accounts/FS2BankShift';
import Bank2FSShift from '../../../sections/accounts/Bank2FSShift';

const UserTransactions = () => {

  return (
    <div className=''>
      <FS2BankShift />
      <Bank2FSShift />
      <InterUserTransactions />
    </div>
  );
}

export default UserTransactions;