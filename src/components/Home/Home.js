import React from "react";
import "./Home.css";
import img from "../../images/header.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-texts">
        <p className="home-p">best online courses</p>
        <h1>Grow Your Skill</h1>
        <h1>
          Join Our Course To
          <br />
          <span>Get Discount</span>
        </h1>
        <div className="btn">
          <Link className="course-btn" to="/services">
            Our Courses
          </Link>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
