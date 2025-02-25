import React from "react";
import "./hero.css";
import heroImg from "../../assets/images/illustration-1.svg";
import SignUp from "../SignUp/SignUp";

const Hero = () => {
  return (
    <section id="hero" className="section section__hero">
      <div className="wrapper">
        <div className="col-1">
          <img
            src={heroImg}
            alt="Files Illustration"
            className="img-hero"
            id="heroImg"
          />
        </div>
        <div className="col-2">
          <h1 className="heading-1">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="text">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <SignUp placeholder="Enter your email..." text="Get Started" id="0" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// const btns = document.querySelectorAll(".form__btn");
// const inputs = document.querySelectorAll("input");
// // funciton email verifier, and alert if not email
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// function emailValid() {
//   if (!emailRegex.test(inputs[0].value)) {
//     console.log("Email false!");
//   }
// }
