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
    <div className='mt-10 py-10 bg-gradient-to-r from-slate-200 to-indigo-400 w-1/2 rounded-lg shadow-lg'>
      {false && <h1 className='text-6xl text-bold text-slate-700 text-center my-10'>Wallet Details</h1>}
      <h1 className='text-6xl text-bold text-slate-700 text-center mb-6'>{resultByID.name}</h1>
      <h1 className='text-4xl text-bold text-slate-700 text-center my-2'>Balance: {resultByID.balance} {resultByID.currency}</h1>
    </div>
  );
}

export default WalletDetails;