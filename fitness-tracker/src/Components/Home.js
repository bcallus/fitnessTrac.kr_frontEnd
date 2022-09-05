import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='title'>
           <h1>Track and build your fitness routines here!</h1>
            <p>
                <Link to="/register">Click Here</Link> to register a new account.
            </p>
        </div>
    );
};

export default Home;