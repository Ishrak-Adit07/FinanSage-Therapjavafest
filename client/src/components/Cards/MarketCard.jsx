/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const MarketCard = ({ id, name, change }) => {

  return (
    <div>
      <div className="p-4 bg-slate-300 rounded-lg shadow-md m-2">
        <div>
          <p className="text-2xl text-slate-700 text-bold text-center">{name}</p>
          {change>0 && <p className="text-green-500 text-center">{change}</p>}
          {change<0 && <p className="text-red-500 text-center">{change}</p>}
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
