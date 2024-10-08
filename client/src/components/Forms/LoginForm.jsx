/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import GradualText from "../TextAnimations/GradualText";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../../messages/Alert";
import { EnumContext } from "../../contexts/EnumContext";
import { PropContext } from "../../contexts/PropContext";
import { dummyLoginResponse } from "../../constants/responses";

const LoginForm = () => {
  //UserContext
  const { user, setUser } = useContext(UserContext);
  const { props, setProps } = useContext(PropContext);
  const { enums, setEnums } = useContext(EnumContext);

  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      //const loginResponseData = await loginUser(email, password);

      const loginResponseData = true;

      if (loginResponseData) {
        setUser({
          ...user,
          name: dummyLoginResponse.name,
          firstName: dummyLoginResponse.firstName,
          lastName: dummyLoginResponse.lastName,
          username: dummyLoginResponse.username,
          userID: dummyLoginResponse.userID,
          email: mail,
        });

        setProps({
          ...props,
          wallets: dummyLoginResponse.wallets,
          budgets: dummyLoginResponse.budgets,
          accounts: dummyLoginResponse.accounts,
          friends: dummyLoginResponse.friends,
          fsAccount: dummyLoginResponse.fsAccount,
        });

        setEnums({
          ...enums,
          currencies: dummyLoginResponse.currencies,
          taxRates: dummyLoginResponse.taxRates,
          banks: dummyLoginResponse.banks,
        });

        navigate("/user/dashboard");
        setError(null);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-400 to-purple-400 p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h1 className="text-3xl font-semibold text-red-400 text-slate-300 mb-6 text-center">
          {false && <GradualText text={"Send a Mail!"} />}
          Log in to your account
        </h1>
        <form onSubmit={handleLogin}>
          <div className="relative mb-8">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              id="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=""
            />
            {!mail && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="email"
              >
                Email
              </label>
            )}
          </div>
          <div className="relative mb-8">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=" "
            />
            {!password && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="subject"
              >
                Password
              </label>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full p-3 bg-slate-200 text-gray-900 rounded-lg font-semibold hover:bg-slate-300 focus:outline-none"
          >
            Log in
          </motion.button>
        </form>

        <p className="text-slate-300 text-center mt-4">
          Don`t have an account?
          <Link to="/register" title="Register">
            {" "}
            <span className="underline">Sign up!</span>
          </Link>
        </p>
      </motion.div>

      {error && <Alert msg={error} />}
    </div>
  );
};

export default LoginForm;
