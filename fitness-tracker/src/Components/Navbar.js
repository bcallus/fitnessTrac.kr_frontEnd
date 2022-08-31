import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    // why wouldn't this render??
    return (
        <div className="navbar">
        <h1>Fitness Tracker</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/routines">Routines</Link>
                </li>
                <li>
                    <Link to="/activities">Activities</Link>
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default Navbar;