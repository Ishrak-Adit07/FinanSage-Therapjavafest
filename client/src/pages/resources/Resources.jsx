/* eslint-disable no-unused-vars */
import React from "react";
import Subscribe from "../../components/Buttons/Subscribe";
import { useNavigate } from "react-router-dom";

const Resources = () => {
  const navigate = useNavigate();

  const goToCurrencyConversion = () => {
    navigate("/user/resources/currency/conversion");
  };

  return (
    <div className="justify-center items-center">
      <Subscribe
        text={"Currency Conversion"}
        onClickAction={goToCurrencyConversion}
      />
    </div>
  );
};

export default Resources;
