import { motion } from "framer-motion";
import EditUserDataFrom from "../../components/Forms/EditUserDataFrom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const EditUserData = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-full">
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-wrap items-center justify-center w-full"
      >
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col items-center mx-20 mt-20">
            {true && (
              <p className="flex flex-wrap items-center justify-center mb-10">
                <h1 className="text-4xl font-thin text-blue-400 tracking-tight lg:text-4xl xl:text-6xl">
                  <span>{user.firstName}</span>
                  <span> </span>
                </h1>
                <h1 className="text-4xl font-thin text-blue-700 tracking-tight lg:text-4xl xl:text-6xl">
                  <span>{user.lastName}</span>
                </h1>
              </p>
            )}

            <h3 className="text-2xl font-thin text-blue-700 tracking-tight lg:text-3xl xl:text-4xl">
              @{user.username}
            </h3>
          </div>
        </motion.div>
      </motion.div>

      <EditUserDataFrom />
    </div>
  );
};

export default EditUserData;
