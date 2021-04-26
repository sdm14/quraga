import React from "react";
import { Card } from "react-bootstrap";

export const Profile = ({ userData }) => {
  return (
    <Card style={{ width: "18rem", marginRight: "auto", marginLeft: "auto" }}>
      <Card.Body>
        <Card.Title>{userData.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {userData.email}
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="https://github.com/sdm14" target="blank">
          GitHub
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
