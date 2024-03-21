import React, { useState } from "react";
import SignInForm from "./components/login/Signin";
import SignUpForm from "./components/login/Signup";
import styles from "./Login.module.css";




export function Login() {

  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    `${styles.container}` + (type === "signUp" ? ` ${styles.rightPanelActive}` : ``);

  console.log(containerClass);

  const updateName = () => {
    setType("signIn");
  }


  return (
    <div className={styles.myDiv}>
      <div className={styles.App}>
        <div className={containerClass} id="container">
          <SignUpForm updateName={updateName} />
          <SignInForm />
          <div className={styles.overlayContainer}>
            <div className={styles.overlay}>
              <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
                <h1 className={styles.hone}>Hi There!</h1>
                <img alt="logo" className={styles.logo} src={process.env.PUBLIC_URL + '/images/codecomp.png'} />
                <button
                  className={`${styles.buttonCustom} ${styles.ghost}`}
                  id="signIn"
                  onClick={() => handleOnClick("signIn")}
                >
                  Sign In
                </button>
              </div>
              <div className={`${styles.overlayPanel} ${styles.overlayRight}`} >
                <h1 className={styles.hone}>Welcome Back!</h1>
                <img className={styles.logo} alt="logo" src={process.env.PUBLIC_URL + '/images/codecomp.png'} />
                <button
                  className={`${styles.buttonCustom} ${styles.ghost}`}
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
