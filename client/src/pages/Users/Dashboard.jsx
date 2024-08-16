/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Contact from "../../sections/company/Contact";
import RecentTransactions from "../../sections/finances/RecentTransactions";
import RecentCashFlows from "../../sections/finances/RecentCashFlows";
import InterUserTransactions from "../../sections/finances/InterUserTransaction";
import BrushBarChart from "../../components/Charts/BrushBarChart";
import WalletAddCashFlow from "../../sections/wallets/wallet/WalletAddCashFlow";
import SimpleLineChart from "../../components/Charts/SimpleLineChart";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="title text-4xl my-10 text-blue-400">
        Carpe Diem, <span className="text-blue-600">{user.firstName}</span>!
      </h1>

      <div className="w-full">
        {loading && (
          <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>
        )}

        {!loading && (
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex flex-wrap items-center justify-center mb-40 mt-10">
              <div className="lg:w-1/2">
                <BrushBarChart headerText={"Monthly Cashflows' Overview"} />
              </div>
              <div className="lg:w-1/2">
                <BrushBarChart headerText={"Monthly Transactions' Overview"} />
              </div>
            </div>

            <div className="w-3/4">
              <SimpleLineChart
                headerText={"FinanSage Account Net Balnace Over the Week"}
              />
            </div>
            <div className="w-full">
              <RecentCashFlows />
            </div>
            <WalletAddCashFlow />
            <RecentTransactions />
            <InterUserTransactions />
            <Contact />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
