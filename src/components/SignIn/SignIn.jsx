import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LogoCloud from "../../assets/cloud-logo.png";
import LogoText from "../../assets/SAVA-logo.png";
import "./signin.css";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleSubmit = async function (e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch {
      setError("Failed to Sign In");
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
            <h3 className="">Welcome back!</h3>
            <span style={{ fontSize: "0.7rem", fontWeight: "500" }}>
              Please fill in your details
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
              <button disabled={loading} className="form-button" type="submit">
                Sign In
              </button>
            </form>
          </div>
          <div
            style={{
              marginRight: "40px",
              marginBottom: "20px",
              fontWeight: "500",
              fontSize: "0.9rem",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "grey",
              }}
              className="text-secondary"
              to="/forgot-password"
            >
              Forgot password?
            </Link>
          </div>
          <div
            style={{
              marginRight: "40px",
              fontWeight: "500",
            }}
          >
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
