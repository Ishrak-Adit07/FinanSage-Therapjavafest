import { motion } from "framer-motion";
const Event = () => {
  return (
    <div>
      <h1 className="m-4 text-left text-2xl text-red-400">Upcoming</h1>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <div className="p-4 m-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg shadow-md">
          <h1 className="text-xl text-slate-200 text-center text-semibold">
            Seminar
          </h1>
          <p className="text-sm text-slate-700 text-center">Sunday, 8:00 pm</p>
          <h1 className="text-center">
            <a
              href={"link"}
              title="Full Event"
              className="text-slate-700 text-center hover:text-green-700 underline"
            >
              See more
            </a>
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Event;
