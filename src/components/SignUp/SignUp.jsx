import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContext";
// import axios from "../../api/axios.js";
import LogoCloud from "../../assets/cloud-logo.png";
import LogoText from "../../assets/SAVA-logo.png";
import signup_image from "../../assets/signup/signup_image.png";
import css from "./signup.module.css";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const { signup } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const history = useNavigate();

  const handlePasswordShow = () => {
    setPasswordShow(!passwordShow);
  };

  const handleSubmit = async function (e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      // await signup(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch {
      setError("Failed to create account");
    }

    setLoading(false);
  };
  return (
    <div className={css.main_div}>
      <div className={css.signup}>
        <div className={css.left}>
          <img src={signup_image} alt="sign up" />
        </div>
        <div className={css.right}>
          <div className={css.logo}>
            <img src={LogoCloud} alt="logo-cloud" />
            <img src={LogoText} alt="logo-text" />
          </div>

          <div>
            <h3 className="">Create your account</h3>
            <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>
              All you need to organize your files
            </span>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
              <div className={css.form_group} id="email">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  ref={emailRef}
                  required
                  // placeholder="Email"
                  // class="info-placeholder"
                ></input>
              </div>
              <div className={css.form_group} id="password">
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  id="password"
                  type={passwordShow ? "text" : "password"}
                  ref={passwordRef}
                  required
                  // placeholder="Password"
                  // class="info-placeholder"
                ></input>
                <i
                  className={`${css.eye_icon} fa-solid ${
                    passwordShow ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={handlePasswordShow}
                ></i>
              </div>
              {/* <div className={css.form_group} id="password-confirm">
                <label htmlFor="password-confirm">Confirm Password</label>
                <input
                  name="password-confirm"
                  id="password-confirm"
                  type={passwordShow ? "text" : "password"}
                  ref={passwordConfirmRef}
                  required
                  // placeholder="Confirm Password"
                  // class="info-placeholder"
                ></input>
                <i
                  className={`${css.eye_icon} fa-solid ${
                    passwordShow ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={handlePasswordShow}
                ></i>
              </div> */}
              <span style={{ fontSize: "0.6rem", fontWeight: "500" }}>
                Clicking on 'Sign Up' means you agree to our{" "}
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/terms-and-conditions"
                >
                  terms and conditions
                </Link>
              </span>
              <button
                disabled={loading}
                className={css.form_button}
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
          <div
            style={{
              marginRight: "40px",
              fontWeight: "500",
            }}
          >
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;