import React from "react";
import { Container } from "react-bootstrap";
// import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";
import PrivateRoutes from "../components/PrivateRoutes";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import css from "./app.module.css";
import LandingPage from "../components/LandingPage/LandingPage";
import TermsAndConditions from "../components/TermsAndConditions/TermsAndConditions";
import NewPassword from "../components/NewPassword/NewPassword";

const App = () => {
  return (
    // <AuthProvider>
    <Container className={css.app_container} style={{ minHeight: "100vh" }}>
      <div className={css.routes_div} style={{ maxWidth: "500px" }}>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </Container>
    // </AuthProvider>
  );
};

export default App;
