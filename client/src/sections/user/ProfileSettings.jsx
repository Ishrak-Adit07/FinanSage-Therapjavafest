/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const ProfileSettings = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center w-full my-40">
      <h1 className="text-6xl bg-gradient-to-r from-blue-400 to-blue-600 text-slate-200 rounded-lg shadow-md text-center py-10 px-20 my-20 w-1/2">
        Profile Settings
      </h1>
    </div>
  );
};

export default ProfileSettings;
