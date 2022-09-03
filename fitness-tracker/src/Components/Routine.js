import React from "react";

const Routine = ({routine}) => {
    // console.log(activity)
    return (
        <div className="routine">
            <p><b>Routine #{routine.id}</b></p>
            <p>Name: {routine.name}</p>
            <p>Goal: {routine.goal}</p>
            <p>Creator Name: {routine.creatorName}</p>
        </div>
    )
}

export default Routine;