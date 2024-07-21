/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BankAccountDetails from '../../sections/accounts/BankAccountDetails';
import BankAccountFunctions from '../../sections/accounts/BankAccountFunctions';
import BankAccountSettings from '../../sections/accounts/BankAccountSettings';
import BankAccountTransactions from '../../sections/accounts/BankAccountTransactions';
import { RECENT_TRANSACTIONS } from '../../constants';

const BankAccount = () => {
  const [loading, setLoading] = useState(true);

  const {id} = useParams();
  let bankTS = RECENT_TRANSACTIONS;

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
            <BankAccountDetails id={id}/>
            <BankAccountFunctions />
            <BankAccountTransactions bankTS={bankTS}/>
            <BankAccountSettings />
          </div>
        )}
      </div>
    </section>
  );
};

export default BankAccount;