import React from "react";

const Activity = ({activity}) => {
    console.log(activity)
    return (
        <div className="activity">
            <p><b>Activity #{activity.id}</b></p>
            <p>Name: {activity.name}</p>
            <p>Description: {activity.description}</p>
        </div>
    )
}

export default Activity;