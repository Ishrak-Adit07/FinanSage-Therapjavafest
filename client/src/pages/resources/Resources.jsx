/* eslint-disable no-unused-vars */
import React from "react";
import ArticlePreview from "../../sections/resources/ArticlePreview";
import BusinessPreview from "../../sections/resources/BusinessPreview";
import CurrencyPreview from "../../sections/resources/CurrencyPreview";

const Resources = () => {

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ArticlePreview />
      <BusinessPreview />
      <CurrencyPreview />
    </div>
  );
};

export default Resources;
