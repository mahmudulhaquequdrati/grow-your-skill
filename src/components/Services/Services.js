import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="service-bg">
      <h4 className="text-center py-4">Our All services</h4>
      <div className="p-4">
        <Row className="g-4 flex-wrap">
          {services.map((service) => (
            <SingleService key={service.key} service={service}></SingleService>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
