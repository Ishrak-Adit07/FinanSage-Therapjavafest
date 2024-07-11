/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Success = ({ msg }) => {
  return (
    <div className='bg-green-500 text-white p-2 rounded-md mt-6 text-sm justify-center items-center flex mb-4 mt-4'>
      <i className="fa-solid fa-circle-check"></i>
      <span>{msg}</span>
    </div>
  );
}

export default Success;