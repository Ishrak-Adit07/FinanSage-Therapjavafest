/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Contact from "../../sections/company/Contact";
import CashGraph from "../../sections/finances/CashGraph";
import RecentTransactions from "../../sections/finances/RecentTransactions";
import RecentCashFlows from "../../sections/finances/RecentCashFlows";
import Footer from "../../sections/Footer";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      setUser({
        name: "Gale Hawthorne",
        email: "gale@dist12.com",
      });

      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="layoutSection w-full flex flex-col justify-center items-center">
      <h1 className="title text-4xl my-10">Carpe Diem, Gale!</h1>

      <div>
        {loading && (
          <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>
        )}

        {!loading && (
          <div className="w-full">
            <CashGraph />
            <RecentCashFlows />
            <RecentTransactions />
            {false && <Contact />}
            <Footer />
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
