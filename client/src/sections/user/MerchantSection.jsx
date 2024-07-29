/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const MerchantSection = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const goToMerchantLogin = () => {
    navigate("/merchant/login");
  };

  const goToMerchantRegister = () => {
    navigate("/merchant/register");
  };

  const goToMerchantDashboard = () => {
    navigate("/merchant/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full my-40">
      <h1 className="text-4xl bg-gradient-to-r from-blue-400 to-blue-600 text-slate-200 rounded-lg shadow-md text-center py-4 px-10 mt-20 mb-5 w-1/3">
        Merchant Routes
      </h1>
      {false && (
        <h1 className="text-xl bg-gradient-to-r from-blue-500 via-slate-200 to-blue-500 text-slate-700 rounded-lg shadow-md text-center py-4 px-10 mb-20">
          Access all features of FinanSage faster!
        </h1>
      )}
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-wrap items-center justify-center w-full"
      >
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col items-center justfiy-center">
            <div className="flex items-center justify-center gap-10 mt-6 w-full">
              <button className="chbtn" onClick={goToMerchantLogin}>
                Log in as Merchant
              </button>
            </div>
            <div className="flex items-center justify-center gap-10 mt-6 w-full">
              <button className="chbtn" onClick={goToMerchantRegister}>
                Register as Merchant
              </button>
            </div>

            <div className="flex items-center justify-center gap-10 mt-6 w-full">
              <button className="chbtn" onClick={goToMerchantDashboard}>
                Current Merchant Dashboard
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MerchantSection;
