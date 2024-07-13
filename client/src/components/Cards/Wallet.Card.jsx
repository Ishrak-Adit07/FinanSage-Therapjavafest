/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const WalletCard = ({ Title, Balance, GithubLink, Description, TechStack }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-wrap items-center justify-center py-4 w-full lg:w-4/5 lg:justify-start">
      <motion.div className="contact-card flex flex-wrap rounded-lg w-full mr-2">
        <motion.div className="flex flex-wrap justify-center w-full lg:justify-start">
          
          <div className="bg-gradient-to-r from-red-400 to-purple-400 rounded-lg px-2 pl-6 py-2 w-full overflow-hidden text-sm font-thin">

              <motion.div
                className="contact-card rounded-lg w-full mr-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                initial={{ height: 'auto' }}
                animate={{ height: isHovered ? '150px' : '50px' }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-full w-full">
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold text-left">{Title}</h1>
                    <h1 className="text-2xl font-thin text-right">{Balance}$</h1>
                  </div>

                  <motion.div
                    className="overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {isHovered && (
                      <div>
                        <div className="flex justify-start mb-2">
                          <Link 
                            title="See wallet details"
                            to={`/wallet/details/${Title}`}
                            className="text-white hover:underline"
                          >
                            View details
                          </Link>
                        </div>
                        <h2 className="text-sm font-thin mb-2">
                          {Description}
                        </h2>
                        <h2 className="text-sm font-thin">
                          Tech Stack: {TechStack.join(', ')}
                        </h2>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            {/* </a> */}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WalletCard;