/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/Profile.jpg";
import EditUserImageForm from "../../components/Forms/EditUserImageForm";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const EditUserImage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-col items-center justify-center w-full"
      >
        <div className="flex items-center justify-center w-1/2">
          <Link title="FinanSage Account" to="/user/account/finanSage">
            <img
              src={HeroImage}
              alt="Ishrak Adit"
              className="w-1/2 object-cover rounded-full shadow-lg mt-20 ml-44"
            />
          </Link>
        </div>
      </motion.div>

      <div className="w-full">
        <EditUserImageForm />
      </div>
    </div>
  );
};

export default EditUserImage;
