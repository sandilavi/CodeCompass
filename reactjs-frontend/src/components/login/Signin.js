import React from "react";
import UserService from '../../services/UserService';
import Swal from 'sweetalert2';
//import { redirect } from "react-router";

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

        UserService.signing(user).then(response => {
            console.log(response.data.message)
            if (response.data.message == "Login Success") {
                window.location.href = 'http://localhost:3000/app/menu/home';
                redirect("http://localhost:3000/app/menu/home")
                //navigate(path, { replace: true });

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
        <div className="form-container sign-in-container">
            <form onSubmit={handleOnSubmit}>
                <h1>Sign in</h1>
                <div className="social-container">
                    <a href="#" className="social">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#" className="social">
                        <i className="fab fa-google-plus-g" />
                    </a>
                    <a href="#" className="social">
                        <i className="fab fa-linkedin-in" />
                    </a>
                </div>
                <span>or use your account</span>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
    );
}

export default SignInForm;
