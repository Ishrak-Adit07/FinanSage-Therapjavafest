/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Alert from "../../messages/Alert";
import { BANK_ACCOUNTS, REPORT_PERIODS } from "../../constants";
import { useNavigate } from "react-router-dom";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const TransactionReportCriteriaForm = () => {
  const [showAccount, setShowAccount] = useState(true);
  const navigate = useNavigate();

  const toggleShowAccount = () => {
    setShowAccount(!showAccount);
  };

  const handleSubmitCondition = (e) => {
    e.preventDefault();
    console.log(period, account, userID, startDate);
    setPeriod("");
    setAccount("");
    setUserID("");
    setStartDate("");
    navigate("/user/report/transactions/user");
  };

  // Error state
  const [error, setError] = useState(null);

  const [period, setPeriod] = useState("");
  const [account, setAccount] = useState("");
  const [userID, setUserID] = useState("");
  const [startDate, setStartDate] = useState("");

  return (
    <div className="layoutSection text-slate-200 pb-4 flex flex-col items-center my-40">
      <h1 className="text-slate-700 text-bold text-4xl mb-10">
        Select Report Criterias
      </h1>
      <div className="lg:w-4/5 w-full">
        <motion.div
          variants={gridSquareVariants}
          className="flex flex-col items-center justify-center lg:justify-start w-full"
        >
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-2xl text-slate-700 text-semibold text-left">
              Select Report Period
            </h1>
            <select
              className="input mt-2 text-slate-700"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            >
              <option value="" disabled>
                Select Report Period
              </option>
              {REPORT_PERIODS.map((reportPeriod, index) => (
                <option key={index} value={reportPeriod}>
                  {reportPeriod}
                </option>
              ))}
            </select>
            <button className="chbtn w-full" onClick={toggleShowAccount}>
              Change Criterion
            </button>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmitCondition}
              className="justify-center items-center text-slate-700"
            >
              {showAccount && (
                <span>
                  <h1 className="text-2xl text-slate-700 text-semibold text-left">
                    Select Accounts for Report
                  </h1>
                  <select
                    className="input mt-2"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Bank Accounts
                    </option>
                    {BANK_ACCOUNTS.map((account, index) => (
                      <option key={index} value={account.id}>
                        {account.BankName} : {account.AccID}
                      </option>
                    ))}
                  </select>
                </span>
              )}

              {!showAccount && (
                <span>
                  <h1 className="text-2xl text-slate-700 text-semibold text-left">
                    Submit UserID for Report
                  </h1>
                  <input
                    type="text"
                    placeholder="User ID"
                    className="input"
                    value={userID}
                    onChange={(e) => setUserID(e.target.value)}
                  />
                </span>
              )}

              <h1 className="text-2xl text-slate-700 text-semibold text-left">
                Select Start Date for Report
              </h1>

              <input
                type="text"
                placeholder="Start Date"
                className="input"
                autoFocus
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />

              <button type="submit" className="btn">
                Generate Report
              </button>
              {error && <Alert msg={error} />}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TransactionReportCriteriaForm;
