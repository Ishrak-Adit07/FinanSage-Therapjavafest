/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import GradualText from "../TextAnimations/GradualText";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Alert from "../../messages/Alert";

const EditUserImageForm = () => {
  // UserContext
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [error, setError] = useState(null);

  const onSelectFile = (e) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    console.log("Reached Here");
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imageURL = reader.result?.toString() || "";
      console.log(imageURL);
      setImage(imageURL); // Update the state with the selected image URL
    });

    reader.readAsDataURL(file);
  };

  const handleEditUserProfilePic = async (e) => {
    e.preventDefault();
    try {
      // Here you would upload the image to the server and update the user profile
      // const responseData = await uploadUserProfilePic(image);

      const responseData = true; // Mock response

      if (responseData) {
        // Update user context if necessary
        // setUser({ ...user, profilePic: image });

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
              type="file"
              id="image"
              onChange={onSelectFile}
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer autofill:bg-transparent"
              placeholder=""
            />
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

export default EditUserImageForm;
