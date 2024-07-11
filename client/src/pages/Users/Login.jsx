/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Alert from '../../messages/Alert';
import { loginUser } from '../../controllers/user.controller';

const Login = () => {

  //UserContext
  const {setUser} = useContext(UserContext);

  //UseNavigate
  const navigate = useNavigate();

  // Error state
  const [error, setError] = useState(null);

  // Form data states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Log in
  const handleLogin = async(e) => {
    e.preventDefault();
    //console.log(email, password);

    try {
      //const loginResponseData = await loginUser(email, password);

      const loginResponseData = true;
      
      if(loginResponseData){

        setUser({
          name: "Gale Hawthorne",
          email,
        });

        navigate("/user/dashboard");
        setError(null);
      }
    } catch (err) {
      setError(err.message);
    }
    
    // setEmail("");
    // setPassword("");
  }

  return (
    <section className="card">

        <h1 className="title">Login to your account</h1>

        <form onSubmit={handleLogin} className="justify-center items-center h-screen">

            <input type="email" 
                   placeholder="Email address" 
                   className="input" 
                   autoFocus 
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)} />

            <input type="password"
                   placeholder="Password" 
                   className="input" 
                   value={password}
                   onChange={(e) => setPassword(e.target.value)} />

            <button type="submit" className="btn">Login</button>
            {error && <Alert msg={error}/>}
        </form>

    </section>
  );
}

export default Login;