/* eslint-disable no-unused-vars */
import React from 'react';
import CreateBudgetForm from '../../../components/Forms/CreateBudgetForm';

const CreateBudget = () => {

  return (
    <section className="card">

        <h1 className="title">Create New Budget</h1>

        <CreateBudgetForm />

    </section>
  );
}

export default CreateBudget;