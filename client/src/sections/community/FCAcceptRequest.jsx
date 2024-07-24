import ConnectionRequestCard from "../../components/Cards/ConnectionRequestCard";
import { CONNECTION_REQUESTS } from "../../constants";
import { motion } from 'react-router-dom';

const FCAcceptRequest = () => {
  return (
    <div>
      <div>
        {CONNECTION_REQUESTS.map((request, index) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {true && (
              <ConnectionRequestCard
                className="w-full"
                name={request.name}
                username={request.username}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FCAcceptRequest;
