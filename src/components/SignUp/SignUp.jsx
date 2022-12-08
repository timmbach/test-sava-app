import React, { useRef, useState } from 'react'
import Alert from './Alert'
import { Link, useNavigate } from 'react-router-dom'
import LogoCloud from '../../assets/cloud-logo.png'
import LogoText from '../../assets/SAVA-logo.png'
import cloudSava from '../../assets/sava-cloud.png'
import signup_image from '../../assets/signup/signup_image.png'
import css from './signup.module.css'
import { useAuth } from '../../contexts/AuthContext'

const SignUp = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const navigate = useNavigate()
  const { signup } = useAuth()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [passwordShow, setPasswordShow] = useState(false)

  const handlePasswordShow = () => {
    setPasswordShow(!passwordShow)
  }

  const handleSubmit = async function (e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      signup(emailRef.current.value, passwordRef.current.value)
      .then((res) => {
        console.log(res);
        if (res.data.status_code === 200) {
          navigate('/verify-email', {
            state: {
              email: emailRef.current.value
            }
          }) 
        } else if (res.data.errorMessage){
          setError(res.data.errorMessage)
        } else if (res.data.status_code === 487) {
          setError(res.data.message)
        } else {
          setError(`${res.data.message}! Password must have at least a capital letter, number, and special character!`)
        }
      })
      .catch((err) => setError(err.message))

    } catch {
      setError('Failed to create account')
    }

    setLoading(false)
  }
  return (
    <div className={css.main_div}>
      <div className={css.signup}>
        <div className={css.left}>
          <img src={signup_image} alt='sign up' className={css.left_image1} />
          <img src={cloudSava} alt='sign in' className={css.left_image2} />
        </div>
        <div className={css.right}>
          <div className={css.logo}>
            <img src={LogoCloud} alt='logo-cloud' />
            <img src={LogoText} alt='logo-text' />
          </div>

          <div>
            <h3 className=''>Create your account</h3>
            <span style={{ fontSize: '0.8rem', fontWeight: '500' }}>All you need to organize your files</span>
            {error && <Alert message={error} />}
            <form onSubmit={handleSubmit} className={css.form}>
              <div className={css.form_group} id='email'>
                <label htmlFor='email'>Email</label>
                <input name='email' id='email' type='email' ref={emailRef} required></input>
              </div>
              <div className={css.form_group} id='password'>
                <label htmlFor='password'>Password</label>
                <input
                  name='password'
                  id='password'
                  type={passwordShow ? 'text' : 'password'}
                  ref={passwordRef}
                  required
                ></input>
                <i
                  className={`${css.eye_icon} fa-solid ${passwordShow ? 'fa-eye' : 'fa-eye-slash'}`}
                  onClick={handlePasswordShow}
                ></i>
              </div>
              <div className={css.form_group} id='password-confirm'>
                <label htmlFor='password-confirm'>Confirm Password</label>
                <input
                  name='password-confirm'
                  id='password-confirm'
                  type={passwordShow ? 'text' : 'password'}
                  ref={passwordConfirmRef}
                  required
                ></input>
                <i
                  className={`${css.eye_icon} fa-solid ${passwordShow ? 'fa-eye' : 'fa-eye-slash'}`}
                  onClick={handlePasswordShow}
                ></i>
              </div>
              <span style={{ fontSize: '0.6rem', fontWeight: '500' }}>
                Clicking on 'Sign Up' means you agree to our{' '}
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/terms-and-conditions'>
                  terms and conditions
                </Link>
              </span>
              <button disabled={loading} className={css.form_button} type='submit'>
                Sign Up
              </button>
            </form>
          </div>
          <div
            style={{
              marginRight: '40px',
              fontWeight: '500'
            }}
          >
            Already have an account? <Link to='/signin'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
