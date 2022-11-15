import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const [error, setError] = useState("");
  // const { currentUser, signout } = useAuth();
  const history = useNavigate();

  const handleSignOut = async function () {
    setError("");

    try {
      // await signout();
      history("/signin");
    } catch {
      setError("Failed to sign out");
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-3">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong>
          {/* {currentUser.email} */}
          <Link to="/update-profile" className="w-100 btn btn-primary mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-4">
        <Button variant="link" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
