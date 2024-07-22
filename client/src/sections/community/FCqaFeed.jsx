/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from "framer-motion";
import { FCFEED_QAS } from '../../constants';
import FCqaCard from '../../components/Cards/FCqaCard';

const FCqaFeed = () => {
  return (
    <div>
      {FCFEED_QAS.map((qa, index) => (
        <motion.div
          key={index}
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {true && (
            <FCqaCard
              className="w-full"
              username={qa.username}
              question={qa.question}
              answers={qa.answers}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default FCqaFeed;
