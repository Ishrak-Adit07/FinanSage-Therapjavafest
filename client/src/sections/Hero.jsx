/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/images/Money.jpg";
import GradualText from "../components/TextAnimations/GradualText";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const catchPhrase = "Advanced Finance Manager";

const Hero = ({ scrollToContact }) => {
  const navigate = useNavigate();
  // const handldeDownload = () => {
  //   console.log("Downloading CV");
  // };

  // const handleSignIn = () => {
  //   navigate("/login");
  // };

  // const handleTargetContact = () => {
  //   if (scrollToContact.current) {
  //     scrollToContact.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="layoutSection text-slate-200 pl-20 pr-60 pt-40 pb-60">
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
          <div className="flex flex-col items-center lg:items-start mb-20">
            {true && (
              <div className="flex flex-wrap items-center justify-center mb-10">
                <h1 className="text-4xl font-thin text-blue-400 tracking-tight lg:text-6xl xl:text-8xl lg:ml-2">
                  Finan
                </h1>
                <h1 className="text-4xl font-thin text-blue-700 tracking-tight lg:text-6xl xl:text-8xl">
                  Sage
                </h1>
              </div>
            )}
            {false && (
              <h1 className="text-4xl font-thin text-slate-900 tracking-tight lg:text-6xl xl:text-8xl my-10">
                FinanSage
              </h1>
            )}
            <div className="bg-gradient-to-r from-blue-600 via-purple-400 to-blue-400 bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl xl:text-4xl lg:ml-2">
              <GradualText text={catchPhrase} />
            </div>
            <div className="flex items-center justify-center gap-5 mt-10 w-full lg:justify-start">
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 py-4 lg:p-10 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          {false && <div className="flex justify-center max-w-xl">
            {/* <a href="https://www.facebook.com/ishrak.adit"> */}
            {false && <img
              src={HeroImage}
              alt="Ishrak Adit"
              className="w-full h-auto object-cover rounded-lg shadow-lg mt-20"
            />}
            {/* </a> */}
          </div>}

          <div className="bg-gradient-to-r from-blue-400 to-purple-400 text-slate-200 text-left p-4 rounded-lg shadow-md w-full">
            <div>
            <p>Harry did you put your name in the goblet of fire?</p>
            <p>Harry did you put your name in the goblet of fire?</p>
            <p>Harry did you put your name in the goblet of fire?</p>
            <p>Harry did you put your name in the goblet of fire?</p>
            <p>Harry did you put your name in the goblet of fire?</p>
            <p>Harry did you put your name in the goblet of fire?</p>
            </div>
            <div>
            <p>Harry did you put your name in the goblet of fire?</p>
            <p>Harry did you put your name in the goblet of fire?</p>
            <p>Harry did you put your name in the goblet of fire?</p>
            <p>Harry did you put your name in the goblet of fire?</p>
            <p>Harry did you put your name in the goblet of fire?</p>
            <p>Harry did you put your name in the goblet of fire?</p>
            </div>
            <div>
            <p>Harry did you put your name in the goblet of fire?</p>
            <p>Harry did you put your name in the goblet of fire?</p>
            <p>Harry did you put your name in the goblet of fire?</p>
            <p>Harry did you put your name in the goblet of fire?</p>
            <p>Harry did you put your name in the goblet of fire?</p>
            <p>Harry did you put your name in the goblet of fire?</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
