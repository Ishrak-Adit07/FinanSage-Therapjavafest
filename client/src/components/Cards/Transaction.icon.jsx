/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const TransactionIcon = ({name, icon}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{icon}</p>
    </div>
  );
}

export default TransactionIcon;