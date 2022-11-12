import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LogoCloud from "../../assets/cloud-logo.png";
import LogoText from "../../assets/SAVA-logo.png";
import "./forgotpassword.css";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async function (e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Password reset has been sent to registered email!");
    } catch {
      setError("Failed to Reset Password");
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
            <h3 className="">Forgot Password</h3>
            <span style={{ fontSize: "0.7rem", fontWeight: "500" }}>
              No need to worry, we'll send you reset instructions
            </span>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
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
              <button disabled={loading} className="form-button" type="submit">
                Reset Password
              </button>
            </form>
          </div>
          <div className="login-link">
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6666 8.5H3.33331"
                stroke="#212529"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.99998 13.1668L3.33331 8.50016L7.99998 3.8335"
                stroke="#212529"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Link
              style={{
                textDecoration: "none",
                color: "#212529",
              }}
              to="/signin"
            >
              Back to SignIn
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
