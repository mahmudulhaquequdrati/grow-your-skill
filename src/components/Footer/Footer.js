import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links">
          <Link className="footer-text" to="/">
            Home
          </Link>
          <Link className="footer-text" to="/about">
            about
          </Link>
          <Link className="footer-text" to="/services">
            Services
          </Link>
          <Link className="footer-text" to="/contact-us">
            Contact us
          </Link>
        </div>
        <p> &copy; 2021 uniqueDesigner</p>
      </div>
      <p className="attribute">
        <small>
          <div>
            Icons made by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.freepik.com"
              title="Freepik"
            >
              Freepik
            </a>{" "}
            from{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </div>
        </small>
      </p>
    </footer>
  );
};

export default Footer;
