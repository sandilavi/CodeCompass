import React from "react";
import UserService from '../../services/UserService';
import Swal from 'sweetalert2';
import styles from "../../Login.module.css";
import { useNavigate } from 'react-router-dom';

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

    const navigation = useNavigate();

    const handleOnSubmit = evt => {
        evt.preventDefault();

        const { email, password } = state;
        let user = { email, password };

        UserService.signing(user).then(response => {
            console.log(response.data.message)
            if (response.data.message == "Login Success") {
                UserService.getUserDetails(email).then(response => {
                    localStorage.setItem('id', JSON.stringify(response.data.userId));
                    localStorage.setItem('email', JSON.stringify(email));
                    localStorage.setItem('name', JSON.stringify(response.data.userName));
                });
                //const id = JSON.parse(localStorage.getItem('id'));
                navigation('/menu/home', { replace: true });
            } else if (response.data.message == "Please verify your email first") {
                verifyEmail();
            } else if (response.data.message == "Login Failed") {
                loginFailed();
            } else if (response.data.message == "password Not Match") {
                passwordNotMatch();
            } else if (response.data.message == "Email not exits") {
                EmailNotExits();
            }

        })
            .catch(error => {
                console.error('Error:', error);
                throw error;
            });


        UserService.signing(user);
        // console.log("Login Success")
        for (const key in state) {
            setState({
                ...state,
                [key]: ""
            });
        }
    };



    const verifyEmail = () => {
        Swal.fire({
            title: 'Verify Email',
            text: `Please Verify Your Email First`,
            icon: 'error',
            iconHtml: "<i class='fas fa-exclamation-triangle'></i>",
            confirmButtonText: 'Ok',
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("ok");
            }
        });
    }

    const loginFailed = () => {
        Swal.fire({
            title: 'Login Failed',
            text: `Please Use Correct Email And Password`,
            icon: 'error',
            iconHtml: "<i class='fas fa-exclamation-triangle'></i>",
            confirmButtonText: 'Ok',
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("ok");
            }
        });
    }

    const passwordNotMatch = () => {
        Swal.fire({
            title: 'Password Not Match',
            text: `Please Use Correct Password`,
            icon: 'error',
            iconHtml: "<i class='fas fa-exclamation-triangle'></i>",
            confirmButtonText: 'Ok',
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("ok");
            }
        });
    }
    const EmailNotExits = () => {
        Swal.fire({
            title: 'Email Not Exits',
            text: `Please Register This Email First`,
            icon: 'error',
            iconHtml: "<i class='fas fa-exclamation-triangle'></i>",
            confirmButtonText: 'Ok',
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("ok");
            }
        });
    }

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
