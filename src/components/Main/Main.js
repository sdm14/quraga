import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export const Main = ({ photos }) => {
  return (
    <Container>
      <Row>
        {photos.map((item) => {
          return (
            <Col xs={6} md={4} key={item.id} style={{ marginBottom: "20px" }}>
              <Image src={item.url} thumbnail />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
