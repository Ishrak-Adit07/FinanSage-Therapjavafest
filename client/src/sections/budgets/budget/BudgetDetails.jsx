/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { USER_BUDGETS } from '../../../constants';

const findByID = (id) => {
  return USER_BUDGETS.find(wallet => wallet.name === id);
};

const BudgetDetails = ({id}) => {

  const resultByID = findByID(id);

  return (
    <div className='pt-20'>
      {false && <h1 className='text-4xl text-bold text-slate-700 text-center my-10'>Wallet Details</h1>}
      <h1 className='text-4xl text-bold text-slate-700 text-center my-2'>{resultByID.name}</h1>
      <h1 className='text-2xl text-bold text-slate-700 text-center my-2'>Budget: {resultByID.budget} {resultByID.currency}</h1>
      <h1 className='text-2xl text-bold text-slate-700 text-center my-2'>Balance: {resultByID.balance} {resultByID.currency}</h1>
    </div>
  );
}

export default BudgetDetails;