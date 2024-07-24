import { motion } from 'react-router-dom';
import { ADVERTISEMENTS } from '../../constants';
import Advertisement from './Advertisement';

const AcceptRequest = () => {
  return (
    <div>
      <h1 className="m-4 text-left text-2xl text-red-400">Connection Requests</h1>
      {ADVERTISEMENTS.map((ad, index) => (
        <motion.div
          key={index}
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {true && (
            <Advertisement
              className="w-full"
              name={ad.name}
              catchPhrase={ad.catchPhrase}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default AcceptRequest;
