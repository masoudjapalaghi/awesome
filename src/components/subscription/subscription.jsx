import React from "react";
import ButtonLGradint from "../common/btnLinerGradinet";

const Subscription = () => {
  return (
    <section className="subscription">
      <img src="/assets/images/shapsSqure.png" alt="shapsSqure" />
      <div className="up_subscrip">
        <header>
          <h2>Transparent pricing</h2>
          <p>
            Our plans have everything you need to take your app to the next
            level. No hidden fees.
          </p>
        </header>
        <div className="btn_group">
          <button>Monthly</button>
          <button>Yearly</button>
        </div>
      </div>
      <div className="down_subscrip">
        <div className="cart_subscrip">
          <div>
            <h4>Basic</h4>
            <small>For small</small>
          </div>

          <div>
            <h3>$10</h3>
            <small>Per month</small>
          </div>
          <p>
            Lorem ipsum dolor sit amet, atque eaque eius esse et harum inventore
            nemo pariatur provident.
          </p>
          <div className="btn_subscrip">
            <ButtonLGradint value="Get it Now" />
          </div>
        </div>
        <div className="cart_subscrip">
          <div>
            <h4>Business</h4>
            <small>For small</small>
          </div>

          <div>
            <h3>$25</h3>
            <small>Per month</small>
          </div>
          <p>
            Lorem ipsum dolor sit amet, atque eaque eius esse et harum inventore
            nemo pariatur provident.
          </p>
          <div className="btn_subscrip">
            <ButtonLGradint value="Get it Now" />
          </div>
        </div>
        <div className="cart_subscrip">
          <div>
            <h4>Enterprice</h4>
            <small>For small</small>
          </div>

          <div>
            <h3>$15</h3>
            <small>Per month</small>
          </div>
          <p>
            Lorem ipsum dolor sit amet, atque eaque eius esse et harum inventore
            nemo pariatur provident.
          </p>
          <div className="btn_subscrip">
            <ButtonLGradint value="Get it Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
