import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";

export const Posts = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map((item) => {
          return (
            <Col xs={6} md={4} style={{ marginBottom: "20px" }} key={item.id}>
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Header>{item.id}</Card.Header>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
