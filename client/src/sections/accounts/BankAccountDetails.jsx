/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BANK_ACCOUNTS } from '../../constants';

const findByID = (id) => {
  return BANK_ACCOUNTS.find(account => account.id === id);
};

const BankAccountDetails = ({id}) => {

  const resultByID = findByID(id);

  return (
    <div>
      {false && <h1 className='text-4xl text-bold text-slate-700 text-center my-10'>Account Details</h1>}
      <h1 className='text-4xl text-bold text-slate-700 text-center my-2'>{resultByID.BankName}</h1>
      <h1 className='text-2xl text-bold text-slate-700 text-center my-2'>Account ID: {resultByID.AccID}</h1>
      <h1 className='text-2xl text-bold text-slate-700 text-center my-2'>Balance: {resultByID.Balance}</h1>
    </div>
  );
}

export default BankAccountDetails;