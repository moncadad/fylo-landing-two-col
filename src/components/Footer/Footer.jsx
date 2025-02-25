import React from "react";
import "./footer.css";
import logoImg from "../../assets/images/logo-light.svg";
import phoneIcon from "../../assets/images/icon-phone.svg";
import emailIcon from "../../assets/images/icon-email.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="section section__footer">
      <div className="wrapper">
        <img src={logoImg} alt="Fylo Logo" className="logo" id="logoImg" />
        <div className="footer__links">
          {/* contact */}
          <ul className="footer__list footer__list-1">
            <li className="item">
              <a href="#">
                <img src={phoneIcon} alt="Phone Icon" />
                Phone: +1-543-123-4567
              </a>
            </li>
            <li className="item">
              <a href="#">
                <img src={emailIcon} alt="Email Icon" />
                example@fylo.com
              </a>
            </li>
          </ul>
          {/* about us... */}
          <ul className="footer__list footer__list-2">
            <li className="item">
              <a href="#">About Us</a>
            </li>
            <li className="item">
              <a href="#">Jobs</a>
            </li>{" "}
            <li className="item">
              <a href="#">Press</a>
            </li>{" "}
            <li className="item">
              <a href="#">Blog</a>
            </li>
          </ul>
          {/* contact us */}{" "}
          <ul className="footer__list footer__list-3">
            <li className="item">
              <a href="#">Contact Us</a>
            </li>
            <li className="item">
              <a href="#">Terms</a>
            </li>
            <li className="item">
              <a href="#">Privacy</a>
            </li>
          </ul>
          {/* social links */}
          <ul className="footer__list footer__list-4">
            <li className="item">
              <a href="#">
                <FaFacebookF />
              </a>
            </li>{" "}
            <li className="item">
              <a href="#">
                <FaTwitter />
              </a>
            </li>{" "}
            <li className="item">
              <a href="#">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
