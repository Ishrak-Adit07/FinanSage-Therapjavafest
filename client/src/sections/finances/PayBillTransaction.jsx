/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Alert from "../../messages/Alert";
import { PAY_BILL_SERVICES } from "../../constants";
import { UserContext } from "../../contexts/UserContext";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const PayBillTransaction = () => {
  const { user } = useContext(UserContext);

  const [showOptions, setShowOptions] = useState(false);
  const [showCustomer, setShowCustomer] = useState(false);

  const handlePayBill = (e) => {
    e.preventDefault();
    console.log(user.userID);
    console.log(serviceID, option, customerNo, amount);
    setPin("");

    console.log("Bill has been paid");
  };

  const findByID = (id) => {
    return PAY_BILL_SERVICES.find((service) => service.serviceID === id);
  };

  const selectService = () => {
    if (serviceID) {
      setService(findByID(serviceID));
      setOption("");
      setShowOptions(true);
      setShowCustomer(false);
    }
  };

  const selectOption = () => {
    if (option) {
      setShowCustomer(true);
    }
  };

  const [service, setService] = useState({});
  const [serviceID, setServiceID] = useState("");
  const [option, setOption] = useState("");
  const [customerNo, setCustomerNo] = useState("");
  const [amount, setAmount] = useState();
  const [pin, setPin] = useState("");

  const [error, setError] = useState(null);

  return (
    <div className="layoutSection text-slate-200 pb-4 flex flex-col items-center my-10 py-20 pb-40">
      <h1 className="text-slate-900 text-bold text-5xl mb-10">Pay Bill</h1>
      <div className="lg:w-4/5 w-full">
        <motion.div
          variants={gridSquareVariants}
          className="flex flex-wrap items-center justify-center text-slate-700 w-full"
        >
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-slate-500 text-xl text-left my-6">
              Select service to pay bill
            </h1>

            <select
              className="input"
              value={serviceID}
              onChange={(e) => setServiceID(e.target.value)}
            >
              <option value="" disabled>
                Select service
              </option>
              {PAY_BILL_SERVICES.map((service, index) => (
                <option key={index} value={service.serviceID}>
                  {service.service}
                </option>
              ))}
            </select>

            <button className="btn" onClick={selectService}>
              Select Service
            </button>

            {showOptions && (
              <div>
                <h1 className="text-slate-500 text-xl text-left my-6">
                  Select {`${service.optionName}`}
                </h1>

                <select
                  className="input"
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
                >
                  <option value="" disabled>
                    Select {`${service.optionName}`}
                  </option>
                  {service.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <button className="btn" onClick={selectOption}>
                  Select {`${service.optionName}`}
                </button>
              </div>
            )}

            {showCustomer && (
              <div>
                <h1 className="text-slate-500 text-xl text-left my-6">
                  Enter Customer No
                </h1>
                <input
                  type="text"
                  placeholder="Customer No"
                  className="input"
                  autoFocus
                  value={customerNo}
                  onChange={(e) => setCustomerNo(e.target.value)}
                />

                <div className="flex flex-wrap items-center justify-between w-full">
                  <div className="2/5">
                    <h1 className="text-slate-500 text-xl text-left my-6">
                      Enter Amount
                    </h1>
                    <input
                      type="number"
                      placeholder="Amount"
                      className="input"
                      autoFocus
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>

                  <div className="1/5">
                  
                  </div>

                  <div className="2/5">
                    <h1 className="text-slate-500 text-xl text-left my-6">
                      Enter Pin
                    </h1>
                    <input
                      type="password"
                      placeholder="Pin"
                      className="input"
                      autoFocus
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                    />
                  </div>
                </div>

                <button className="btn" onClick={handlePayBill}>
                  Pay Bill
                </button>
              </div>
            )}
            {error && <Alert msg={error} />}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PayBillTransaction;
