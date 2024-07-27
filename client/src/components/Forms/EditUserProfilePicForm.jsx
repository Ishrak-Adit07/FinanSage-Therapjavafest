/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import GradualText from "../TextAnimations/GradualText";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Alert from "../../messages/Alert";

const EditUserProfilePicForm = () => {
  //UserContext
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [profilePic, setProfilePic] = useState("");
  const [error, setError] = useState(null);

  const handleEditUserProfilePic = async (e) => {
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
          Edit User Image
        </h1>

        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative mb-8 w-full">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              id="profilePic"
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=""
            />
            {!profilePic && (
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="profilePic"
              >
                Profile Image
              </label>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEditUserProfilePic}
            className="w-full p-3 bg-slate-200 text-gray-900 rounded-lg font-semibold hover:bg-slate-300 focus:outline-none"
          >
            Change Profile Image
          </motion.button>
        </div>
      </motion.div>

      {error && <Alert msg={error} />}
    </div>
  );
};

export default EditUserProfilePicForm;
