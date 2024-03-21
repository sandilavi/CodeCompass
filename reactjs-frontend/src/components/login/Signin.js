import React from "react";
import UserService from '../../services/UserService';
import styles from "../../Login.module.css";

function SignInForm() {
    const [state, setState] = React.useState({
        email: "",
        password: ""
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

        const { email, password } = state;
        let user = { email, password };

        UserService.signing(user);
        // console.log("Login Success")
        for (const key in state) {
            setState({
                ...state,
                [key]: ""
            });
        }
    };



    return (
        <div className={`${styles.formContainer} ${styles.signInContainer}`}>
            <form className={styles.formCustom} onSubmit={handleOnSubmit}>
                <h1 className={styles.hone}>Sign in</h1>
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
                <span className={styles.spanC}>or use your account</span>
                <input
                    className={styles.inputC}
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
                <input
                    className={styles.inputC}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                />
                {/* <a href="#">Forgot your password?</a> */}
                <button className={styles.buttonCustom}>Sign In</button>
            </form>
        </div>
    );
}

export default SignInForm;
