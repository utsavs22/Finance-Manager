import React, { useState } from "react";
import './Navbar.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive(!isActive);
  }

  return (
    <div className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          My Website
        </a>
        <ul className={`navbar-menu ${isActive ? "active" : ""}`}>
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/">About</a>
          </li>
          <li className="navbar-item">
            <a href="/">Services</a>
          </li>
          <li className="navbar-item">
            <a href="/">Portfolio</a>
          </li>
          <li className="navbar-item">
            <a href="/">Contact</a>
          </li>
        </ul>
        <div
          className={`navbar-toggle ${isActive ? "active" : ""}`}
          onClick={handleToggle}
        >
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
