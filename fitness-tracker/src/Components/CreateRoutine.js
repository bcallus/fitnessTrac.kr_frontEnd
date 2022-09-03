import React, { useState } from "react";
import { createUserRoutines } from "../api";

const CreateRoutine = ({ routines, setRoutines }) => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [name, setName] = useState("");
	const [goal, setGoal] = useState("");
	const [isPublic, setIsPublic] = useState(true);
	const [message, setMessage] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(`Bearer ${token}`);
		console.log("Routine Name: " + name);
		console.log("routine goal: " + goal);
		setToken(localStorage.getItem("token"));
		const result = createUserRoutines({name, goal, isPublic});
		if (
			message ===
			'duplicate key value violates key constraints "routines_name_key"'
		) {
			setMessage(`a routine with name ${name} already exists`);
		} else {
			if (message) {
				setMessage(message);
			} else {
				setMessage("Routine Added");
				setName("");
				setGoal("");
				setIsPublic(false);
			}
		}
	};

	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<h2>Create Routine</h2>
				<label>
					<p>Name</p>
					<input
						type="text"
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</label>
				<label>
					<p>Goal</p>
					<input
						type="text"
						value={goal}
						onChange={(event) => setGoal(event.target.value)}
					/>
				</label>
				<label>
					<p>Is this Public</p>
					<input
						type="checkbox"
						value={isPublic}
						defaultChecked={true}
						onChange={(event) => setIsPublic(event.target.value)}
					/>
				</label>
				<div>
					<button type="submit">Submit</button>
					<p>{message}</p>
				</div>
			</form>
			{/* <MyRoutines token={token} username={username} /> */}
		</div>
	);
};

export default CreateRoutine;