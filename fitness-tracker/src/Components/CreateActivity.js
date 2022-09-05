import React, { useState } from "react";
import { createNewActivity } from "../api";

const CreateActivity = ({token, activitiesList, setActivitiesList}) => {

    const [name, setName] = useState();
    const [description, setDescription] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await createNewActivity({
            token,
            name,
            description
        });
        activitiesList.push(data)
        setActivitiesList(activitiesList);
        alert("Your activity has been sucessfully added.");
    };


    return (
        <form className="form" onSubmit={handleSubmit}>
        <h2>Create New Activity</h2>
        <label>
            <div>
                Name:
                <input
                type="text"
                onChange={(event) => {
                setName(event.target.value);
                }}
                required
                />
            </div>
        </label>
        <label>
          Description:
          <input
            type="text"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            required
          />
            </label>
        <div>
            <button type="submit">Create</button>
        </div>
      </form>
    )
};

export default CreateActivity;
