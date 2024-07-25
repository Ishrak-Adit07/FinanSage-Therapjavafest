/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const MajorFeatureCard = ({ name, bgLink, features, onClickAction }) => {
  return (
    <div>
      <div className="rounded-lg shadow-md m-2 flex flex-col items-center justify-center py-20">
        <button className="text-slate-600 hover:text-blue-400 text-center" onClick={onClickAction}>
          <div className="flex flex-col items-center justify-center gap-5">
            <p>
              <i className="fa-solid fa-user text-3xl bg-blue-200 px-10 py-20 rounded-lg"></i>
            </p>
            <p className="text-lg text-bold text-center my-2">{name}</p>
            {true && (
              <p className="text-slate-600 text-center">
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
