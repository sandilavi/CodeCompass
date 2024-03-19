import React, { useState } from "react";
import "./global.css";
import SignInForm from "./components/login/Signin";
import SignUpForm from "./components/login/Signup";




export function Login() {

  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <div className="my-div">
      <div className="App">
        <div className={containerClass} id="container">
          <SignUpForm />
          <SignInForm />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Hi There!</h1>
                <img alt="logo" className="logo" src={process.env.PUBLIC_URL + '/images/codecomp.png'} />
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => handleOnClick("signIn")}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Welcome Back!</h1>
                <img className="logo" alt="logo" src={process.env.PUBLIC_URL + '/images/codecomp.png'} />
                <button
                  className="ghost "
                  id="signUp"
                  onClick={() => handleOnClick("signUp")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
