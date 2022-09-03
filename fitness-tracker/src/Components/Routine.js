import React from "react";
import Activity from "./Activity";

const Routine = ({routine}) => {
    // console.log("routine.activities in Routine-->", routine.activities)

    return (
        <div className="routine">
            <p><b>Routine #{routine.id}</b></p>
            <p>Name: {routine.name}</p>
            <p>Goal: {routine.goal}</p>
            <p>Creator Name: {routine.creatorName}</p>
            {routine.activities ? routine.activities.map(activity => (
        <div className="activity-in-routine">
            <p><b>Activity #{activity.id}</b></p>
            <p>Name: {activity.name}</p>
            <p>Description: {activity.description}</p>
        </div>
    )) : null}
        </div>
    )
}

export default Routine;