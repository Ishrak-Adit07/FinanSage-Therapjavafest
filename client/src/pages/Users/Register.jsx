/* eslint-disable no-unused-vars */
import React from "react";
import RegisterForm from "../../components/Forms/RegisterForm";

const Register = () => {
  return (
    <section className="mt-20 pb-20">
      <h1>This is merchant registration</h1>
      <RegisterForm />
      <h1 className="text-indigo-500 text-bold text-center">
        Copyright@FinanSage.Official
      </h1>
    </section>
  );
};

export default Register;
