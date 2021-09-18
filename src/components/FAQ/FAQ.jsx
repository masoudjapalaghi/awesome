import React, { useState } from "react";

const FAQ = () => {
  const [request,setRequest]=useState(false);

  const handleToggleRequest=()=>{
    request=!setRequest
    console.log(request)
  }

  return (
    <section className="faq">
     <img src="assets/images/shapsTriangle0.png" alt="shapsTriangle1" />
      <header className="header_faq">
        <h2>Frequently Asked Questions</h2>
        <p>
          Our plans have everything you need to take your app to the next level.
          No hidden fees.
        </p>
      </header>
      <div className="questions">
        <div className="que_res">
          <div className="box_question">
            <p>Sed ut perspiciatis unde iste natus error sit?</p>
            <span>
              <i className="fa fa-plus"></i>
            </span>
            <span style={{display: "none"}}>
              <i className="fa fa-minus"></i>
            </span>
          </div>
          <div className="box_response" style={{display: "none"}}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              atque eaque eius esse et harum inventore ipsam nam necessitatibus
              nemo pariatur dipisci velit, sed quia non numquam eius modi
              tempora provident.
            </p>
          </div>
        </div>
        <div className="que_res">
          <div className="box_question">
            <p>Sed ut perspiciatis unde iste natus error sit?</p>
            <span>
              <i className="fa fa-plus"></i>
            </span>
            <span style={{display: "none"}}>
              <i className="fa fa-minus"></i>
            </span>
          </div>
          <div className="box_response" style={{display: "none"}}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              atque eaque eius esse et harum inventore ipsam nam necessitatibus
              nemo pariatur dipisci velit, sed quia non numquam eius modi
              tempora provident.
            </p>
          </div>
        </div>
        <div className="que_res">
          <div className="box_question">
            <p>Sed ut perspiciatis unde iste natus error sit?</p>
            <span>
              <i className="fa fa-plus"></i>
            </span>
            <span style={{display: "none"}}>
              <i className="fa fa-minus"></i>
            </span>
          </div>
          <div className="box_response" style={{display: "none"}}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              atque eaque eius esse et harum inventore ipsam nam necessitatibus
              nemo pariatur dipisci velit, sed quia non numquam eius modi
              tempora provident.
            </p>
          </div>
        </div>
        <div className="que_res">
          <div className="box_question">
            <p>Sed ut perspiciatis unde iste natus error sit?</p>
            <span onClick={handleToggleRequest}>
              <i className="fa fa-plus"></i>
            </span>
            <span style={{display: "none"}}>
              <i className="fa fa-minus"></i>
            </span>
          </div>
          <div className="box_response" style={{display: "none"}}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              atque eaque eius esse et harum inventore ipsam nam necessitatibus
              nemo pariatur dipisci velit, sed quia non numquam eius modi
              tempora provident.
            </p>
          </div>
        </div>
        <div className="que_res">
          <div className="box_question">
            <p>Sed ut perspiciatis unde iste natus error sit?</p>
            <span>
              <i className="fa fa-plus"></i>
            </span>
            <span style={{display: "none"}}>
              <i className="fa fa-minus"></i>
            </span>
          </div>
          <div className="box_response" style={{display: "none"}}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              atque eaque eius esse et harum inventore ipsam nam necessitatibus
              nemo pariatur dipisci velit, sed quia non numquam eius modi
              tempora provident.
            </p>
          </div>
        </div>
        <div className="que_res">
          <div className="box_question">
            <p>Sed ut perspiciatis unde iste natus error sit?</p>
            <span >
              <i className="fa fa-plus" ></i>
            </span>
            <span style={{display: "none"}}>
              <i className="fa fa-minus"></i>
            </span>
          </div>
          <div className="box_response" style={{display: "none"}}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              atque eaque eius esse et harum inventore ipsam nam necessitatibus
              nemo pariatur dipisci velit, sed quia non numquam eius modi
              tempora provident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
