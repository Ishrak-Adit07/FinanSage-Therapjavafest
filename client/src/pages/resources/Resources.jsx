/* eslint-disable no-unused-vars */
import React from "react";
import ArticlePreview from "../../sections/resources/ArticlePreview";
import BusinessPreview from "../../sections/resources/BusinessPreview";
import CurrencyPreview from "../../sections/resources/CurrencyPreview";
import TaxPagePreview from "../../sections/tax/TaxPagePrevies";

const Resources = () => {

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ArticlePreview />
      <BusinessPreview />
      <CurrencyPreview />
      <TaxPagePreview />
    </div>
  );
};

export default Resources;
