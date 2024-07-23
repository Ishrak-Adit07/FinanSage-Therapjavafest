/* eslint-disable no-unused-vars */
import React from "react";
import CurrencyConversion from "../../sections/resources/CurrencyConversion";
import WalletCurrencyConversion from "../../sections/resources/WalletCurrencyConversion";

const CurrencyConversionPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center text-slate-500 text-bold mt-10">
        Currency Converter Tools
      </h1>
      <CurrencyConversion />
      <WalletCurrencyConversion />
    </div>
  );
};

export default CurrencyConversionPage;
