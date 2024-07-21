/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Subscribe from "../../components/Buttons/Subscribe";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const BankAccountSettings = () => {
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete this account?")) {
      navigate("/user/accounts/bank");
    } 
  };

  return (
    <div className="layoutSection text-slate-700 border-b border-neutral-900 pb-4">
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-wrap items-center justify-center"
      >
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col items-center">
            {(
              <div className="flex flex-col items-center justify-center gap-5 mt-6 w-full">
                <Subscribe
                  text={"Delete Account"}
                  onClickAction={handleDeleteAccount}
                />
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BankAccountSettings;
