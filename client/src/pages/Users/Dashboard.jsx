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
import Footer from "../../sections/Footer";
import CustomizedDotLineChart from "../../components/Charts/CustomizedDotLineChart";
import SimpleLineChart from "../../components/Charts/SimpleLineChart";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="layoutSection w-full flex flex-col justify-center items-center">
      <h1 className="title text-4xl my-10 text-blue-400">
        Carpe Diem, <span className="text-blue-600">{user.firstName}</span>!
      </h1>

      <div>
        {loading && (
          <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>
        )}

        {!loading && (
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-wrap items-center justify-center mb-40 mt-10">
              <div className="w-1/2">
                <BrushBarChart headerText={"Monthly Cashflows' Overview"} />
              </div>
              <div className="w-1/2">
                <BrushBarChart headerText={"Monthly Transactions' Overview"} />
              </div>
            </div>

            <div className="w-3/4">
              <SimpleLineChart
                headerText={"FinanSage Account Net Balnace Over the Week"}
              />
            </div>
            <RecentCashFlows />
            <WalletAddCashFlow />
            <RecentTransactions />
            <InterUserTransactions />
            {true && <Contact />}
            <Footer />
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
