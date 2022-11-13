import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../../contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import PrivateRoutes from "../PrivateRoutes";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import css from "./app.module.css";
import LandingPage from "../LandingPage/LandingPage";

const App = () => {
  return (
    <AuthProvider>
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
              <Route path="/landing-page" element={<LandingPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Container>
    </AuthProvider>
  );
};

export default App;
