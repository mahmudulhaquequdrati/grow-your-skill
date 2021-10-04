import React from "react";
import "./Home.css";
import img from "../../images/header.png";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import SingleServiceHome from "../SingleServiceHome/SingleServiceHome";

const Home = () => {
  const [service, setservice] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setservice(data));
  }, []);

  return (
    <div>
      <Row className="g-0 home-container py-3">
        <Col lg={6}>
          <div className=" w-75 m-5">
            <p className="home-p bg-light border border-primary py-2 text-center ">
              best online courses
            </p>
            <h1>Grow Your Skill</h1>
            <h1>
              Join Our Course To
              <br />
              <span className="text-primary">Get Discount</span>
            </h1>
            <div className="mt-3 p-0">
              <Link
                className="bg-primary rounded-3 border-0 text-light py-2 px-4 text-decoration-none"
                to="/services"
              >
                Our Courses
              </Link>
            </div>
          </div>
        </Col>

        <Col lg={6}>
          <div className="w-sm-50">
            <img className="img-fluid" src={img} alt="" />
          </div>
        </Col>
      </Row>
      {/* new section started */}
      <div className="home-services pt-3">
        <div className="py-4 ">
          <h2 className="text-center">Creative and Unique Courses</h2>
          <p className="text-center w-50 mx-auto">
            You will find what you need in one of our distinct and unique
            courses perfectly designed to learn and build your career.
          </p>
        </div>
        {/* services result */}
        <div className="px-4">
          <Row className="g-0">
            {service.slice(0, 4).map((singleService) => (
              <SingleServiceHome
                singleService={singleService}
                key={singleService.key}
              ></SingleServiceHome>
            ))}
          </Row>
        </div>
        <div className="d-flex justify-content-center pb-4 pt-2">
          <Link
            className="bg-success rounded-3 border-0 text-light py-2 px-4 text-decoration-none"
            to="/services"
          >
            All services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
