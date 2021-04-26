import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Row>
    </Container>
  );
};
