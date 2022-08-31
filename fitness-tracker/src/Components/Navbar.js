import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Fitness Tracker</h1>
      {/* <nav className="navbar-tabs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/routines">Routines</Link>
          </li>
          <li>
            <Link to="/activities">Activity</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Navbar;