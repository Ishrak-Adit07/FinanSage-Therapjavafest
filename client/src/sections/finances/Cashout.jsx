/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Alert from "../../messages/Alert";
import { UserContext } from "../../contexts/UserContext";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Cashout = () => {
  const { user } = useContext(UserContext);

  const handleCashout = (e) => {
    e.preventDefault();
    console.log(agent, amount);
    console.log(user.userID);
    setAmount("");
    setAgent("");
    setPin("");
  };

  const [agent, setAgent] = useState("");
  const [amount, setAmount] = useState();
  const [pin, setPin] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="layoutSection text-slate-200 pb-4 flex flex-col items-center my-10 py-40">
      <h1 className="text-slate-900 text-bold text-5xl mb-10">Cash Out</h1>
      <div className="lg:w-4/5 w-full">
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
            <h1 className="text-slate-500 text-xl text-center mb-6">
              Cash out From Registered Agent
            </h1>
            <form
              onSubmit={handleCashout}
              className="justify-center items-center  text-slate-700"
            >
              <input
                type="text"
                placeholder="Agent Number"
                className="input"
                autoFocus
                value={agent}
                onChange={(e) => setAgent(e.target.value)}
              />

              <input
                type="number"
                placeholder="Amount"
                className="input"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <input
                type="password"
                placeholder="Pin"
                className="input"
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

export default Cashout;
