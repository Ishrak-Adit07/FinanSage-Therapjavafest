/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const FeatureCard = ({ name, bgLink, features, onClickAction }) => {
  return (
    <div>
      <div className="rounded-lg shadow-md m-2 py-4 flex flex-col items-center justify-center">
        <button className="text-slate-600 hover:text-blue-400 text-center" onClick={onClickAction}>
          <div className="flex flex-col items-center justify-center gap-5">
            <p>
              <i className="fa-solid fa-user text-3xl"></i>
            </p>
            <p className="text-md text-bold text-left">{name}</p>
            {false && (
              <p className="text-slate-300 text-sm text-left">
                {features.join(", ")}
              </p>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
