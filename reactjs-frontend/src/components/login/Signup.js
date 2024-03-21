import React from "react";
import UserService from "../../services/UserService";
import styles from "../../Login.module.css";

function SignUpForm() {
    const [state, setState] = React.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const handleChange = evt => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const handleOnSubmit = evt => {
        evt.preventDefault();

        const { name, email, password } = state;
        let user = { name, email, password };

        UserService.signup(user);
        console.log("userName", name);
        console.log("email", email);
        console.log("password");
        for (const key in state) {
            setState(prevState => ({
                ...prevState,
                [key]: ""
            }));
        }


    };

    return (
        <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
            <form className={styles.formCustom} onSubmit={handleOnSubmit}>
                <h1 className={styles.hone}>Create Account</h1>
                <div className={styles.socialContainer}>
                    {/* <a href="#" className="social">
                        <i className="fab fa-facebook-f" />
                    </a> */}
                    <a href="#" className="social">
                        <i className="fab fa-google" />
                    </a>
                    {/* <a href="#" className="social">
                        <i className="fab fa-linkedin-in" />
                    </a> */}
                </div>
                <span className={styles.spanC}>or use your email for registration</span>
                <input
                    className={styles.inputC}
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input
                    className={styles.inputC}
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    className={styles.inputC}
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <input
                    className={styles.inputC}
                    type="password"
                    name="confirmPassword"
                    value={state.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                />
                <button className={`${styles.buttonCustom} ${styles.optBtn}`}>Sign Up</button>
            </form>
        </div >
    );
}

export default SignUpForm;
