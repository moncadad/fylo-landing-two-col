import React from "react";
import "../../App.scss";
import "./header.scss";
import logoImg from "../../assets/images/logo.svg";
const Header = () => {
  return (
    <header id="header" className="section section__header">
      <div className="wrapper">
        <img src={logoImg} alt="Fylo Logo" className="logo" id="logoImg" />
        <nav className="navbar">
          <a href="#" className="link">
            Features
          </a>
          <a href="#" className="link">
            Team
          </a>
          <a href="#" className="link">
            Sign in
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
