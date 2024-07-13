/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../../messages/Alert';
import { UserContext } from '../../contexts/UserContext';
import { registerUser } from '../../controllers/user.controller';

const Register = () => {

  //UserContext
  const {setUser} = useContext(UserContext);

  //Use Navigate
  const navigate = useNavigate();

  //Error state
  const [error, setError] = useState(null);

  //Form data states
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })


  //Handle Register
  const handleRegister = async(e) =>{
    e.preventDefault();
    //console.log(formData.email, formData.password, formData.confirmPassword);

    try {
      //const registerResponseData = await registerUser(formData.email, formData.password, formData.confirmPassword);

      const registerResponseData = true;

      if(registerResponseData){

        setUser({
          name: "Gale Hawthorne",
          email: formData.email,
        });

        navigate("/user/dashboard");

        setError(null);
      }
    } catch (e) {
      setError(e.message);
    }

    // setFormData({
    //   email:"",
    //   password:"",
    //   confirmPassword:""
    // })
  }


  return (
    <section className="card">

        <h1 className="title">Create new account</h1>

        <form onSubmit={handleRegister} className="justify-center items-center h-screen">

            <input type="text" 
                   placeholder="First name" 
                   className="input" 
                   autoFocus 
                   value={formData.firstName} 
                   onChange={(e)=>{setFormData({...formData, firstName: e.target.value})}} />
            
            <input type="text" 
                   placeholder="Last name" 
                   className="input" 
                   autoFocus 
                   value={formData.lastName} 
                   onChange={(e)=>{setFormData({...formData, lastName: e.target.value})}} />

            <input type="email" 
                   placeholder="Email address" 
                   className="input" 
                   autoFocus 
                   value={formData.email} 
                   onChange={(e)=>{setFormData({...formData, email: e.target.value})}} />

            <input type="password" 
                   placeholder="Password" 
                   className="input" 
                   value={formData.password}
                   onChange={(e)=>{setFormData({...formData, password: e.target.value})}} />

            <input type="password" 
                   placeholder="Confirm Password" 
                   className="input" 
                   value={formData.confirmPassword}
                   onChange={(e)=>{setFormData({...formData, confirmPassword: e.target.value})}} />

            <button type="submit" className="btn">Register</button>

            {error && <Alert msg={error}/>}
        </form>

    </section>
  );
}

export default Register;