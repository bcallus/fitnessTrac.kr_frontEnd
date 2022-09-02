import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewActivity } from "../api";

const CreateActivity = ({token, activityList, setActivitiesList}) => {
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [description, setDescription] = useState();

    // console.log("token in CreateActivity-->", token)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await createNewActivity({
            token,
            name,
            description
        });
        console.log("data from createNewActivity-->", data)
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
