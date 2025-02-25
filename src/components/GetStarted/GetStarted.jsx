import React from "react";
import SignUp from "../SignUp/SignUp";
import "./getSarted.scss";

const GetStarted = () => {
  return (
    <section id="getStarted" className="section section__get-started">
      <div className="wrapper">
        <div className="col-1">
          <h3 className="heading-3">Get early access today</h3>
          <p className="text">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="col-2">
          <SignUp
            placeholder="email@example.com"
            text="Get Started For Free"
            id="1"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
