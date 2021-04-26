import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
};

export const Login = ({ setUsername, setPassword, onClick }) => {
  return (
    <Container style={containerStyle}>
      <Form style={{ width: "400px" }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            username: Admin, password: 12345
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onClick}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};
