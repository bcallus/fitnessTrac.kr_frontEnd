import React from "react";

const Routine = ({routine}) => {

    return (
        <div className="routine">
            <p><b>Routine #{routine.id}</b></p>
            <p>Name: {routine.name}</p>
            <p>Goal: {routine.goal}</p>
            <p>Creator Name: {routine.creatorName}</p>
            <div className="activites-in-routine">
            {routine.activities ? routine.activities.map(activity => ( //needs a key prop
                <div className="activity-in-routine" key={activity.id}>
                <p><b>Activity #{activity.id}</b></p>
                <p>Name: {activity.name}</p>
                <p>Description: {activity.description}</p>
                </div>
            )) : null}
            </div>
        </div>
    )
}

export default Routine;