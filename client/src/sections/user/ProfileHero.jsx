/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { HERO_CONTENT } from "../../constants";
import Subscribe from "../../components/Buttons/Subscribe";
import HeroImage from "../../assets/images/Profile.jpg";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const userName = "Ishrak Adit";
const userStatus = "Regular";

const ProfileHero = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handldeDownload = () => {
    console.log("Downloading CV");
  };

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
    navigate("/user/tax/income/calculate");
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
    <div className="layoutSection text-slate-200 pb-4 flex flex-wrap items-center justify-center">
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
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-12 text-4xl font-thin text-slate-700 tracking-tight lg:mt-16 lg:text-6xl xl:text-8xl">
              {userName}
            </h1>
            <h3 className="text-2xl font-thin text-slate-700 tracking-tight lg:text-3xl xl:text-4xl">
              User status: {userStatus}
            </h3>
            <p className="my-2 max-w-xl py-6 font-light text-slate-700 tracking-tighter text-center lg:text-left">
              {HERO_CONTENT}
            </p>
            <div className="flex items-center justify-center gap-10 mt-6 w-full lg:justify-start">
              <button className="chbtn" onClick={goToFinanSageAccount}>
                FinanSage Account
              </button>
              <button className="chbtn" onClick={handleSeeReports}>
                See Reports
              </button>
              <button className="chbtn" onClick={goToTransactions}>
                All Transactions
              </button>
            </div>
            <div className="flex items-center justify-center gap-10 mt-6 w-full lg:justify-start">
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
            <div className="flex items-center justify-center gap-10 mt-6 w-full lg:justify-start">
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
            <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
              <button className="chbtn" onClick={handleLogOut}>
                Logout
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 py-4 lg:p-10"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <div className="">
            <Link title="FinanSage Account" to="/user/account/finanSage">
              <img
                src={HeroImage}
                alt="Ishrak Adit"
                className="w-3/4 object-cover rounded-full shadow-lg mt-20"
              />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileHero;
