/* eslint-disable no-unused-vars */
import React from 'react';
import Subscribe from '../../../components/Buttons/Subscribe';
import { useNavigate } from 'react-router-dom';

const AllReports = () => {

    const navigate = useNavigate();

    const goToCashflowReports = () =>{
        navigate("/user/report/cashFlow");
    }

    const goToTransactionReports = () =>{
        navigate("/user/report/transaction");
    }
  return (
    <div>
      <div className="flex items-center justify-center gap-5 mt-6 w-full">
        <button className='btn' onClick={goToCashflowReports}>Cashflow Reports</button>
      </div>
      <div className="flex items-center justify-center gap-5 mt-6 w-full">
        <button className='btn' onClick={goToTransactionReports}>Transaction Reports</button>
      </div>
    </div>
  );
}

export default AllReports;
