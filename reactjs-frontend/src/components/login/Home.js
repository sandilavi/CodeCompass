import React, { useState } from "react";
import SignInForm from "./Signin";
import SignUpForm from "./Signup";

export default function Home() {
    const [type, setType] = useState("signIn");
    const handleOnClick = (text) => {
      if (text !== type) {
        setType(text);
        return;
      }
    };
    const containerClass =
      "container " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <div>
            
        <div className={containerClass} id="container">
          <SignUpForm />
          <SignInForm />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Hi There!</h1>
                <img className="logo" src={process.env.PUBLIC_URL + '/images/codecomp.png'} />
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
                <img className="logo" src={process.env.PUBLIC_URL + '/images/codecomp.png'} />
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
  )
}