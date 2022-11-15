import React, { useRef, useState } from "react";
import LogoCloud from "../../assets/cloud-logo.png";
import LogoText from "../../assets/SAVA-logo.png";
import newpassword_image from "../../assets/newpassword/newpassword_image.png";
import css from "./newpassword.module.css";
import { Alert } from "react-bootstrap";

const NewPassword = () => {
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [passwordShow, setPasswordShow] = useState(false);

  const handlePasswordShow = () => {
    setPasswordShow(!passwordShow);
  };

  const handleSubmit = () => {
    setError("");
    setLoading(true);
  };

  return (
    <div className={css.main_div}>
      <div className={css.newpassword}>
        <div className={css.left}>
          <img src={newpassword_image} alt="new password" />
        </div>
        <div className={css.right}>
          <div className={css.logo}>
            <img src={LogoCloud} alt="logo-cloud" />
            <img src={LogoText} alt="logo-text" />
          </div>

          <div style={{ width: "300px" }}>
            <h3 className="">Create new password</h3>
            <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>
              Your new password must be different from your previous password
            </span>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
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
              <div className={css.form_group} id="password-confirm">
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
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
