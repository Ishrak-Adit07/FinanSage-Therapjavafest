/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import GradualText from "../TextAnimations/GradualText";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Alert from "../../messages/Alert";

const EditUserIdentificationsForm = () => {
  //UserContext
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const handleEditUserData = async (e) => {
    e.preventDefault();
    try {
      //const loginResponseData = await loginUser(email, password);

      const responseData = true;

      if (responseData) {
        console.log(user);

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
          Edit User Identifications
        </h1>

        <div className="relative my-4 w-full">
            <p className="bg-slate-200 text-gray-900 p-2 rounded-lg text-center">email : {user.email}</p>
          </div>

        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative mb-8 w-full">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=""
            />
            {!email && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="email"
              >
                New email
              </label>
            )}
          </div>

          <div className="relative my-4 w-full">
            <p className="bg-slate-200 text-gray-900 p-2 rounded-lg text-center">username : {user.username}</p>
          </div>

          <div className="relative mb-8 w-full">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=" "
            />
            {!username && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="username"
              >
                New username
              </label>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEditUserData}
            className="w-full p-3 bg-slate-200 text-gray-900 rounded-lg font-semibold hover:bg-slate-300 focus:outline-none"
          >
            Change
          </motion.button>
        </div>
      </motion.div>

      {error && <Alert msg={error} />}
    </div>
  );
};

export default EditUserIdentificationsForm;
