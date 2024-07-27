/* eslint-disable no-unused-vars */
import React from "react";
import FCLeftBar from "../../sections/community/FCLeftBar";
import FCFeed from "../../sections/community/FCFeed";
import FCRightBar from "../../sections/community/FCRightBar";
import FCSendRequest from "../../sections/community/FCSendRequest";

const Financom = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        <div className="w-1/5 mt-10">
          <div className="w-1/5 fixed z-10">
            <FCSendRequest />
            <FCLeftBar />
          </div>
        </div>
        <div className="w-1/2">
          <FCFeed />
        </div>
        <div className="w-1/5">
          <FCRightBar />
        </div>
      </div>
    </div>
  );
};

export default Financom;
