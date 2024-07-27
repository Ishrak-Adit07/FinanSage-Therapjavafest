/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import FriendShowCard from "../../components/Cards/FriendShowCard";
import { useContext } from "react";
import { PropContext } from "../../contexts/PropContext";

const FCFriendList = () => {
  const { props } = useContext(PropContext);
  return (
    <div className="my-10">
      <h1 className="m-4 text-left text-2xl text-red-400">Friends</h1>
      {props.friends.map((friend, index) => (
        <motion.div
          key={index}
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {true && (
            <FriendShowCard name={friend.name} username={friend.username} />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FCFriendList;
