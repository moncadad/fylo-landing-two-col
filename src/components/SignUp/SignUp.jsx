import React from "react";
import "./signUp.scss";

const SignUp = (props) => {
  // email checker function

  return (
    <form className="form__email">
      <div className="form__input">
        <input type="email" placeholder={props.placeholder} />
        <p className="error-msg" id="errorMsg">
          Please check your email
        </p>
      </div>
      <button className="form__btn" onClick={() => checkEmail(props.id)}>
        {props.text}
      </button>
    </form>
  );
};

export default SignUp;

const inputs = document.querySelectorAll("input");
const errorMsg = document.querySelectorAll(".error-msg");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function checkEmail(a) {
  resetUI(a);
  emailTest(a);
}

function emailTest(a) {
  // test input using Regex
  if (!emailRegex.test(inputs[a].value)) {
    errorUI(a);
  } else {
    console.log("Valid email: ", inputs[a].value);
  }
}

function resetUI(a) {
  // resets to intial UI
  inputs[a].style.borderColor = "";
  errorMsg[a].classList.remove("on");
}

function errorUI(a) {
  // set error UI
  inputs[a].style.borderColor = "red";
  errorMsg[a].classList.add("on");
}
