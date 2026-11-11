import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="ajs-footer">
      <div className="container">
        <div className="row">

          {/* Logo & About */}
          <div className="col-md-3 mb-4">
            <img
              src="/images/ajscloud_logo.png"
              alt="AJS Cloud"
              className="footer-logo"
              height="40"
            />
            <p className="footer-text">
              AJS is a company that is established with the mission to grow with the growth of others.
            </p>
          </div>

          {/* Important Links */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Important Links</h5>
            <ul className="footer-links">
              <li><a href="#">AJS Cloud</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="http://ajscloud.org/">University</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Services</h5>
            <ul className="footer-links">
              <li><a href="#">Mobile Development</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Managerial Services</a></li>
              <li><a href="#">Professional Services</a></li>
              <li><a href="#">CRM</a></li>
            </ul>
          </div>

          {/* Our Work & CTA */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Our Work</h5>
            <ul className="footer-links">
              <li><a href="https://timecards.ai">TimeCard Business</a></li>
              <li><a href="https://personal.timecards.ai/">TimeCard Personal</a></li>
              <li><a href="https://simuagent.ai/">SimuAgent</a></li>
            </ul>

            <a href="#" className="btn btn-danger footer-btn">
              Book A Call
            </a>

            <div className="footer-social">
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        Privacy | Site Terms | © 2025, AJS Cloud. All rights reserved. 10080 N Wolfe Rd, Suit SW3-234/200, Cupertino CA 95014
      </div>
    </footer>
  );
};

export default Footer;
