/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { PropContext } from '../../../contexts/PropContext';

const WalletDetails = ({id}) => {

  const {props} = useContext(PropContext);

  const findByID = (id) => {
    return props.wallets.find(wallet => wallet.id === id);
  };

  const resultByID = findByID(id);

  return (
    <div className='mt-10 py-10 bg-gradient-to-r from-blue-400 to-purple-400 w-1/2 rounded-lg shadow-lg flex flex-col items-center justify-center'>
      {false && <h1 className='text-6xl text-bold text-slate-200 text-center my-10'>Wallet Details</h1>}
      <h1 className='text-6xl font-bold text-slate-200 text-center mb-6'>{resultByID.name}</h1>
      <h1 className='text-4xl font-semibold text-slate-700 bg-slate-200 p-2 rounded-lg shadow-md text-center my-2 w-3/4'>Balance : {resultByID.balance} {resultByID.currency}</h1>
    </div>
  );
}

export default WalletDetails;