/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Alert from "../../messages/Alert";
import { REPORT_PERIODS, USER_WALLETS } from "../../constants";
import { useNavigate } from "react-router-dom";
import { PropContext } from "../../contexts/PropContext";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CashFlowReportCriteriaForm = () => {
  const navigate = useNavigate();

  const { props } = useContext(PropContext);

  const [period, setPeriod] = useState("");
  const [selectedWallets, setSelectedWallets] = useState([]);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [error, setError] = useState(null);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2023 + 1 },
    (_, i) => currentYear - i
  );

  const handleScroll = (e, items, setSelected) => {
    e.preventDefault();
    const currentIndex = items.indexOf(setSelected);
    if (e.deltaY < 0 && currentIndex > 0) {
      setSelected(items[currentIndex - 1]);
    } else if (e.deltaY > 0 && currentIndex < items.length - 1) {
      setSelected(items[currentIndex + 1]);
    }
  };

  const handleSelectWallet = (walletID) => {
    setSelectedWallets((prevSelected) =>
      prevSelected.includes(walletID)
        ? prevSelected.filter((id) => id !== walletID)
        : [...prevSelected, walletID]
    );
  };

  const handleSubmitCondition = (e) => {
    e.preventDefault();
    console.log(
      period,
      selectedWallets,
      selectedDay,
      selectedMonth,
      selectedYear
    );
    setPeriod("");
    setSelectedWallets("");
    setSelectedDay("");
    setSelectedMonth("");
    selectedYear("");
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

              <div className="flex flex-col mt-6">
                <div className="mb-4">
                  <label className="block mb-2 text-lg font-medium text-gray-700">
                    Select Date
                  </label>
                  <div className="flex space-x-2">
                    <select
                      value={selectedDay}
                      onChange={(e) => setSelectedDay(e.target.value)}
                      className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="" disabled>
                        Day
                      </option>
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>

                    <select
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="" disabled>
                        Month
                      </option>
                      {months.map((month, index) => (
                        <option key={index} value={index}>
                          {month}
                        </option>
                      ))}
                    </select>

                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="" disabled>
                        Year
                      </option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

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
