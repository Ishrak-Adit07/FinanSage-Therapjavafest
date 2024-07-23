/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Alert from "../../messages/Alert";
import { PropContext } from "../../contexts/PropContext";
import { FRIENDS, REGISTERED_MERCHANTS } from "../../constants";
import { UserContext } from "../../contexts/UserContext";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const MakePaymentTransaction = () => {
  const { user } = useContext(UserContext);

  const handleRegisteredMakePayment = (e) => {
    e.preventDefault();
    console.log(toRegisteredMerchant, toMerchant, amount);
    console.log(user.userID);
    setAmount("");
    setToRegisteredMerchant("");
    setToMerchant("");
  };

  const handleMakePayment = (e) => {
    e.preventDefault();
    console.log(toRegisteredMerchant, toMerchant, amount);
    console.log(user.userID);
    setAmount("");
    setToRegisteredMerchant("");
    setToMerchant("");
  };

  const [toRegisteredMerchant, setToRegisteredMerchant] = useState("");
  const [toMerchant, setToMerchant] = useState("");
  const [amount, setAmount] = useState();
  const [error, setError] = useState(null);

  return (
    <div className="layoutSection text-slate-200 pb-4 flex flex-col items-center my-10 py-40">
      <h1 className="text-slate-900 text-bold text-5xl mb-10">Make Payment</h1>
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
              Make payment to registered merchants
            </h1>
            <form
              onSubmit={handleRegisteredMakePayment}
              className="justify-center items-center  text-slate-700"
            >
              <select
                className="input"
                value={toRegisteredMerchant}
                onChange={(e) => setToRegisteredMerchant(e.target.value)}
              >
                <option value="" disabled>
                  Select Merchant Handle
                </option>
                {REGISTERED_MERCHANTS.map((merchant, index) => (
                  <option key={index} value={merchant.userID}>
                    {merchant.username}
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
              Make payment to any merchant
            </h1>
            <form
              onSubmit={handleMakePayment}
              className="justify-center items-center  text-slate-700"
            >
              <input
                type="text"
                placeholder="Merchant Handle"
                className="input"
                autoFocus
                value={toMerchant}
                onChange={(e) => setToMerchant(e.target.value)}
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

export default MakePaymentTransaction;
