import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            Home Page Test
            <p>
                <Link to="/register">Click Here</Link> to register a new account.
            </p>
        </div>
    );
};

export default Home;