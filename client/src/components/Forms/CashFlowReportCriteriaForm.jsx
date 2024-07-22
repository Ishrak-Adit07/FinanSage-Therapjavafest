/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Alert from "../../messages/Alert";
import { REPORT_PERIODS, USER_WALLETS } from "../../constants";
import { useNavigate } from "react-router-dom";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CashFlowReportCriteriaForm = () => {
  const navigate = useNavigate();

  const handleSubmitCondition = (e) => {
    e.preventDefault();
    console.log(period, wallet, startDate);
    setPeriod("");
    setWallet("");
    setStartDate("");
    navigate("/user/report/cashFlow/week");
  };

  // Error state
  const [error, setError] = useState(null);

  const [period, setPeriod] = useState("");
  const [wallet, setWallet] = useState("");
  const [startDate, setStartDate] = useState("");

  return (
    <div className="layoutSection text-slate-200 border-b border-neutral-900 pb-4 flex flex-col items-center my-10">
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
              <h1 className="text-2xl text-slate-700 text-semibold text-left">
                Select Wallets for Report
              </h1>
              <select
                className="input mt-2"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
              >
                <option value="" disabled>
                  Select Wallets
                </option>
                {USER_WALLETS.map((wallet, index) => (
                  <option key={index} value={wallet.name}>
                    {wallet.name}
                  </option>
                ))}
              </select>

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

export default CashFlowReportCriteriaForm;
