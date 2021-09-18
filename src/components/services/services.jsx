import React from "react";
import ButtonLGradint from "../common/btnLinerGradinet";

const Services = () => {
  return (
    <section className="services">
      <div className="left_services">
          <h4>Powerful services</h4>
          <h2>We've partnered with awesome folks</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            atque eaque eius esse et harum inventore ipsam nam necessitatibus
            nemo pariatur provident. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Animi, atque eaque eius esse et harum inventore
            ipsam nam necessitatibus nemo pariatur provident.
          </p>
          <ButtonLGradint value="All services" />
      </div>
      <div className="rightservices">
        <article className="card_articls">
          <span className="icon_cart">
            <img
              src="/assets/images/icons/design-thinking_featurse.png"
              alt="Icon"
            />
          </span>
          <h3>Customizable</h3>
          <p>
            Lorem ipsum dolor sit amet, atque eaque eius esse et harum inventore
            ipsam nam necessi is the tatibus nemo pariatur provident.
          </p>
        </article>
        <article className="card_articls">
          <span className="icon_cart">
            <img
              src="/assets/images/icons/design-tools_featurse.png"
              alt="Icon"
            />
          </span>
          <h3>Customizable</h3>
          <p>
            Lorem ipsum dolor sit amet, atque eaque eius esse et harum inventore
            ipsam nam necessi is the tatibus nemo pariatur provident.
          </p>
        </article>
        <article className="card_articls">
          <span className="icon_cart">
            <img
              src="/assets/images/icons/graphic-design_featurse.png"
              alt="Icon"
            />
          </span>
          <h3>Application</h3>
          <p>
            Lorem ipsum dolor sit amet, atque eaque eius esse et harum inventore
            ipsam nam necessi is the tatibus nemo pariatur provident.
          </p>
        </article>
        <article className="card_articls">
          <span className="icon_cart">
            <img
              src="/assets/images/icons/house-design_featurse.png"
              alt="Icon"
            />
          </span>
          <h3>Web Desin</h3>
          <p>
            Lorem ipsum dolor sit amet, atque eaque eius esse et harum inventore
            ipsam nam necessi is the tatibus nemo pariatur provident.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Services;
