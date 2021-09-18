import React from "react";
import ButtonLGradint from "../common/btnLinerGradinet";

const Features = () => {
  return (
    <section className="features">
      <div className="leftFeatures">
    
        <div className="first_layout">
        <div className="three_layout">
            <span>
                <h4>Today Consumption</h4>
            </span>
            <div>
                <h3>100</h3>
                <small>Units</small>
                
            </div>
        </div>
        <div className="secound_layout">
          <h3>Evening Mode ON</h3>
          <div className="light-flex">
            <span>
              <h3>6</h3>
              <h4>Garden lights</h4>
              <h6>03:30:33</h6>
            </span>
            <span>
              <h3>6</h3>
              <h4>Cordical lights</h4>
              <h6>03:30:33</h6>
            </span>
            <span>
              <h3>6</h3>
              <h4>hall lights</h4>
              <h6>03:30:33</h6>
            </span>
            
          </div>
          <p>
            All lights will switch of automatically as per the timer which is
            there in the setting.
          </p>
          <img
              src="assets/images/icons/bulb_features1.png"
              alt="LAMPICONS"
            />
        </div>
          <div className="up_first_layout">
            <div>
              <h3>Good evening!</h3>
              <h6>Bojan Sandic</h6>
            </div>
            <div>
              <h3>6:30</h3>
              <small>pm</small>
            </div>
          </div>
          <div className="down-first-layout">
            <div className="header_down-layout">
              <h4>Running Appliance</h4>
              <h4>See All</h4>
            </div>
            <div className="parent_cart">
              <div className="cart-down-first-layout ">
                <span>
                  <img
                    src="assets/images/icons/dive_features.png"
                    alt="DRIVEICON"
                  />
                  <small></small>
                </span>
                <span>
                  <h5>Air Conditioner</h5>
                  <small>On for last 3 Hrs</small>
                </span>
                <i className="fa fa-power-off"></i>
              </div>
              <div className="cart-down-first-layout cart_tow">
                <span>
                  <img
                    src="assets/images/icons/bulb_features.png"
                    alt="LAMPICON"
                  />
                  <small></small>
                </span>
                <span>
                  <h5>Air Conditioner</h5>
                  <small>On for last 3 Hrs</small>
                </span>
                <i className="fa fa-power-off"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-features">
      <h4>Powerful services</h4>
          <h2>We've partnered with awesome folks</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            atque eaque eius esse et harum inventore ipsam nam necessitatibus
            nemo pariatur provident. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Animi, atque eaque eius esse et harum inventore
            ipsam nam necessitatibus nemo pariatur provident.
          </p>
          <ButtonLGradint value="All Features" />
      </div>
    </section>
  );
};

export default Features;
