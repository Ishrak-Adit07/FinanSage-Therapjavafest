/* eslint-disable no-unused-vars */
import React from "react";
import Subscribe from "../../components/Buttons/Subscribe";
import { useNavigate } from "react-router-dom";
import ArticlePreview from "../../sections/resources/ArticlePreview";

const Resources = () => {
  const navigate = useNavigate();

  const goToArticles = () => {
    navigate("/user/resources/articles");
  };

  const goToBusiness = () => {
    navigate("/user/resources/business");
  };

  const goToCurrencyConversion = () => {
    navigate("/user/resources/currency/conversion");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <ArticlePreview />
      <Subscribe
        text={"Business"}
        onClickAction={goToBusiness}
      />
      <Subscribe
        text={"Currency Conversion"}
        onClickAction={goToCurrencyConversion}
      />
    </div>
  );
};

export default Resources;
