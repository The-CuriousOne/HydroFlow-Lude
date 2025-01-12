import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = ({ show }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (!show) {
      setMobileMenuOpen(false);
    }
  }, [show]);

  return (
    <div className={`Navbar ${!show ? "hidden" : ""}`}>
      <div className="leftComponent">
        <h3>HydroFlow Lude</h3>
      </div>

      <div className="rightComponent">
        <ul className="navbarMenu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test">Track</Link>
          </li>
          <li>
            <Link to="/test">About</Link>
          </li>
          <li>
            <Link to="/test">Contact Us</Link>
          </li>
          <li>
            <Link to="/test" className="userInfoListItem">
              <img src="/images/navbar/profile-user.png" alt="Profile" />
              <div className="userStatus">User Info</div>
            </Link>
          </li>
        </ul>
        <IoMenu className="menuIcon" onClick={toggleMobileMenu}/>
        <ul className={`navbarMobileMenu ${isMobileMenuOpen ? "open" : ""} ${!show ? "hidden" : ""}`}>
          <IoClose className="closeIcon" onClick={toggleMobileMenu}/>
          <li className="userInfoListItemMobile">
            <Link to='/test' onClick={toggleMobileMenu}>
              <img src="/images/navbar/profile-user.png" alt="Profile" />
              <div className="userStausMobile">User Info</div>
            </Link>
          </li>
          <li>
            <Link to='/' onClick={toggleMobileMenu}>Home</Link>
          </li>
          <li>
            <Link to='/test' onClick={toggleMobileMenu}>Track</Link>
          </li>
          <li>
            <Link to='/' onClick={toggleMobileMenu}>About</Link>
          </li>
          <li>
            <Link to='/' onClick={toggleMobileMenu}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
