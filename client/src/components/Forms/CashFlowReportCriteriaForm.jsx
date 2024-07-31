/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Alert from "../../messages/Alert";
import { REPORT_PERIODS } from "../../constants";
import { useNavigate } from "react-router-dom";
import { PropContext } from "../../contexts/PropContext";
import SimpleDateInput from "../InputFields/SimpleDateInput";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CashFlowReportCriteriaForm = () => {
  const navigate = useNavigate();

  const { props } = useContext(PropContext);

  const [period, setPeriod] = useState("");
  const [selectedWallets, setSelectedWallets] = useState([]);
  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [error, setError] = useState(null);

  const handleSelectWallet = (walletID) => {
    setSelectedWallets((prevSelected) =>
      prevSelected.includes(walletID)
        ? prevSelected.filter((id) => id !== walletID)
        : [...prevSelected, walletID]
    );
  };

  const handleSubmitCondition = (e) => {
    e.preventDefault();
    console.log(period, selectedWallets, date);
    setPeriod("");
    setDate({
      day: "",
      month: "",
      year: "",
    });
    navigate("/user/report/cashFlow/week");
  };

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
              <h1 className="text-2xl text-slate-700 text-semibold text-left mt-4">
                Select Wallets for Report
              </h1>

              <div className="w-full px-4 mt-4 mb-6">
                {props.wallets.map((wallet) => (
                  <div key={wallet.id}>
                    <label className="my-4">
                      <div className="custom-checkbox">
                        <input
                          type="checkbox"
                          value={wallet.id}
                          checked={selectedWallets.includes(wallet.id)}
                          onChange={() => handleSelectWallet(wallet.id)}
                        />
                        <span></span>
                      </div>
                      <span className="px-4">{wallet.name}</span>
                    </label>
                  </div>
                ))}
              </div>

              <h1 className="text-2xl text-slate-700 text-semibold text-left">
                Select Start Date for Report
              </h1>

              <SimpleDateInput date={date} setDate={setDate} />

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
