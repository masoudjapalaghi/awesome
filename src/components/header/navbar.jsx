import React from "react";

const Navbar = () => {
  return (
    <div className="navbars">
      <div className="logo">
        <img src="/assets/images/Logo.png" alt="LOGO" />
      </div>
        <nav className="nav">
          <ul className="navmenu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Product</li>
            </a>
            <a href="#">
              <li>Pricing</li>
            </a>
            <a href="#">
              <li>contact</li>
            </a>
          </ul>
        </nav>
        <span className="iconbar">
          <i className="fa fa-bars"></i>
        </span>
    </div>
  );
};

export default Navbar;
