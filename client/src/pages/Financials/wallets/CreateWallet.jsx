/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import Alert from '../../../messages/Alert';
import CreateWalletForm from '../../../components/Forms/CreateWalletForm';

const CreateWallet = () => {

  //UserContext
  const {setUser} = useContext(UserContext);

  //Use Navigate
  const navigate = useNavigate();

  //Error state
  const [error, setError] = useState(null);

  //Form data states
  const [formData, setFormData] = useState({
    walletName: "",
    currency: "",
    initialBalance: null,
    userID: [],
  })


  //Handle Register
  const handleCreateWallet = async(e) =>{
    e.preventDefault();

    try {
      //const registerResponseData = await registerUser(formData.email, formData.password, formData.confirmPassword);

      const registerResponseData = true;

      if(registerResponseData){

        navigate("/user/dashboard");

        setError(null);
      }
    } catch (e) {
      setError(e.message);
    }
  }


  return (
    <section className="card">

        <h1 className="title">Create new wallet</h1>

        <CreateWalletForm />

    </section>
  );
}

export default CreateWallet;