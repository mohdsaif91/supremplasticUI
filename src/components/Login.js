import React from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  return (
    <div className="form-container">
      <Row>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Row>
            <Button
              variant="primary"
              onClick={() => navigate("/adminhome")}
              className="login-btn mb-2"
              size="sm"
            >
              Login
            </Button>
            <Button
              variant="default"
              onClick={() => navigate("/")}
              size="sm"
              className="login-btn"
            >
              Back
            </Button>
          </Row>
        </Form>
      </Row>
    </div>
  );
}

export default Registration;
