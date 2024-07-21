/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { PERSON_SPECIFIC_FEATURES } from "../../constants";
import FeatureCard from "../../components/Cards/FeatureCard";

const PersonSpecificeFeatures = () => {
  return (
    <div className="my-20">
      <h1 className="text-4xl text-center text-slate-500">
        Who Should Use FinanSage and Why
      </h1>
      {PERSON_SPECIFIC_FEATURES.map((feature, index) => (
        <motion.div
          key={index}
          className="w-full"
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
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default PersonSpecificeFeatures;
