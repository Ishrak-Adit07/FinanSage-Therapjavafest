/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { PropContext } from '../../../contexts/PropContext';

const BudgetDetails = ({id}) => {

  const { props } = useContext(PropContext);
  const findByID = (id) => {
    return props.budgets.find(budget => budget.id === id);
  };

  const resultByID = findByID(id);

  return (
    <div className='mt-10 py-10 bg-gradient-to-r from-red-400 to-blue-300 w-1/2 rounded-lg shadow-lg'>
      {false && <h1 className='text-4xl text-bold text-slate-700 text-center my-10'>Wallet Details</h1>}
      <h1 className='text-4xl text-bold text-slate-700 text-center my-2'>{resultByID.name}</h1>
      <h1 className='text-2xl text-bold text-slate-700 text-center my-2'>Budget: {resultByID.budget} {resultByID.currency}</h1>
      <h1 className='text-2xl text-bold text-slate-700 text-center my-2'>Balance: {resultByID.balance} {resultByID.currency}</h1>
    </div>
  );
}

export default BudgetDetails; 