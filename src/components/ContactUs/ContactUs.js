import { Button } from "react-bootstrap";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import img from "../../images/contact.png";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <Row className="g-0">
      <Col lg={6}>
        <div className="contact-img-div">
          <img className="contact-img" src={img} alt="" />
        </div>
      </Col>

      <Col lg={6}>
        <Form className="form">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="name" placeholder="type your name" />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Massage</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button size="lg" className="p-2" variant="success">
            Contact Now
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactUs;
