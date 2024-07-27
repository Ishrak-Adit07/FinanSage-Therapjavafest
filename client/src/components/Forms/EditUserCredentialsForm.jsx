/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import GradualText from "../TextAnimations/GradualText";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Alert from "../../messages/Alert";

const EditUserCredentialsForm = () => {
  //UserContext
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState(null);

  const handleEditPassword = async (e) => {
    e.preventDefault();
    try {
      //const loginResponseData = await loginUser(email, password);

      const responseData = true;

      if (responseData) {
        console.log(password, confirmPassword);

        navigate("/user/profile/settings");
        setError(null);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEditPin = async (e) => {
    e.preventDefault();
    try {
      //const loginResponseData = await loginUser(email, password);

      const responseData = true;

      if (responseData) {
        console.log(pin, confirmPin);

        navigate("/user/profile/settings");
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
        className="bg-gradient-to-r from-blue-400 to-purple-400 p-6 sm:p-8 rounded-lg shadow-lg w-1/4"
      >
        <h1 className="text-3xl font-semibold text-red-400 text-slate-300 mb-6 mx-6 text-center">
          {false && <GradualText text={"Send a Mail!"} />}
          Edit User Credentials
        </h1>

        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative mb-8 w-full">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=""
            />
            {!password && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="password"
              >
                New password
              </label>
            )}
          </div>

          <div className="relative mb-8 w-full">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=""
            />
            {!confirmPassword && (
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
            onClick={handleEditPassword}
            className="w-full p-3 bg-slate-200 text-gray-900 rounded-lg font-semibold hover:bg-slate-300 focus:outline-none"
          >
            Change Password
          </motion.button>
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-10">
          <div className="relative mb-8 w-full">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="password"
              id="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=" "
            />
            {!pin && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="pin"
              >
                Pin
              </label>
            )}
          </div>

          <div className="relative mb-8 w-full">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="password"
              id="confirmPin"
              value={confirmPin}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=""
            />
            {!confirmPin && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="confirmPin"
              >
                Confirm Pin
              </label>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEditPin}
            className="w-full p-3 bg-slate-200 text-gray-900 rounded-lg font-semibold hover:bg-slate-300 focus:outline-none"
          >
            Change Pin
          </motion.button>
        </div>
      </motion.div>

      {error && <Alert msg={error} />}
    </div>
  );
};

export default EditUserCredentialsForm;
