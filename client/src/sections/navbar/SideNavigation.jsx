/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import SideNavigationLink from './SideNavigationLink';

const containerVariants = {
  close: {
    width: "3rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "22rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const arrowVariants = {
  close: {
    rotate: 0,
  },
  open: {
    rotate: 180,
  },
};

const SideNavigation = ({scrollToAboutMe, scrollToProjects, scrollToContact}) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerControls = useAnimationControls();
  const arrowControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      arrowControls.start("open");
    } else {
      containerControls.start("close");
      arrowControls.start("close");
    }
  }, [isOpen, containerControls, arrowControls]);

  const handleOpenCloseSideNavigation = () => {
    setIsOpen(!isOpen);
  };

  const handleTargetAboutMe = () => {
    if (scrollToAboutMe.current) {
      scrollToAboutMe.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTargetProjects = () => {
    if (scrollToProjects.current) {
      scrollToProjects.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTargetContact = () => {
    if (scrollToContact.current) {
      scrollToContact.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='relative'>
      <motion.nav
        className='bg-transparent absolute top-0 left-0 flex flex-col z-20 gap-10 px-2'
        variants={containerVariants}
        initial="close"
        animate={containerControls}
      >

        <div className='flex flex-row justify-center items-center'>
          <motion.button
            className='fa-solid fa-bars text-black'
            onClick={handleOpenCloseSideNavigation}
            variants={arrowVariants}
            initial="close"
            animate={arrowControls}
            transition={{
              duration: 0.5, ease: "easeInOut",
            }}
          >        
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            className='gap-3'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >

            <button onClick={handleTargetAboutMe} className='w-full'>
              <SideNavigationLink name={"About Me"} />
            </button>
            <button onClick={handleTargetProjects} className='w-full'>
              <SideNavigationLink name={"My Works"} />
            </button>
            <button onClick={handleTargetContact} className='w-full'>
              <SideNavigationLink name={"Get in touch"} />
            </button>

          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default SideNavigation;