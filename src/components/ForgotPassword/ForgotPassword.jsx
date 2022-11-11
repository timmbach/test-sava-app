import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async function (e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Password reset has been sent to registered email!");
    } catch {
      setError("Failed to Reset Password");
    }

    setLoading(false);
  };
  return (
    <>
      <strong className="d-flex justify-content-center w-100 text-align-center mb-4">
        Sava
      </strong>
      <Card className="shadow p-2">
        <Card.Body>
          <h4 className="text-center text-secondary mb-3">Password Reset</h4>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Button disabled={loading} className="w-100 mb-2" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link className="text-secondary" to="/signin">
              Sign In
            </Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-4">
        <span>New User? </span>
        <Link to="/signup">Create new account</Link>
      </div>
    </>
  );
};

export default ForgotPassword;
