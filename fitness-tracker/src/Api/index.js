export const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

export async function registerUser({ username, password }) {
	try {
		return fetch(`${BASE_URL}/users/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		})
			.then((response) => response.json())
			.then((result) => {
				return result;
			});
	} catch (error) {
		console.error(error);
	}
}

export async function logInUser({ username, password }) {
	try {
		return fetch(`${BASE_URL}/users/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		})
			.then((response) => response.json())
			.then((result) => {
				localStorage.setItem("token", result.token);
				return result;
			});
	} catch (error) {
		console.error(error);
	}
}

export async function fetchAllActivities() {
	try {
		return fetch(`${BASE_URL}/activities`, {
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((result) => {
				return result;
			});
	} catch (error) {
		console.error(error);
	}
}

export async function getAllRoutines() {
	try {
		return await fetch(`${BASE_URL}/routines`, {
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((result) => {
				return result;
			});
	} catch (error) {
		console.error(error);
	}
}

export async function getUserRoutines({ token, username }) {
	try {
		console.log(token);
		const request = await fetch(`${BASE_URL}/users/${username}/routines`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + localStorage.getItem("token"),
			},
		});
		if (!request.ok) {
			console.log(request);
		}
		const result = await request.json();
		return result;
	} catch (error) {
		console.error(error, token);
	}
}

export async function createUserRoutines({ name, goal, isPublic }) {
	try {
		await fetch(`${BASE_URL}/routines`, {
			method: "POST",
			headers: {
				"Content-type": "Application/json",
				Authorization: "Bearer " + localStorage.getItem("token"),
			},
			body: JSON.stringify({
				name: name,
				goal: goal,
				isPublic: isPublic,
			}),
		})
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				return result;
			})
			.catch(console.error);
	} catch (error) {
		throw error;
	}
}

export async function editUserRoutines({
	routineId,
	name,
	goal,
	isPublic,
	token,
}) {
	try {
		await fetch(`${BASE_URL}/routines/:${routineId}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				name: name,
				goal: goal,
				isPublic: isPublic,
			}),
		})
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
			})
			.catch(console.error);
	} catch (error) {
		throw error;
	}
}

export async function createNewActivity({ token, name, description }) {
	try {
		return fetch(`${BASE_URL}/activities`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				name: name,
				description: description,
			}),
		})
			.then((response) => response.json())
			.then((result) => {
				return result;
			});
	} catch (error) {
		console.error(error);
	}
}

export async function deleteRoutine({ token, routineId }) {
  try {
    return fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) => response.json())
		.then((result) => {
		 return result;
			});
  }
  catch (error) {
    console.error(error);
  }
}
