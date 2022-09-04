import React, {useState, useEffect } from 'react';
import { deleteRoutine, getUserRoutines } from '../api';
import CreateRoutine from './CreateRoutine';

const MyRoutines = ({token, routineId, setRoutineId}) => {
   
    const [userRoutines, setUserRoutines] = useState([]);
    const [username, setUsername] = useState(localStorage.getItem('username'));
    console.log(userRoutines);

    const RoutineCardStyle = {
        border: "2px solid black",
        padding: "1em",
        margin: '1em'
    }

    useEffect(() => {
        // setUserRoutines(getUserRoutines({token, username}));
        getUserRoutines({token, username})
        .then(data => setUserRoutines(data))
        .catch(console.error);
        // console.log(userRoutines);
    }, []);

    const handleDelete = async (event) => {
        event.preventDefault();
        console.log("routineId-->", routineId)
        const data = await deleteRoutine({ token, routineId })
        console.log("data from deleteRoutine-->", data)
        console.log("userRoutines-->", userRoutines)
        if (data.success) {
            alert("You have sucessfully deleted your routine.");
          } else {
            alert("There has been an error. Please try again.");
        }
    }

    const handleUpdate = async(event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>My Routines Page Test</h1>
            <div >
                {userRoutines.map((routine) =>
                (<div key={routine.id} style={RoutineCardStyle}>
                    <h2>{routine.name}</h2>
                    <h3>{routine.goal}</h3>
                    
                    <form onSubmit={handleUpdate}>
                        <button type="submit" onClick={() => setRoutineId(routine.id)}>Update Routine</button> 
                    </form>

                    <form onSubmit={handleDelete}>
                    <button type="submit" onClick={() => setRoutineId(routine.id)}>Delete Routine</button> 
                    </form>
                </div>
                ))}
            </div>
            
            <CreateRoutine />
        </div>
    );
};

export default MyRoutines;