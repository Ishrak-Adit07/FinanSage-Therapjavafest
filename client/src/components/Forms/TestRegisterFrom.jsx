import { useContext, useState } from "react";
import { motion } from "framer-motion";
import GradualText from "../TextAnimations/GradualText";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../../messages/Alert";
import { dummyLoginResponse } from "../../constants/responses";
import { PropContext } from "../../contexts/PropContext";
import { EnumContext } from "../../contexts/EnumContext";

const TestRegisterForm = () => {

  const navigate = useNavigate();
  
  const { setUser } = useContext(UserContext);
  const { setProps } = useContext(PropContext);
  const { setEnums } = useContext(EnumContext);

  //Form data states
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      //const responseData = await registerUser(email, password, confirmPassword);

      const responseData = true;

      if (responseData) {
        setUser({
          name: dummyLoginResponse.name,
          firstName: dummyLoginResponse.firstName,
          lastName: dummyLoginResponse.lastName,
          username: dummyLoginResponse.username,
          userID: dummyLoginResponse.userID,
          email: formData.email,
        });

        setProps({
          wallets: dummyLoginResponse.wallets,
          budgets: dummyLoginResponse.budgets,
          accounts: dummyLoginResponse.accounts,
          friends: dummyLoginResponse.friends,
          fsAccount: dummyLoginResponse.fsAccount,
        });

        setEnums({
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
          Create New Account
        </h1>
        <form onSubmit={handleRegister}>
          <div className="relative mb-8">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=""
            />
            {!formData.firstName && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="firstName"
              >
                First Name
              </label>
            )}
          </div>
          <div className="relative mb-8">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=""
            />
            {!formData.lastName && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="lastName"
              >
                Last Name
              </label>
            )}
          </div>
          <div className="relative mb-8">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              id="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=""
            />
            {!formData.username && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="username"
              >
                username
              </label>
            )}
          </div>
          <div className="relative mb-8">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=""
            />
            {!formData.email && (
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
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=" "
            />
            {!formData.password && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="password"
              >
                Password
              </label>
            )}
          </div>

          <div className="relative mb-8">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="password"
              id="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=" "
            />
            {!formData.confirmPassword && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full p-3 bg-slate-200 text-gray-900 rounded-lg font-semibold hover:bg-slate-300 focus:outline-none"
          >
            Register
          </motion.button>
        </form>

        <p className="text-slate-300 text-center mt-4">
          Already have an account?
          <Link to="/login" title="Log in">
            {" "}
            <span className="underline">Log in!</span>
          </Link>
        </p>
      </motion.div>

      {error && <Alert msg={error} />}
    </div>
  );
};

export default TestRegisterForm;
