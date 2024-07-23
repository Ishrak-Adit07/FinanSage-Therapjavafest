/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Alert from "../../messages/Alert";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const InterUserTransactions = () => {

  const handleFriendTransaction = (e) => {
    e.preventDefault();
    console.log(fromUser, toFriend, amount);
    setAmount("");
    setFromUser("");
    setToFriend("");
    setToUser("");
  };

  const handleUserTransaction = (e) => {
    e.preventDefault();
    console.log(fromUser, toUser, amount);
    setAmount("");
    setFromUser("");
    setToFriend("");
    setToUser("");
  };

  // Form data states

  const [fromUser, setFromUser] = useState("");
  const [toFriend, setToFriend] = useState("");
  const [toUser, setToUser] = useState("");
  const [amount, setAmount] = useState();
  const [error, setError] = useState(null);

  return (
    <div className="layoutSection text-slate-200 border-b border-neutral-900 pb-4 flex flex-col items-center my-10">
      <h1 className="text-slate-700 text-bold text-4xl">
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
            <form
              onSubmit={handleFriendTransaction}
              className="justify-center items-center  text-slate-700"
            >

              <input
                type="text"
                placeholder="Friend Handle"
                className="input"
                autoFocus
                value={toFriend}
                onChange={(e) => setToFriend(e.target.value)}
              />

              <input
                type="number"
                placeholder="Amount"
                className="input"
                autoFocus
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
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
