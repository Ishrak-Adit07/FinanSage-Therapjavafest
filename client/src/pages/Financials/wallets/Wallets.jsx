/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CashGraph from "../../../sections/finances/CashGraph";
import WalletCreate from "../../../sections/wallets/wallets/WalletCreate";
import WalletList from "../../../sections/wallets/wallets/WalletList";
import BrushBarChart from "../../../components/Charts/BrushBarChart";
import SimpleLineChart from "../../../components/Charts/SimpleLineChart";
import Footer from "../../../sections/Footer";

const Wallets = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="card w-full">
      <div>
        {loading && (
          <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>
        )}

        {!loading && (
          <div>
            <h1 className="text-4xl text-center text-slate-500 text-bold">
              All User Wallets
            </h1>
            <div className="flex flex-wrap items-center justify-center mb-20 mt-10">
              <div className="w-1/2 h-full">
                <BrushBarChart headerText={"Monthly Cashflows' Overview"} />
              </div>
              <div className="w-1/2 h-full">
                <SimpleLineChart headerText={"Net Cashflow Overview"} />
              </div>
            </div>
            <div className="w-full mt-10 mb-40">
              <WalletCreate />
              <WalletList />
            </div>
            <Footer />
          </div>
        )}
      </div>
    </section>
  );
};

export default Wallets;
