import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/header.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top ajs-navbar">
      <div className="container-fluid">
        {/* Logo */}
        <a
          className="navbar-brand ajs-logo d-flex align-items-center gap-2 fw-bold"
          href="https://ajscloud.com/"
        >
          <img src="/images/ajscloud_logo.png" alt="AJS Cloud" height="40" />
        </a>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav align-items-lg-center nav-shift">
            {/* Home */}
            <li className="nav-item">
              <a className="nav-link active" href="https://ajscloud.com/">
                Home
              </a>
              {/* <a className="nav-link active" href="http://localhost:5173/">
                Home
              </a> */}
            </li>

            {/* Store */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://shop.ajscloud.com/cart/"
                target="_self"
              >
                {/* https://shop.ajscloud.com/store/ */}
                Store
              </a>
              {/* <a
                className="nav-link"
                href="http://localhost:5173/"
                target="_self"
              >
                Store
              </a> */}
            </li>

            {/* Hire Developers */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://shop.ajscloud.com/hire-developer/"
              >
                Hire Developers
              </a>
            </li>

            {/* Industries Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#industries"
                id="industriesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Industries
              </a>

              <ul
                className="dropdown-menu"
                aria-labelledby="industriesDropdown"
              >
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/industry/financial-services"
                  >
                    Financial Services
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/industry/government-agencies"
                  >
                    Government Agencies
                  </NavLink>
                </li>

                <li>
                  <NavLink className="dropdown-item" to="/industry/healthcare">
                    Healthcare
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/industry/manufacturing-sector"
                  >
                    Manufacturing Sector
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/industry/marketing-retail"
                  >
                    Marketing & Retail
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* University */}
            <li className="nav-item">
              <a className="nav-link" href="http://ajscloud.org/">
                University
              </a>
            </li>















            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#services"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>

              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/on-boarding-with-ajs"
                  >
                    On Boarding With AJS
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/hybrid-cloud"
                  >
                    Hybrid / Cloud
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/optimizing-infrastructure"
                  >
                    Optimizing Infrastructure
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/developing-new-tools"
                  >
                    Developing New Tools
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/competitive-advantage"
                  >
                    Competitive Advantage
                  </NavLink>
                </li>
              </ul>
            </li>
















            {/* Career Dropdown */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#career"
                id="careerDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <NavLink className="dropdown-item" to="/about-us">
                  About Us
                </NavLink>
              </a>

            </li> */}

            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/about-us");
                }}
              >
                About Us
              </a>
            </li>


























          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
