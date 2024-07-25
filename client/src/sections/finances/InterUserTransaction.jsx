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
  const { user } = useContext(UserContext);
  const { props } = useContext(PropContext);

  const handleFriendTransaction = (e) => {
    e.preventDefault();
    console.log(user.userID);
    console.log(toFriend, amount);
    setAmount("");
    setToFriend("");
    setToUser("");
    setPin("");

    setError("");
  };

  const handleUserTransaction = (e) => {
    e.preventDefault();
    console.log(toUser, amount);
    setAmount("");
    setToFriend("");
    setToUser("");
    setPin("");

    setError("");
  };

  // Form data states

  const [toFriend, setToFriend] = useState("");
  const [toUser, setToUser] = useState("");
  const [amount, setAmount] = useState();
  const [pin, setPin] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="layoutSection text-slate-200 pb-4 flex flex-col items-center my-10 py-40">
      <h1 className="text-slate-900 text-bold text-5xl mb-10">
        Inter User Transactions
      </h1>
      <div className="lg:w-4/5 w-full">
        <motion.div
          variants={gridSquareVariants}
          className="flex flex-wrap items-center justify-center lg:justify-start w-full"
        >
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-slate-500 text-xl text-left mb-6">
              Send money to a friend
            </h1>
            <form
              onSubmit={handleFriendTransaction}
              className="justify-center items-center  text-slate-700"
            >
              <select
                className="input"
                value={toFriend}
                onChange={(e) => setToFriend(e.target.value)}
              >
                <option value="" disabled>
                  Select Friend Handle
                </option>
                {props.friends.map((frined, index) => (
                  <option key={index} value={frined.userID}>
                    {frined.username}
                  </option>
                ))}
              </select>

              <input
                type="number"
                placeholder="Amount"
                className="input"
                autoFocus
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

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

          <motion.div
            className="w-full lg:w-1/2 py-4 lg:p-10"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <h1 className="text-slate-500 text-xl text-left mb-6">
              Send money to any user
            </h1>
            <form
              onSubmit={handleUserTransaction}
              className="justify-center items-center  text-slate-700"
            >
              <input
                type="text"
                placeholder="Receiver Handle"
                className="input"
                autoFocus
                value={toUser}
                onChange={(e) => setToUser(e.target.value)}
              />

              <input
                type="number"
                placeholder="Amount"
                className="input"
                autoFocus
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

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
