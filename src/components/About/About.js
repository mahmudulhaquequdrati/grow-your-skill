import { React, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import "./About.css";
import SingleAbout from "../singleAbout/SingleAbout";

const About = () => {
  const [about, setabout] = useState([]);
  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => setabout(data));
  }, []);

  return (
    <div className="about-container p-4">
      <Row className="gy-4 p-4 flex-nowrap">
        {about.map((ab) => (
          <SingleAbout ab={ab} key={ab.key}></SingleAbout>
        ))}
      </Row>
    </div>
  );
};

export default About;
