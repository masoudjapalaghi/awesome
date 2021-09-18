import React from "react";

const Customers = () => {
  return (
    <section className="customers">
      <div className="leftCust">
        <span transform="item0">
          <img
            src="assets/images/shapsTriangle1.png"
            alt="TriangleCust"
          />
        </span>
        <span className="boxBrand" transform="item1">
          <i className="fa fa-tripadvisor"></i>
        </span>
        <span className="boxBrand" transform="item2">
          <i className="fa fa-codepen"></i>
        </span>
        <span className="boxBrand" transform="item3">
          <i className="fa fa-drupal"></i>
        </span>
        <span className="boxBrand" transform="item4">
          <i className="fa fa-gitlab"></i>
        </span>
        <span className="boxBrand" transform="item5">
          <i className="fa fa-linux"></i>
        </span>
        <span className="boxBrand" transform="item6">
          <i className="fa fa-slideshare"></i>
        </span>
        <span className="boxBrand" transform="item7">
          <i className="fa fa-skyatlas"></i>
        </span>
        <span className="boxBrand" transform="item8">
          <i className="fa fa-pagelines"></i>
        </span>
      </div>
      <div className="rightCust">
        <h2>We've partnered with awesome folks</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque
          eaque eius esse et harum inventore ipsam nam necessitatibus nemo
          pariatur provident. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Animi, atque eaque eius esse et harum inventore
          ipsam nam necessitatibus nemo pariatur provident.
        </p>
      </div>
        <img
          src="assets/images/shapsCircle.png"
          alt="circle"
        />
    </section>
  );
};

export default Customers;
