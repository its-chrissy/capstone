import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.scss";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">CITY ESCAPE</Link>
      </div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
