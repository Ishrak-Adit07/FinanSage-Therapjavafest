/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import BankAccountList from "../../sections/accounts/BankAccountsList";
import BankAccountCreate from "../../sections/accounts/BankAccountCreate";

const BankAccounts = () => {
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
            <BankAccountList />
            <BankAccountCreate />
          </div>
        )}
      </div>
    </section>
  );
};

export default BankAccounts;
