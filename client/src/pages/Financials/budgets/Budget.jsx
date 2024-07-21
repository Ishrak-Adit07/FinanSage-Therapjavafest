/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BudgetDetails from '../../../sections/budgets/budget/BudgetDetails';
import BudgetFunctions from '../../../sections/budgets/budget/BudgetFunctions';
import BudgetSettings from '../../../sections/budgets/budget/BudgetSettings';
import BudgetGraph from '../../../sections/budgets/budget/BudgetGraph';

const Budget = () => {
  const [loading, setLoading] = useState(true);

  const {id} = useParams();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className='card w-full'>
      <div>
        {loading && (
          <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>
        )}
        {!loading && (
          <div>
            <BudgetDetails id={id}/>
            <BudgetFunctions />
            <BudgetGraph />
            <BudgetSettings />
          </div>
        )}
      </div>
    </section>
  );
};

export default Budget;