import React, { Fragment } from "react";
import Features from "../components/features/features";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Services from "../components/services/services";
import Subscription from "../components/subscription/subscription";
import Customers from "./../components/customers/customers";
import FAQ from './../components/FAQ/FAQ';
import FreeTrial from './../components/freeTrial/freeTrial';

const AwesomeApp = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Customers />
        <Services />
        <Features/>
        <Subscription/>
        <FAQ/>
        <FreeTrial/>
      </main>
    <Footer/>
    </Fragment>
  );
};

export default AwesomeApp;
