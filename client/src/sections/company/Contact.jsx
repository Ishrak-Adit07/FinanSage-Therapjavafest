/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ContactCard from '../../components/Cards/ContactCard';
import MailForm from '../../components/Forms/MailForm';

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const Contact = ({ scrollToContact }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (scrollToContact) {
      scrollToContact.current = sectionRef.current;
    }
  }, [scrollToContact]);

  return (
    <section ref={sectionRef} id="target-contact">
      <div className="layoutSection text-slate-200 border-neutral-900 pb-4 items-center py-4 lg:items-start">
        <motion.div
          variants={gridSquareVariants}
          className="flex flex-wrap justify-center lg:justify-start"
        >
          <motion.div
            className="w-full lg:w-1/2 p-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <ContactCard />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 p-4"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <MailForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;