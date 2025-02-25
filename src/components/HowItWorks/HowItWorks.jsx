import React from "react";
import "./howItWorks.css";
import howImg from "../../assets/images/illustration-2.svg";
import quotesImg from "../../assets/images/icon-quotes.svg";
import avatarImg from "../../assets/images/avatar-testimonial.jpg";
import arrowIcon from "../../assets/images/icon-arrow.svg";
const HowItWorks = () => {
  return (
    <section id="howItWorks" className="section section__how-it-works">
      <div className="wrapper">
        <div className="col-1">
          <img
            src={howImg}
            alt="Productive Colleagues Illustration"
            className="img-how"
            id="howIMG"
          />
        </div>
        <div className="col-2">
          <h2 className="heading-2">Stay productive, wherever you are</h2>
          <p className="text">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="text">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>

          <a href="#" className="link green">
            See how Fylo Works
            <img src={arrowIcon} alt="" />
          </a>

          <div className="testimonial-box" id="testimonialBox">
            <img src={quotesImg} alt="quotes" />
            <p className="text">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="avatar">
              <img
                src={avatarImg}
                alt="Avatar Profile"
                className="img-avatar"
              />
              <p className="avatar-name">
                <span className="name">Kyle Burton</span>
                <span className="title">Founder & CEO, Huddle</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
