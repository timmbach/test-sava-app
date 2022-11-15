import React from 'react'
import { Container } from 'react-bootstrap'
// import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import PrivateRoutes from '../PrivateRoutes'
import ForgotPassword from '../ForgotPassword/ForgotPassword'
import UpdateProfile from '../UpdateProfile/UpdateProfile'
import css from './app.module.css'
import LandingPage from '../LandingPage/LandingPage'
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions'
import NewPassword from '../NewPassword/NewPassword'

const App = () => {
  return (
    // <AuthProvider>
    <Container className={css.app_container} style={{ minHeight: '100vh' }}>
      <div className={css.routes_div}>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path='/' element={<Layout />} />
              <Route path='/update-profile' element={<UpdateProfile />} />
            </Route>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/new-password' element={<NewPassword />} />
            <Route path='/landing-page' element={<LandingPage />} />
            <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Container>
    // </AuthProvider>
  )
}

export default App
