/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const MarketCard = ({ id, name, change }) => {

  return (
    <div>
      <div className="bg-slate-500 p-4 shadow-md tracking-wide ">
        <div>
          <p className="text-xl text-slate-200 text-bold text-center">{name}</p>
          {change>0 && <p className="text-green-400 text-center">+{change}%</p>}
          {change<0 && <p className="text-red-500 text-center">{change}%</p>}
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
