/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import WalletGraph from "../../../sections/wallets/wallet/WalletGraph";
import CashGraph from "../../../sections/finances/CashGraph";
import WalletCreate from "../../../sections/wallets/wallets/WalletCreate";
import WalletList from "../../../sections/wallets/wallets/WalletList";

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
            <CashGraph />
            <WalletCreate />
            <WalletList />
          </div>
        )}
      </div>
    </section>
  );
};

export default Wallets;
