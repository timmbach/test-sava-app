import React, { useContext, useState } from 'react'
import axios from '../api/axios'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

const REGISTER_URL = 'new_user/sign_up'
const CONFIRM_SIGN_UP = 'new_user/confirm_sign_up'
const RESEND_CODE_URL = 'new_user/resend_confirmation_code'
const SIGN_IN_URL = 'initiate_auth/sign_in'
const SIGN_OUT_URL = 'initiate_auth/sign_out'
const RESET_PASSWORD_URL = 'initiate_auth/forgotpassword'
const CONFIRM_RESET_PASSWORD_URL = 'initiate_auth/confirm_forgot_password'

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      axios
        .post(
          SIGN_IN_URL,
          JSON.stringify({
            Email: Username,
            Password: Password
          }),
          {
            headers: { 'Content-Type': 'application/json' }
          }
        )
        .then(res => {
          if (res.data.body) {
            setCurrentUser({
              Email: Username,
              Token: res.data.body,
              ProfilePixPresent: res.data.body.ProfilePixPresent
            })
            localStorage.setItem(
              'user',
              JSON.stringify({
                Email: Username,
                Token: res.data.body,
                ProfilePixPresent: res.data.body.ProfilePixPresent
              })
            )
          }
          console.log(res)
          resolve(res)
        })
        .catch(err => {
          console.log('fail to log in', err)
          reject(err)
        })
    })
  }

  const confirmSignup = async (email, code) => {
    return await new Promise((resolve, reject) => {
      axios
        .post(
          CONFIRM_SIGN_UP,
          JSON.stringify({
            Email: email,
            Confirmation_Code: code
          }),
          {
            headers: { 'Content-Type': 'application/json' }
          }
        )
        .then(res => {
          console.log(res)
          resolve(res)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
  }

  const signup = async (email, password) => {
    return await new Promise((resolve, reject) => {
      axios
        .post(
          REGISTER_URL,
          JSON.stringify({
            Email: email,
            Password: password
          }),
          {
            headers: { 'Content-Type': 'application/json' }
          }
        )
        .then(res => {
          console.log(res)
          resolve(res)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
  }

  const resendVerCode = async Email => {
    return await new Promise((resolve, reject) => {
      axios
        .post(
          RESEND_CODE_URL,
          JSON.stringify({
            Email
          })
        )
        .then(res => {
          console.log(res)
          resolve(res)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
  }

  const signout = async () => {
    setCurrentUser(null)
    localStorage.removeItem('user')
    await axios.post(
      SIGN_OUT_URL,
      JSON.stringify({
        Access_Token: currentUser.data.Token.AuthenticationResult.AccessToken
      })
    )
  }

  const resetPassword = async Email => {
    return await new Promise((resolve, reject) => {
      axios
        .post(
          RESET_PASSWORD_URL,
          JSON.stringify({
            Email
          }),
          {
            headers: { 'Content-Type': 'application/json' }
          }
        )
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  }

  const confirmResetPassword = async (Email, Confirmation_Code, Password) => {
    return await new Promise((resolve, reject) => {
      axios
        .post(
          CONFIRM_RESET_PASSWORD_URL,
          JSON.stringify({
            Email,
            Confirmation_Code,
            Password
          }),
          {
            headers: { 'Content-Type': 'application/json' }
          }
        )
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  }

  const value = {
    currentUser,
    signup,
    authenticate,
    confirmSignup,
    resendVerCode,
    signout,
    resetPassword,
    confirmResetPassword,
    setCurrentUser
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
