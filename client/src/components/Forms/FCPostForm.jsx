/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const FCPostForm = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const sharePost = () => {
    console.log(post);
    setPost("");
    navigate("/user/financom");
  };

  const [post, setPost] = useState("");

  return (
    <div className="flex items-center justify-center px-4 py-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-400 to-purple-400 p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full"
      >
          <div className="relative mb-8">
            <motion.textarea
              whileFocus={{ scale: 1.05 }}
              id="post"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              className="w-full py-2 px-2 bg-transparent text-white border-b border-gray-700 focus:outline-none focus:border-red-400 peer h-12 resize-none autofill:bg-transparent hide-scrollbar"
              placeholder=" "
              style={{ height: "auto" }}
            />
            {!post && 
              <label
                className="absolute left-0 top-4 text-gray-300 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:left-0 peer-focus:text-xs"
                htmlFor="post"
              >
                {`What's on your mind, ${user.username}?`}
              </label>
            }
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={sharePost}
            className="w-full p-3 bg-slate-200 text-gray-900 rounded-lg font-semibold hover:bg-slate-300 focus:outline-none"
          >
            Share
          </motion.button>
      </motion.div>
    </div>
  );
};

export default FCPostForm;
