/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BankAccountDetails from '../../sections/accounts/BankAccountDetails';
import BankCashFlow from '../../sections/finances/BankCashFlow';

const BankAccount = () => {
  const [loading, setLoading] = useState(true);

  const {id} = useParams();

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
            <BankCashFlow />
          </div>
        )}
      </div>
    </section>
  );
};

export default BankAccount;