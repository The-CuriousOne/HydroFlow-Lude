import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="topComponent">
        <div className="leftTopComponent">
          <div className="leftTopLogo">
            <Link to="/">
              <h3>HydroFlow Lude</h3>
            </Link>
          </div>
          <div className="leftTopText">
            <p>Connect with us and make the world a better place</p>
          </div>
          <div className="leftTopSocials">
            <a href="https://www.instagram.com/darathi_13_harshanya?igsh=MXA0bWR4dGZlNWQ3Yw==">
              <img src="/images/footer/instagram.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/images/footer/twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/in/harshanya-darathi-01350a228/">
              <img src="/images/footer/linkedin.png" alt="Linkedin" />
            </a>
          </div>
        </div>
        <div className="rightBottomComponent">
          <div className="companySection">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="#">Account</Link>
              </li>
              <li>
                <Link to="/contacts">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="legalSection">
            <h4>Legal & Support</h4>
            <ul>
              <li>
                <Link to="#">Submit Ticket</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Services</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/license">License</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottomComponent">
        <h5>&copy; 2025 HydroFlow Lude, Inc. All rights reserved.</h5>
      </div>
    </div>
  );
};

export default Footer;
