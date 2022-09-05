import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({isLoggedIn}) => {
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
                    {isLoggedIn ? <Link to="/myroutines">My Routines</Link> : null}
                </li>
                    
                <li>
                    <Link to="/activities">Activities</Link>
                </li>
                    
                    <li>
                        {isLoggedIn ?
                            <Link to="/logout">Log Out</Link> 
                            : <Link to="/login">Log In</Link> 
                        }
                    </li>
                
                <li>
                    <Link to="/register">Sign Up</Link>
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default Navbar;