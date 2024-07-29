/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { MerchantContext } from "../../contexts/MerchantContext";
import InterUserTransactions from "../../sections/finances/InterUserTransaction";
import Cashout from "../../sections/finances/Cashout";

const MerchantDashboard = () => {
  const { merchant, setMerchant } = useContext(MerchantContext);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-4xl bg-gradient-to-r from-blue-400 to-blue-600 text-slate-200 rounded-lg shadow-md text-center py-2 px-10 mt-20 w-1/4">
        Merchant Dashboard
      </h1>

      <h1 className="text-4xl text-blue-400 text-center mt-10 w-1/4">
        {merchant.username}
      </h1>
      <h1 className="text-2xl text-purple-400 text-center mt-10 w-1/4">
        Account Balance : {merchant.balance}
      </h1>

      <div className="w-full">
        <InterUserTransactions />
        <Cashout />
      </div>
    </div>
  );
};

export default MerchantDashboard;
