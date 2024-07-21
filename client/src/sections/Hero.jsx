/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/images/Money.jpg";
import GradualText from "../components/TextAnimations/GradualText";
import { HERO_CONTENT, PROJECT_NAME } from "../constants";
import Subscribe from "../components/Buttons/Subscribe";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const catchPhrase = "Carpe Diem!";

const Hero = ({ scrollToContact }) => {

  const navigate = useNavigate();
  // const handldeDownload = () => {
  //   console.log("Downloading CV");
  // };

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleTargetContact = () => {
    if (scrollToContact.current) {
      scrollToContact.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="layoutSection text-slate-200 border-b border-neutral-900 pb-4">
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
            <h1 className="pb-12 text-4xl font-thin text-slate-700 tracking-tight lg:mt-12 lg:text-6xl xl:text-8xl">
              {PROJECT_NAME}
            </h1>
            <div className="bg-gradient-to-r from-red-400 via-purple-500 to-pink-400 bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl xl:text-4xl">
              <GradualText text={catchPhrase} />
            </div>
            <p className="my-2 max-w-xl py-6 font-light text-slate-700 tracking-tighter text-center lg:text-left">
              {HERO_CONTENT}
            </p>
            <div className="flex items-center justify-center gap-5 mt-6 w-full lg:justify-start">
              <Subscribe text={"Sign in"} onClickAction={handleSignIn} />
              <Subscribe
                text={"Let's talk!"}
                onClickAction={handleTargetContact}
              />
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
              className="w-full h-auto object-cover rounded-lg shadow-lg mt-20"
            />
            {/* </a> */}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
