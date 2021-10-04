import React from "react";
import { Card, Col } from "react-bootstrap";

const SingleServiceHome = (props) => {
  const { name, img, price } = props.singleService;
  return (
    <Col lg={3} md={4} sm={6} className="shadow my-3 rounded p-2 ">
      <Card className="p-3">
        <div className="d-flex justify-content-center">
          <img alt="" variant="top" className="img-services" src={img} />
        </div>
        <Card.Body>
          <Card.Title className="text-center">Course : {name}</Card.Title>
          <Card.Text className="text-center">Price: ${price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleServiceHome;
