import { motion } from "framer-motion";
import { CONNECTION_REQUESTS } from "../../constants";
import ConnectionRequestCard from "../../components/Cards/ConnectionRequestCard";
import { useState } from "react";

const FCRequestAccept = () => {
  let connectionRequests = CONNECTION_REQUESTS;

  const [showRequests, setShowRequests] = useState(true);
  const setShowRequestsFalse = (username) => {
    connectionRequests = connectionRequests.filter(
      (user) => user.username !== username
    );

    if (connectionRequests.length === 0) {
      setShowRequests(false);
    }
  };

  return (
    <div>
      {showRequests && (
        <div className="w-full">
          <h1 className="m-4 text-left text-2xl text-red-400">
            Connection Requests
          </h1>
          {connectionRequests.map((request, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              {true && (
                <ConnectionRequestCard
                  name={request.name}
                  username={request.username}
                  setShowRequestsFalse={setShowRequestsFalse}
                />
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FCRequestAccept;
