/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { USER_WALLETS } from '../../../constants';

const findByID = (id) => {
  return USER_WALLETS.find(wallet => wallet.name === id);
};

const WalletDetails = ({id}) => {

  const resultByID = findByID(id);

  return (
    <div>
      {false && <h1 className='text-4xl text-bold text-slate-700 text-center my-10'>Wallet Details</h1>}
      <h1 className='text-4xl text-bold text-slate-700 text-center my-2'>{resultByID.name}</h1>
      <h1 className='text-2xl text-bold text-slate-700 text-center my-2'>Balance: {resultByID.balance} {resultByID.currency}</h1>
    </div>
  );
}

export default WalletDetails;