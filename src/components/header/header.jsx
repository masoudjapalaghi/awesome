import React, { Fragment } from "react";
import ButtonLGradint from "../common/btnLinerGradinet";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <section className="bodyheader">
        <div className="leftheader">
          <h1>Showcase Your App!</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem quae
            ab illo inventore veritatis et quasi architecto and the most beatae
            dicta sunt explicabo.
          </p>
          <div className="buttonsHeader">
            <ButtonLGradint value={"Plans & Pricing"} />
            <button className="btnoutline">Start now</button>
          </div>
        </div>
        <div className="rightheader">
          <img src="assets/images/Mockupheader.png" alt="MOCKUP" />
          <img src="assets/images/shapsTriangle0.png" alt="shapsTriangle" />
        </div>
      </section>
    </header>
  );
};

export default Header;
