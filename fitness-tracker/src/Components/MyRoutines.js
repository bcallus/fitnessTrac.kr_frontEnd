import React, {useState, useEffect } from 'react';
import { deleteRoutine, editActivity, getUserRoutines } from '../api';
import CreateRoutine from './CreateRoutine';

const MyRoutines = ({
    token,
    routineId,
    setRoutineId,
    name,
    setName,
    goal,
    setGoal
}) => {
   
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

    const handleEdit = async(event) => {
        event.preventDefault();
        console.log("routineId-->", routineId)
        const data = await editActivity({ token, routineId, name, goal })
        console.log("data from handleEdit-->", data)
    }

    return (
        <div>
            <h1 className='title'>My Routines</h1>
            <div >
                {userRoutines.map((routine) =>
                (<div className="my-routine" key={routine.id} style={RoutineCardStyle}>
                    <div>
                    <h2>{routine.name}</h2>
                    <h3>{routine.goal}</h3>
                    </div>
                    
                    <form className="edit-routine" onSubmit={handleEdit}>
                        <label>Name: </label>
                        <input type="text" onChange={(event) => setName(event.target.value)}></input>
                        <br />
                        <label>Goal: </label>
                        <input type="text"  onChange={(event) => setGoal(event.target.value)}></input>
                        <br />
                        <button type="submit" onClick={() => setRoutineId(routine.id)}>Edit Routine</button> 
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