import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleSubmit = async function (e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch {
      setError("Failed to Sign In");
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
          <h2 className="text-center mb-3">Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>
            <Button disabled={loading} className="w-100 mb-2" type="submit">
              Sign In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link className="text-secondary" to="/forgot-password">
              Forgot password?
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

export default SignIn;
