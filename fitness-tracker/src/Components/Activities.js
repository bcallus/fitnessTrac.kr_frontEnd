import React from 'react';
import Activity from './Activity';
import CreateActivity from './CreateActivity';

const Activities = ({token, activitiesList, setActivitiesList, isLoggedIn}) => {
    // console.log("activitiesList in Activities component-->", activitiesList)
   
    return (
        <div>
            <h1 className="activities-title">All Activities</h1>

            {isLoggedIn ?
                <div className="create-activity-form">
                    <CreateActivity
                        token={token}
                        activitiesList={activitiesList}
                        setActivitiesList={setActivitiesList}
                    />
                </div>
                : null}
            
            <div className="activities">
                {activitiesList ? activitiesList.map(activity => (
                    <Activity
                        key={activity.id}
                        activity={activity}
                    />
            ))
                : null}
            </div>
        </div>
    );
};

export default Activities;