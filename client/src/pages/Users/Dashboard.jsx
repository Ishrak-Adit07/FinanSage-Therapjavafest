/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Contact from "../../sections/company/Contact";
import CashGraph from "../../sections/finances/CashGraph";
import RecentTransactions from "../../sections/finances/RecentTransactions";
import RecentCashFlows from "../../sections/finances/RecentCashFlows";
import Footer from "../../sections/Footer";
import AddCashFlow from "../../sections/finances/AddCashFlow";
import BankCashFlow from "../../sections/finances/BankCashFlow";
import BestUsage from "../../sections/user/BestUsage";
import InterUserTransactions from "../../sections/finances/InterUserTransaction";
import SimpleBarchart from "../../components/Charts/SimpleBarChart";
import StrokedBarChart from "../../components/Charts/StrokedBarChart";
import BrushBarChart from "../../components/Charts/BrushBarChart";

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
          <div className="w-full">
            <div className="flex flex-wrap items-center justify-center mb-40 mt-10">
              <div className="w-1/2">
                <BrushBarChart headerText={"Monthly Cashflows' Overview"}/>
              </div>
              <div className="w-1/2">
                <BrushBarChart headerText={"Monthly Transactions' Overview"}/>
              </div>
            </div>
            <RecentCashFlows />
            <AddCashFlow />
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
