/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { PropContext } from "../../contexts/PropContext";

const ConnectionRequestCard = ({ name, username, setShowRequestsFalse }) => {
  const [showRequest, setShowRequest] = useState(true);

  const { props, setProps } = useContext(PropContext);
  const { friends } = props;

  const handleAcceptRequest = () => {
    setProps({
      ...props,
      friends: [...friends, { name, username }], // Create a new array with the new friend
    });
    setShowRequest(false);
    setShowRequestsFalse(username);
  };
  const handleDeleteRequest = () => {
    setShowRequest(false);
    setShowRequestsFalse(username);
  };

  return (
    <div>
      {showRequest && (
        <div className="p-4 m-4 rounded-lg shadow-md">
          <h1 className="text-xl text-slate-700 text-left text-semibold">
            {name}
          </h1>
          <p className="text-sm text-slate-500 text-left">@{username}</p>

          <div className="flex flex-wrap items-center justify-start mt-2 gap-2">
            <button
              className="w-1/3 text-sm bg-green-400 rounded-lg shadow-md"
              onClick={handleAcceptRequest}
            >
              Accept
            </button>
            <button
              className="w-1/3 text-sm bg-red-400 rounded-lg shadow-md"
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
