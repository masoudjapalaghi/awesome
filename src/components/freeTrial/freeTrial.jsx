import React from "react";
import ButtonLGradint from "../common/btnLinerGradinet";

const FreeTrial = () => {
  return (
    <section className="free_trial">
      <header>
        <h2>Start your 15 days free trial now!</h2>
        <p>
          By signing up you will get 15 days free trial. You won't be charged
          until the trial period ends, don't let this offer pass in from of your
          eyes
        </p>
      </header>
      <ButtonLGradint value="Get start"/>
    </section>
  );
};

export default FreeTrial;
