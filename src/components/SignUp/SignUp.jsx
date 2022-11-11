import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

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
    <>
      <div></div>
      <article>
        <strong className="d-flex justify-content-center w-100 text-align-center mb-4">
          Sava
        </strong>
        <div className="">
          <div>
            <h2 className="">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
              <div className="" id="email">
                <label>Email</label>
                <input type="email" ref={emailRef} required></input>
              </div>
              <div className="" id="password">
                <label>Password</label>
                <input type="password" ref={passwordRef} required></input>
              </div>
              <div className="" id="password-confirm">
                <label>Password Confirmation</label>
                <input
                  type="password"
                  ref={passwordConfirmRef}
                  required
                ></input>
              </div>
              <button disabled={loading} className="" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="">
          Already have an account? <Link to="/signin">Sign In</Link>
        </div>
      </article>
    </>
  );
};

export default SignUp;
