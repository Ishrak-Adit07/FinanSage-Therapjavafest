import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GroupContactCard = () => {
  return (
    <div className="flex items-center justify-center px-4 py-8">
      <motion.div className="contact-card bg-transparent rounded- p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-2xl text-left font-semibold mb-6">Get in touch!</h2>
        <ul className="text-lg">
          <li className="flex items-center mb-4 bg-slate-200 text-slate-700 p-2 rounded-lg">
            <i className="fa-solid fa-user mr-2"></i>
            <Link title="Profile" to="merchant/login">
              Merchants
            </Link>
          </li>
          <li className="flex items-center mb-4 bg-slate-200 text-slate-700 p-2 rounded-lg">
            <i className="fa-solid fa-user mr-2"></i>
            <Link title="Profile" to="merchant/login">
              Merchants
            </Link>
          </li>
          <li className="flex items-center mb-4 bg-slate-200 text-slate-700 p-2 rounded-lg">
            <i className="fa-solid fa-user mr-2"></i>
            <Link title="Profile" to="merchant/register">
              Merchants
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default GroupContactCard;
