import React from 'react';
import Routine from './Routine'

const Routines = ({ routinesList }) => {
    
    return (
        <div>
            <h1 className="routines-title">All Routines</h1>

            <div className="routines">
                {routinesList ? routinesList.map(routine => (
                    <Routine
                        key={routine.id}
                        routine={routine}
                    />
            ))
                : null}
            </div>
        </div>
    );
};

export default Routines;