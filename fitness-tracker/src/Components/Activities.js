import React from 'react';
import Activity from './Activity';

const Activities = ({activitiesList}) => {
    console.log("activitiesList in Activities component-->", activitiesList)
   
    return (
        <div className="activities">
        {/* Activities Page Test */}
            {activitiesList ? activitiesList.map(activity => (
                <Activity
                    key={activity.id}
                    activity={activity}
                />
            ))
                : null}
        </div>
    );
};

export default Activities;