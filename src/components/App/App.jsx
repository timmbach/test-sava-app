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

const App = () => {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <BrowserRouter>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/update-profile" element={<UpdateProfile />} />
              </Route>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Container>
    </AuthProvider>
  );
};

export default App;
