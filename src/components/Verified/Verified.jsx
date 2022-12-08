import React from 'react'
import css from "./verified.module.css";
import Handshake from "../../assets/verifyemail/friendly-handshake.png";
import LogoCloud from "../../assets/sava-cloud.png";
import LogoText from "../../assets/SAVA-logo.png";
import { useNavigate } from 'react-router-dom';



const VerifyEmail = () => {
   const navigate = useNavigate();
   const handleClick = () => {
     navigate('/signin')
   }

  return (
    <div className={css.main_div}>
      <div className={css.signup}>
        <div className={css.left}>
          <img src={Handshake} alt="sign in" className={css.left_image1} />
          <img src={LogoCloud} alt="sign in" className={css.left_image2} />
        </div>
        <div className={css.right}>
          <div>
          <div className={css.logo}>
            <img src={LogoCloud} alt="logo-cloud" />
            <img src={LogoText} alt="logo-text" />
          </div>
          <div className={css.form_wrapper}>
            <div>
              <h3 className="">Verified!</h3>
              <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>
              You have successfully verified your account. 
              </span>
            </div>
            <form className={css.form}>
              <button className={css.form_button} onClick={handleClick}>Login</button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail