/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Alert from "../../messages/Alert";
import { PropContext } from "../../contexts/PropContext";
import { FRIENDS } from "../../constants";
import { UserContext } from "../../contexts/UserContext";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const InterUserTransactions = () => {
  const { props } = useContext(PropContext);

  const [filteredFriends, setFilteredFriends] = useState(props.friends);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setToUser(value);

    const filtered = props.friends.filter((friend) =>
      friend.username.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFriends(filtered);
  };

  const handleOptionClick = (friend) => {
    setToUser(friend.username);
    setFilteredFriends([]);
  };

  const handleUserTransaction = (e) => {
    e.preventDefault();
    console.log(toUser, amount);
    setAmount("");
    setToUser("");
    setPin("");

    setError("");
  };

  // Form data states

  const [toUser, setToUser] = useState("");
  const [amount, setAmount] = useState();
  const [pin, setPin] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="w-full text-slate-200 pb-4 flex flex-col items-center my-10 py-40">
      <h1 className="text-slate-900 text-bold text-5xl mb-10 text-center">
        Inter User Transactions
      </h1>
      <div className="lg:w-3/5 w-full">
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
            <form
              onSubmit={handleUserTransaction}
              className="justify-center items-center  text-slate-700"
            >
              <h1 className="text-slate-500 text-left mb-2">Type Username</h1>
              <div className="relative w-full">
                <input
                  className="input"
                  value={toUser}
                  onChange={handleInputChange}
                  placeholder="Type username"
                  list="friend-options"
                />
                {toUser && filteredFriends.length > 0 && (
                  <ul className="absolute bg-white w-full p-2 rounded-md shadow-md cursor-pointer">
                    {filteredFriends.map((friend, index) => (
                      <li
                        key={index}
                        onClick={() => handleOptionClick(friend)}
                        className="hover:bg-slate-200 px-2"
                      >
                        {friend.username}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <h1 className="text-slate-500 text-left mb-2">Type Amount</h1>
              <input
                type="number"
                placeholder="Amount"
                className="input"
                autoFocus
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <h1 className="text-slate-500 text-left mb-2">
                FinanSage Account Pin
              </h1>
              <input
                type="password"
                placeholder="Pin"
                className="input"
                autoFocus
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />

              <button type="submit" className="btn">
                Send
              </button>
              {error && <Alert msg={error} />}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default InterUserTransactions;
