import { motion } from "framer-motion"

// eslint-disable-next-line react/prop-types
const Subscribe = ({text, onClickAction}) => {
  return (
      <motion.button 
      whileTap={{ scale: 0.3 }}
      whileHover={{ scale: 1.1, backgroundColor: 'rgba(245, 245, 245, 1)', color: 'rgba(0, 0, 0, 1)' }}
      transition={{ bounceDamping: 20, bounceStiffness: 600 }}
      className='bg-gradient-to-r from-red-400 to-purple-400 w-1/5 py-1 rounded-lg text-sm lg:text-2sm text-gray-900 font-lg tracking-wide mt-2 ml-1 mb-2'
      onClick={onClickAction}
      >
        {text}
      </motion.button>
  );
}

export default Subscribe;