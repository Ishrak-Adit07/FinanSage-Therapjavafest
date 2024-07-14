/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { USER_BUDGETS } from '../../../constants';

const findByTitle = (title) => {
  return USER_BUDGETS.find(budget => budget.title === title);
};

const BudgetDetails = ({title}) => {

  const resultByTitle = findByTitle(title);

  return (
    <div>
      <p>{resultByTitle.title}</p>
      <p>{resultByTitle.balance}</p>
      <p>{resultByTitle.description}</p>
    </div>
  );
}

export default BudgetDetails;