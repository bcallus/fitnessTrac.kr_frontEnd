import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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

                 {/* my routines link should only show when logged in    */}
                <li>
                    <Link to="/myroutines">My Routines</Link>
                </li>
                    
                <li>
                    <Link to="/activities">Activities</Link>
                </li>
                <li>
                    <Link to="/login">Log In</Link>
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default Navbar;