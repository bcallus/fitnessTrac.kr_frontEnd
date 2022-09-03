import React, {useState, useEffect } from 'react';
import { getUserRoutines } from '../api';
import CreateRoutine from './CreateRoutine';

const MyRoutines = () => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [userRoutines, setUserRoutines] = useState([{}]);
    const [username, setUsername] = useState(localStorage.getItem('username'))

    // useEffect(() => {
    //     const fetchUserRoutine = async () => {
    //         const response = await fetch ("http://fitnesstrac-kr.herokuapp.com/api/users/:username/routines", {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`,
    //             },
    //         });
    //         const result = await response.json();
    //         console.log(result)
    //         setAllRoutine(result.data.routines);
    //     }
    //     fetchUserRoutine()
    // }, [token]);

    useEffect(() => {
        setUserRoutines(getUserRoutines({token, username}));
        console.log(userRoutines);
    }, [token, username]);

    return (
        <div>
            <h1>My Routines Page Test</h1>
            {userRoutines.map((routine) =>
            (<div key={routine._id}>
                <h2>{routine.name}</h2>
                <h3>{routine.goal}</h3>
                </div>
                ))}
            <CreateRoutine />
        </div>
    );
};

export default MyRoutines;