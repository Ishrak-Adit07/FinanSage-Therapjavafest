/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import GradualText from "../TextAnimations/GradualText";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../../messages/Alert";
import { dummyMerchantLoginResponse } from "../../constants/responses";
import { MerchantContext } from "../../contexts/MerchantContext";

const MerchantRegisterForm = () => {
  const navigate = useNavigate();

  const { merchant, setMerchant } = useContext(MerchantContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      //const responseData = await registerUser(email, password, confirmPassword);

      const responseData = true;

      if (responseData) {
        setMerchant({
          ...merchant,
          username: username,
          merchantID: dummyMerchantLoginResponse.merchantID,
          balance: dummyMerchantLoginResponse.balance,
        });

        navigate("/merchant/dashboard");
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
          Create New Merchant Account
        </h1>
        <form onSubmit={handleRegister}>
          <div className="relative mb-8">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=""
            />
            {!username && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="username"
              >
                Mechant username
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
            Register
          </motion.button>
        </form>

        <p className="text-slate-300 text-center mt-4">
          Already have a merhcant account?
          <Link to="/login" title="Merchant Login">
            {" "}
            <span className="underline">Log in!</span>
          </Link>
        </p>
      </motion.div>

      {error && <Alert msg={error} />}
    </div>
  );
};

export default MerchantRegisterForm;
