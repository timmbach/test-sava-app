import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Alert from '../SignUp/Alert'
import css from "./verifyemail.module.css";
import verifyemail_image from "../../assets/verifyemail/verifyemail.png";
import LogoCloud from "../../assets/sava-cloud.png";
import LogoText from "../../assets/SAVA-logo.png";
import Verified from '../Verified/Verified';



const VerifyEmail = () => {
    const [verCode, setVerCode] = useState('');
    const {confirmSignup, resendVerCode} = useAuth();
    const {state} = useLocation();
    const [wasCodeResent, setWasCodeResent] = useState(false)
    const [error, setError] = useState('')
    const [isVerified, setIsVerified] = useState(false);
    const [email, setEmail] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault();
        confirmSignup(state.email, verCode)
        .then(data => {
          if (data.data.status_code === 486) {
            setError(data.data.message)
          } else if (data.data.status_code !== 200) {
            setError('Verification failed! Generate a new verification code')
          } else {
            setIsVerified(true);
          }          
        })
          .catch(err => console.log(err))
    }

    const resendCode = (e) => {
        e.preventDefault();      
        resendVerCode(email)
        .then(res => {
          if (res.data.status_code === 200) {
            setWasCodeResent(true)
          }
        })
        .catch(err => {
          console.log(err);
        })
    }

  return (
    <>
    {
      isVerified ? 
        <Verified /> 
        : 
        <div className={css.main_div}>
        <div className={css.signup}>
          <div className={css.left}>
            <img src={verifyemail_image} alt="sign in" className={css.left_image1} />
            <img src={LogoCloud} alt="sign in" className={css.left_image2} />
          </div>
          <div className={css.right}>
            <div className={css.logo}>
              <img src={LogoCloud} alt="logo-cloud" />
              <img src={LogoText} alt="logo-text" />
            </div>
            <div className={css.form_wrapper}>
              {
                wasCodeResent ? 
                  <Alert message={"A new verification code is on its way."}/>
                    : null        
              }
              <div>
                <h3 className="">Verify your email</h3>
                <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                Your verification code is on the way. To log in, enter the code we emailed to {state ? state.email : 'you'} . It may take a minute  to arrive 
                </span>
              </div>
              {error && <Alert message={error} />}
              <form className={css.form} onSubmit={handleSubmit}>
                <div className={css.form_group}>
                  <label htmlFor="verCode">Verification Code</label>
                  <input  
                  type="text" 
                  name='verCode'
                  id='verCode'
                  value={verCode}
                  onChange={(e) => setVerCode(e.target.value)}  
                />
                </div>
                
                <button className={css.form_button} type="submit">Verify email</button>
              </form>
              <form className={css.form}>
                <div className={css.form_group}>
                  <label htmlFor="prevEmail">Email</label>
                  <input  
                  type="email" 
                  name='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}  
                />
                </div>
                <button className={css.form_button} onClick={resendCode}>Resend Code</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default VerifyEmail