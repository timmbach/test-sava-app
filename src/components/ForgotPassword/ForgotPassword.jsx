import React, { useRef, useState } from "react";
import  Alert  from "../SignUp/Alert";
import { Link } from "react-router-dom";
import LogoCloud from "../../assets/cloud-logo.png";
import LogoText from "../../assets/SAVA-logo.png";
import cloudSava from "../../assets/sava-cloud.png";
import forgotpassword_image from "../../assets/forgotpassword/forgotpassword_image.png";
import css from "./forgotpassword.module.css";
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'


const ForgotPassword = () => {
  const emailRef = useRef();
  const {resetPassword} = useAuth();
  const navigate = useNavigate()

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async function (e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      resetPassword(emailRef.current.value)
      .then(res => {
        console.log(res);
        if (res.data.status_code === 200) {
          navigate('/new-password', {
            state: {
              email: emailRef.current.value
            }
          }) 
        } else {
          setError(res.data.message)
        }
      })
      .catch(err => console.log(err))
    } catch {
      setError("Failed to Reset Password");
    }

    setLoading(false);
  };
  return (
    <div className={css.main_div}>
      <div className={css.signup}>
        <div className={css.left}>
          <img
            src={forgotpassword_image}
            alt="forgot password"
            className={css.left_image1}
          />
          <img src={cloudSava} alt="sign in" className={css.left_image2} />
        </div>
        <div className={css.right}>
          <div className={css.logo}>
            <img src={LogoCloud} alt="logo-cloud" />
            <img src={LogoText} alt="logo-text" />
          </div>

          <div style={{ width: "80%" }}>
            <h3 className="">Forgot Password</h3>
            <span>No need to worry, we'll send you reset instructions</span>
            {error && <Alert message={error} />}
            <form className={css.form} onSubmit={handleSubmit}>
              <div className={css.form_group} id="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={emailRef}
                  required
                  // placeholder="Email"
                  // class="info-placeholder"
                ></input>
              </div>
              <button
                disabled={loading}
                className={css.form_button}
                type="submit"
              >
                Reset Password
              </button>
            </form>
          </div>
          <div className={css.login_link}>
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
    </div>
  );
};

export default ForgotPassword;
