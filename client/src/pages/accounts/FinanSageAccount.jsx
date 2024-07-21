/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FS2WalletShift from '../../sections/accounts/FS2WalletShift';
import Wallet2FSShift from '../../sections/accounts/Wallet2FSShift';
import FSAccountDetails from '../../sections/accounts/FSAccountDetails';
import FSAccountTransactions from '../../sections/accounts/FSAccountTransactions';
import { RECENT_TRANSACTIONS } from '../../constants';

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
            <FSAccountDetails />
            <FS2WalletShift />
            <Wallet2FSShift />
            <FSAccountTransactions fsTS={fsTS}/>
          </div>
        )}
      </div>
    </section>
  );
};

export default FinanSageAccount;
