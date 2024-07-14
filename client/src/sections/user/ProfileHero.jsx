/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HERO_CONTENT } from "../../constants";
import Subscribe from "../../components/Buttons/Subscribe";
import HeroImage from "../../assets/images/Profile.jpg";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const userName = "Ishrak Adit";
const userStatus = "Regular";

const ProfileHero = () => {

  const navigate = useNavigate();

  const handldeDownload = () => {
    console.log("Downloading CV");
  };

  const handleSeeWallets = () =>{
    navigate("/user/wallets")
  }

  const handleSeeBudgets = () =>{
    navigate("/user/wallets")
  }

  const handleSeeAccounts = () =>{
    navigate("/user/wallets")
  }

  return (
    <div className="layoutSection text-slate-200 pb-4">
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-wrap items-center justify-center lg:justify-start"
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
            <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
              <Subscribe text={"See my wallets"} onClickAction={handldeDownload} />
            </div>
            <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
              <Subscribe text={"See my budgets"} onClickAction={handldeDownload} />
            </div>
            <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
              <Subscribe text={"See my wallets"} onClickAction={handleSeeWallets} />
              <Subscribe text={"See my budgets"} onClickAction={handleSeeBudgets} />
              <Subscribe text={"See my accounts"} onClickAction={handleSeeAccounts} />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 py-4 lg:p-10"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <div className="flex justify-center max-w-xl">
            {/* <a href="https://www.facebook.com/ishrak.adit"> */}
            <img
              src={HeroImage}
              alt="Ishrak Adit"
              className="w-1/2 h-auto object-cover rounded-full shadow-lg mt-20"
            />
            {/* </a> */}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileHero;
