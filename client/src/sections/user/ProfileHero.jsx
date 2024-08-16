/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import HeroImage from "../../assets/images/Profile.jpg";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ProfileHero = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const goToProfileSettins = () => {
    navigate("/user/profile/settings");
  };

  return (
    <div className="w-full h-screen text-slate-200 flex flex-col lg:flex-row items-center justify-center">
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-col lg:flex-row w-full h-full items-center justify-center lg:justify-between"
      >
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center px-4 sm:px-6 md:px-8 lg:px-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col items-center justify-center lg:items-start lg:w-full mx-4 sm:mx-8 md:mx-12 lg:mx-20 mt-10 sm:mt-12 md:mt-16 lg:mt-20">
            <div className="flex flex-wrap items-center justify-center lg:justify-start mb-6 sm:mb-8 md:mb-10">
              <h1 className="text-3xl sm:text-4xl font-thin text-blue-400 tracking-tight lg:text-5xl xl:text-6xl">
                <span>{user.firstName}</span>
              </h1>
              <h1 className="text-3xl sm:text-4xl font-thin text-blue-700 tracking-tight lg:text-5xl xl:text-6xl">
                <span>{user.lastName}</span>
              </h1>
            </div>
            <h3 className="text-xl sm:text-2xl font-thin text-blue-700 tracking-tight lg:text-3xl xl:text-4xl">
              @{user.username}
            </h3>
            <button className="w-full text-lg sm:text-xl bg-gradient-to-r from-blue-400 to-blue-600 text-slate-200 rounded-lg shadow-md text-center py-2 px-4 my-6 sm:my-8 md:my-10 lg:my-12 w-1/2 sm:w-1/3 lg:w-1/3" onClick={goToProfileSettins}>
                Profile Settings
            </button>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end py-4 lg:p-10"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <div className="flex flex-wrap items-center justify-center">
            <Link title="FinanSage Account" to="/user/account/finanSage">
              <img
                src={HeroImage}
                alt="Ishrak Adit"
                className="w-3/4 sm:w-1/2 lg:w-2/3 xl:w-1/2 object-cover rounded-full shadow-lg mt-10 sm:mt-12 md:mt-16 lg:mt-20"
              />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileHero;
