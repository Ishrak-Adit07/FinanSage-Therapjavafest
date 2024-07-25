/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FINANSAGE_FEATURES } from "../../constants";
import FeatureCard from "../../components/Cards/FeatureCard";
import MajorFeatureCard from "../../components/Cards/MajorFeatureCard";

const handleFeatureClick = () =>{
  console.log(console.log("Feature clicked"));
}

const Features = () => {
  return (
    <div className="my-20">
      <h1 className="text-4xl text-center text-slate-500 my-20">
        More FinanSage Services
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {FINANSAGE_FEATURES.map((feature, index) => (
          <motion.div
            key={index}
            className="w-1/5"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {true && (
              <FeatureCard
                className="w-full"
                name={feature.name}
                bgLink={feature.bgLink}
                features={feature.features}
                onClickAction={handleFeatureClick}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
