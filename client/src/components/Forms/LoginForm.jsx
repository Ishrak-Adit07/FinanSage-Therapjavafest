/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Alert from "../../messages/Alert";
import Subscribe from "../Buttons/Subscribe";

const LoginForm = () => {
  //UserContext
  const { setUser } = useContext(UserContext);

  //UseNavigate
  const navigate = useNavigate();

  // Error state
  const [error, setError] = useState(null);

  // Form data states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Log in
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      //const loginResponseData = await loginUser(email, password);

      const loginResponseData = true;

      if (loginResponseData) {
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
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="justify-center items-center h-screen"
      >
        <input
          type="email"
          placeholder="Email address"
          className="input"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn">
          Login
        </button>
        <button className="btn mt-4" onClick={goToRegister}>
          Register
        </button>
        {error && <Alert msg={error} />}
      </form>
    </div>
  );
};

export default LoginForm;
