/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CashGraph from "../../../sections/finances/CashGraph";
import BudgetList from "../../../sections/budgets/budgets/BudgetList";
import BudgetCreate from "../../../sections/budgets/budgets/BudgetCreate";


const Budgets = () => {
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
            <h1 className="text-4xl text-center text-slate-500 text-bold">All User Wallets</h1>
            <CashGraph />
            <BudgetCreate />
            <BudgetList />
          </div>
        )}
      </div>
    </section>
  );
};

export default Budgets;
