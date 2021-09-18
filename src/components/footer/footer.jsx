import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="text_footer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque
          eaque eius esse et harum inventore ipsam nam necessitatibus nemo
          pariatur provident.
        </p>
        <small>© 2021 Masoud Teymuri</small>
      </div>
      <div className="link_contant">
        <div>
          <h4>Quick Links</h4>
          <h6>Pricing</h6>
          <h6>Contact</h6>
        </div>
        <div>
          <h4>Quick Links</h4>
          <h6>Pricing</h6>
          <h6>Contact</h6>
        </div>
      </div>
      <div className="social_media">
        <h4>Social Medial</h4>
        <div className="icon_socimedai">
          <a href="#">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
