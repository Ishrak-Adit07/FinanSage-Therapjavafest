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
      <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
        <Subscribe text={"CashFlow Reports"} onClickAction={goToCashflowReports} />
      </div>
      <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
        <Subscribe text={"Transaction Reports"} onClickAction={goToTransactionReports} />
      </div>
    </div>
  );
}

export default AllReports;
