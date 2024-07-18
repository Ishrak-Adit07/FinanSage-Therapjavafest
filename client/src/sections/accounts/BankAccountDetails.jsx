/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { USER_WALLETS } from '../../constants';

const findByTitle = (title) => {
  return USER_WALLETS.find(wallet => wallet.title === title);
};

const BankAccountDetails = ({title}) => {

  const resultByTitle = findByTitle(title);

  return (
    <div>
      <p>{resultByTitle.title}</p>
      <p>{resultByTitle.balance}</p>
      <p>{resultByTitle.description}</p>
    </div>
  );
}

export default BankAccountDetails;