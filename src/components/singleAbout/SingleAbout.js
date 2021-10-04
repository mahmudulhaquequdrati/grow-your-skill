import { Card, Col } from "react-bootstrap";

const SingleAbout = (props) => {
  const { title, description, img } = props.ab;
  return (
    <Col lg={4} md={4} sm={6} className="shadow mb-5 bg-body rounded">
      <Card className="py-2">
        <div className="d-flex justify-content-center">
          <img alt="" variant="top" className="img-icon" src={img} />
        </div>
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleAbout;
