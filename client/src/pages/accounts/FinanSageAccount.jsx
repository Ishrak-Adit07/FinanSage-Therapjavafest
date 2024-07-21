/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import FSAccountDetails from '../../sections/accounts/FSAccountDetails';
import FSAccountTransactions from '../../sections/accounts/FSAccountTransactions';
import { RECENT_TRANSACTIONS } from '../../constants';
import Bank2FSShift from '../../sections/accounts/Bank2FSShift';
import FS2BankShift from '../../sections/accounts/FS2BankShift';

const FinanSageAccount = () => {
  const [loading, setLoading] = useState(true);

  let fsTS = RECENT_TRANSACTIONS;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className='card w-full'>
      <div>
        {loading && (
          <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>
        )}
        {!loading && (
          <div>
            <h1 className='text-3xl text-slate-500 text-center text-bold'>FinanSage User Account</h1>
            <FSAccountDetails />
            <FS2BankShift />
            <Bank2FSShift />
            <FSAccountTransactions fsTS={fsTS}/>
          </div>
        )}
      </div>
    </section>
  );
};

export default FinanSageAccount;
