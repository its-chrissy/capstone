import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_links">
        <Link to="/">
          {" "}
          <h4>HOME</h4>
        </Link>
      </div>
      <div className="footer_links">
        <Link to="/about">
          {" "}
          <h4>ABOUT</h4>{" "}
        </Link>
      </div>
      <div className="footer_links">
        <Link to="/">
          {" "}
          <h4>EXPLORE</h4>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
