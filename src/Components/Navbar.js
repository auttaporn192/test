import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">=TEST=</div>
      <i className="fa fa-thumbs-up"></i>
      <ul className="nav-link">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/clock">Product</Link>
        </li>
        <li>
          <Link to="/login">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
