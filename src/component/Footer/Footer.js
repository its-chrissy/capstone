import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_links">
        <Link to="/">
          {" "}
          <h3>Home</h3>
        </Link>
      </div>
      <div className="footer_links">
        <Link to="/about">
          {" "}
          <h3>About</h3>{" "}
        </Link>
      </div>
      <div className="footer_links">
        <h3>Explore</h3>
        <ul>
          <li>
            <Link to="/toronto">Toronto</Link>
          </li>
          <li>
            <Link to="/new-york">New York</Link>
          </li>
          <li>
            <Link to="/miami">Miami</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
