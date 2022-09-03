import React from "react";
<<<<<<< HEAD
=======
import Activity from "./Activity";
>>>>>>> recovery

const Routine = ({routine}) => {
    // console.log("routine.activities in Routine-->", routine.activities)

    return (
        <div className="routine">
            <p><b>Routine #{routine.id}</b></p>
            <p>Name: {routine.name}</p>
            <p>Goal: {routine.goal}</p>
            <p>Creator Name: {routine.creatorName}</p>
<<<<<<< HEAD
            <div className="activites-in-routine">
            {routine.activities ? routine.activities.map(activity => ( //needs a key prop
                <div className="activity-in-routine" key={activity.id}>
                <p><b>Activity #{activity.id}</b></p>
                <p>Name: {activity.name}</p>
                <p>Description: {activity.description}</p>
                </div>
            )) : null}
            </div>
=======
            {routine.activities ? routine.activities.map(activity => (
        <div className="activity-in-routine">
            <p><b>Activity #{activity.id}</b></p>
            <p>Name: {activity.name}</p>
            <p>Description: {activity.description}</p>
        </div>
    )) : null}
>>>>>>> recovery
        </div>
    )
}

export default Routine;