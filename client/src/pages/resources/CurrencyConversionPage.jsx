/* eslint-disable no-unused-vars */
import React from "react";
import CurrencyConversion from "../../sections/resources/CurrencyConversion";
import CashGraph from "../../sections/finances/CashGraph";
import WalletCurrencyConversion from "../../sections/resources/WalletCurrencyConversion";

const CurrencyConversionPage = () => {

  return (
    <div className="justify-center items-center">
      <CurrencyConversion />
      <WalletCurrencyConversion />
    </div>
  );
};

export default CurrencyConversionPage;
