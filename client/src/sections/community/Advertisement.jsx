import AdvertisementCard from "../../components/Cards/AdvertisementCard";
import { ADVERTISEMENTS } from "../../constants";
import { motion } from "framer-motion";

const Advertisement = () => {
  return (
    <div>
      {ADVERTISEMENTS.map((ad, index) => (
        <motion.div
          key={index}
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {true && (
            <AdvertisementCard
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

export default Advertisement;
