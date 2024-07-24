/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const FeatureCard = ({ name, bgLink, features }) => {
  return (
    <div>
      <div className="card rounded-lg shadow-md m-2 bg-gradient-to-r from-blue-600 to-blue-400 p-10">
        <div>
          <p className="text-2xl text-slate-300 text-bold text-left">
            {name}
          </p>
          <p className="text-slate-300 text-sm text-left">
            {features.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
