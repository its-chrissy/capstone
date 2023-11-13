import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.scss";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">City Escape</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
