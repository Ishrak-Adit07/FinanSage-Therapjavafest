/* eslint-disable react/prop-types */

import { useState } from "react";

const ConnectionRequestCard = ({ name, username }) => {
  const [showRequest, setShowRequest] = useState(true);

  const handleAcceptRequest = () => {
    setShowRequest(false);
  };

  const handleDeleteRequest = () => {
    setShowRequest(false);
  };

  return (
    <div>
      {showRequest && (
        <div className="p-4 m-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg shadow-md">
          <h1 className="text-xl text-slate-200 text-center text-semibold">
            {name}
          </h1>
          <p className="text-sm text-slate-700 text-center">{username}</p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              className="btn w-1/3 bg-green-500"
              onClick={handleAcceptRequest}
            >
              Accept
            </button>
            <button
              className="btn w-1/3 bg-red-500"
              onClick={handleDeleteRequest}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectionRequestCard;
