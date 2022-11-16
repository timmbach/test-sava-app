
import React from "react";
// import { Container } from "react-bootstrap";
// import { AuthProvider } from "../contexts/AuthContext";
// import { AuthProvider } from "../../contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import PrivateRoutes from "../PrivateRoutes";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import LandingPage from "../LandingPage/LandingPage";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";
import NewPassword from "../NewPassword/NewPassword";
import NoProfile from '../layout/No Profile/NoProfile'
import Upload from '../Upload/Upload'

const App = () => {
  return (
    // <AuthProvider>
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path='/' element={<Layout />}>
                <Route index element={<Upload />} />
              </Route>
              <Route path='/upload-new-user' element={<NoProfile />} />
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
    </div>
    // </AuthProvider>
  )
}

export default App
