/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const FeatureCard = ({ name, bgLink, features }) => {
  return (
    <div>
      <div className="card rounded-lg shadow-md m-2">
        <div>
          <p className="text-2xl text-slate-700 text-bold text-center">
            {name}
          </p>
          <p className="text-slate-700 text-semibold text-center">
            {features.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
