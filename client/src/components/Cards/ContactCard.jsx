import { motion } from "framer-motion";

const ContactCard = () => {
  return (
    <div className="flex items-center justify-center px-4 py-8">
      <motion.div className="contact-card bg-gray-900 rounded-lg shadow-md p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-2xl text-left font-semibold mb-6">Get in touch!</h2>
        <ul className="text-lg">
          <li className="flex items-center mb-4">
            <i className="fa-solid fa-envelope mr-2 text-red-400"></i>
            <a
              href="mailto:ishrak.adit07@gmail.com"
              className="gradient-text hover:text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              finansage.official@gmail.com
            </a>
          </li>
          <li className="flex items-center mb-4">
            <i className="fa-solid fa-phone mr-2 text-red-400"></i>
            <a
              href="tel:+1234567890"
              className="hover:text-red-500 text-red-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              +1 234 567 890
            </a>
          </li>
          <li className="flex items-center mb-4">
            <i className="fa-brands fa-square-facebook mr-2 bg-blue-500"></i>
            <a
              href="https://www.facebook.com/ishrak.adit"
              className="gradient-text hover:text-transparent bg-gradient-to-r from-blue-500 via-slate-300 to-blue-500 bg-clip-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          {false && <li className="flex items-center mb-4">
            <i className="fa-brands fa-square-github mr-2 bg-green-800"></i>
            <a
              href="https://github.com/Ishrak-Adit07"
              className="gradient-text hover:text-transparent bg-gradient-to-r from-green-500 via-green-200 to-green-500 bg-clip-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>}
          <li className="flex items-center mb-4">
            <i className="fa-brands fa-linkedin mr-2 bg-blue-500"></i>
            <a
              href="https://linkedin.com/in"
              className="hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ContactCard;
