/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";

const MajorFeatureSubCard = ({ features }) => {
  const [featureCount, setFeatureCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [initialPosition, setInitialPosition] = useState(-100);
  const [animatePosition, setAnimatePostition] = useState(100);

  const handleShowPrevFeatureCount = () => {
    setInitialPosition(100);
    setAnimatePostition(-100);
    setIsVisible(false);
    setTimeout(() => {
      setFeatureCount(
        (featureCount === 0 ? features.length : featureCount) - 1
      );
      setIsVisible(true);
    }, 500);
  };

  const handleShowNextFeatureCount = () => {
    setInitialPosition(-100);
    setAnimatePostition(100);
    setIsVisible(false);
    setTimeout(() => {
      setFeatureCount((featureCount + 1) % features.length);
      setIsVisible(true);
    }, 500);
  };

  return (
    <div className="text-slate-200 w-full">
      <div
        className="relative overflow-hidden flex flex-wrap mt-6 w-full"
        style={{ height: "100px" }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center w-full"
          style={{ width: "100%" }}
        >
          <motion.div
            key={featureCount}
            className=""
            initial={{ opacity: 0, x: initialPosition }}
            animate={{
              opacity: isVisible ? 1 : 0,
              x: isVisible ? 0 : animatePosition,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {features[featureCount]}
          </motion.div>
        </motion.div>
      </div>

      <div className="flex mt-4 w-full">
        <button
          onClick={handleShowPrevFeatureCount}
          className="fa-solid fa-arrow-left px-2 py-2 text-white rounded mx-10 w-1/3 lg:w-1/4"
        ></button>
        <button
          onClick={handleShowNextFeatureCount}
          className="fa-solid fa-arrow-right px-2 py-2 text-white rounded mx-10 w-1/3 lg:w-1/4"
        ></button>
      </div>
    </div>
  );
};

export default MajorFeatureSubCard;
