/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ProfileShrotcuts = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const goToFinanSageAccount = () => {
    navigate("/user/account/finanSage");
  };

  const handleSeeWallets = () => {
    navigate("/user/wallets");
  };

  const handleSeeBudgets = () => {
    navigate("/user/budgets");
  };

  const handleSeeAccounts = () => {
    navigate("/user/accounts/bank");
  };

  const handleSeeReports = () => {
    navigate("/user/report/all");
  };

  const handleSeeTaxes = () => {
    navigate("/user/tax");
  };

  const handleSeeResources = () => {
    navigate("/user/resources");
  };

  const handleSeeNews = () => {
    navigate("/user/news");
  };

  const goToTransactions = () => {
    navigate("/user/transactions");
  };

  const goToFinanCom = () => {
    navigate("/user/financom");
  };

  const handleLogOut = () => {
    if (confirm("Are you sure you want to log out?")) {
      setUser({
        name: null,
        email: null,
      });

      localStorage.removeItem("email");
      localStorage.removeItem("webToken");

      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full my-40">
      <h1 className="text-4xl bg-gradient-to-r from-blue-400 to-blue-600 text-slate-200 rounded-lg shadow-md text-center py-4 px-10 mt-20 mb-5 w-1/4">Fast Routes</h1>
      <h1 className="text-xl bg-gradient-to-r from-blue-500 via-slate-200 to-blue-500 text-slate-700 rounded-lg shadow-md text-center py-4 px-10 mb-20">
        Access all features of FinanSage faster!
      </h1>
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
              <button className="chbtn" onClick={goToFinanSageAccount}>
                FS Account
              </button>
              <button className="chbtn" onClick={handleSeeReports}>
                See Reports
              </button>
              <button className="chbtn" onClick={goToTransactions}>
                All Transactions
              </button>
            </div>
            <div className="flex items-center justify-center gap-10 mt-6 w-full">
              <button className="chbtn" onClick={handleSeeWallets}>
                See my wallets
              </button>
              <button className="chbtn" onClick={handleSeeBudgets}>
                See my budgets
              </button>
              <button className="chbtn" onClick={handleSeeAccounts}>
                See my accounts
              </button>
            </div>
            <div className="flex items-center justify-center gap-10 mt-6 w-full">
              <button className="chbtn" onClick={handleSeeTaxes}>
                Taxes
              </button>
              <button className="chbtn" onClick={handleSeeResources}>
                Resources
              </button>
              <button className="chbtn" onClick={handleSeeNews}>
                News
              </button>
            </div>

            <div className="flex items-center justify-center gap-10 mt-6 w-full">
              <button className="chbtn" onClick={goToFinanCom}>
                FinanCom
              </button>
              <button className="chbtn" onClick={handleLogOut}>
                Logout
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileShrotcuts;
