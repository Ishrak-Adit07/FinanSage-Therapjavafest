// Collecting user's username and pin for transaction services
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import GradualText from "../TextAnimations/GradualText";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../../messages/Alert";
import { dummyLoginResponse } from "../../constants/responses";
import { PropContext } from "../../contexts/PropContext";
import { EnumContext } from "../../contexts/EnumContext";

const SecondRegisterForm = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const { props, setProps } = useContext(PropContext);
  const { enums, setEnums } = useContext(EnumContext);

  //Form data states
  const [formData, setFormData] = useState({
    username: "",
    pin: "",
    confirmPin: "",
  });
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      //const responseData = await registerUser(email, password, confirmPassword);

      const responseData = true;

      if (responseData) {
        setUser({
          ...user,
          username: dummyLoginResponse.username,
        });

        setProps({
          ...props,
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
        <h1 className="text-3xl font-semibold text-red-400 text-slate-300 mb-6 text-left">
          {false && <GradualText text={"Send a Mail!"} />}
          Set username and pin for transaction and community services
        </h1>
        <form onSubmit={handleRegister}>
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
              type="password"
              id="pin"
              value={formData.pin}
              onChange={(e) =>
                setFormData({ ...formData, pin: e.target.value })
              }
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=""
            />
            {!formData.pin && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="pin"
              >
                Set Pin
              </label>
            )}
          </div>
          <div className="relative mb-8">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="password"
              id="confirmPin"
              value={formData.confirmPin}
              onChange={(e) =>
                setFormData({ ...formData, confirmPin: e.target.value })
              }
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=""
            />
            {!formData.confirmPin && (
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

export default SecondRegisterForm;
