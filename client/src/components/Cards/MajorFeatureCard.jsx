/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const MajorFeatureCard = ({ name, bgLink, features, onClickAction }) => {
  return (
    <div>
      <div className="rounded-lg shadow-md m-2 flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 py-20">
        <button className="text-slate-200 text-center" onClick={onClickAction}>
          <div className="flex flex-col items-center justify-center gap-5">
            <p>
              <i className="fa-solid fa-user text-3xl bg-purple-200 text-slate-700 px-10 py-20 rounded-lg"></i>
            </p>
            <p className="text-xl font-bold text-slate-200 p-2 rounded-lg text-center my-2">{name}</p>
            {true && (
              <p className="text-center p-6">
                {features.join(", ")}
              </p>
            )}
          </div>
        </button>
      </div>
    </div>
  ); 
};

export default MajorFeatureCard;
