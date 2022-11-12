import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LogoCloud from "../../assets/cloud-logo.png";
import LogoText from "../../assets/SAVA-logo.png";
import "./signup.css";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleSubmit = async function (e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch {
      setError("Failed to create account");
    }

    setLoading(false);
  };
  return (
    <main>
      <div className="signup">
        <div className="article-left"></div>
        <div className="right">
          <div className="logo">
            <img src={LogoCloud} alt="logo-cloud" />
            <img src={LogoText} alt="logo-text" />
          </div>

          <div>
            <h3 className="">Create your account</h3>
            <span style={{ fontSize: "0.7rem", fontWeight: "500" }}>
              All you need to organize your files
            </span>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
              <div className="form-group" id="email">
                <input
                  type="email"
                  ref={emailRef}
                  required
                  placeholder="Email"
                  class="info-placeholder"
                ></input>
              </div>
              <div className="form-group" id="password">
                <input
                  type="password"
                  ref={passwordRef}
                  required
                  placeholder="Password"
                  class="info-placeholder"
                ></input>
              </div>
              <div className="form-group" id="password-confirm">
                <input
                  type="password"
                  ref={passwordConfirmRef}
                  required
                  placeholder="Confirm Password"
                  class="info-placeholder"
                ></input>
              </div>
              <span style={{ fontSize: "0.5rem", fontWeight: "500" }}>
                Clicking on 'Sign Up' means you agree to our terms and
                conditions
              </span>
              <button disabled={loading} className="form-button" type="submit">
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
    </main>
  );
};

export default SignUp;
