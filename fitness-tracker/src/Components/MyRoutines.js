import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../api';

const MyRoutines = ({ token }) => {
    console.log("token in MyRoutines-->", token)

    const [user, setUser] = useState();

    useEffect(() => {
        fetchUserData(token).then((results) => {
            console.log("results from fetchUserData-->", results)
            const username = results.username;
            console.log(username)
            setUser(username)
        })
    }, [])

    return (
        <div>
            My Routines Page Test
            {token ? <h1>Welcome ${user}!</h1> : null}
        </div>
    );
};

export default MyRoutines;