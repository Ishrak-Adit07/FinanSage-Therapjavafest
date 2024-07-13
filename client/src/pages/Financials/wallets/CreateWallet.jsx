/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import Alert from '../../../messages/Alert';
import CreateWalletForm from '../../../components/Forms/CreateWalletForm';

const CreateWallet = () => {

  return (
    <section className="card">

        <h1 className="title">Create new wallet</h1>

        <CreateWalletForm />

    </section>
  );
}

export default CreateWallet;