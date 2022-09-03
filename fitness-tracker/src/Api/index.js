import { Routines } from "../components";

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
				return result;
			});
	} catch (error) {
		console.error(error);
	}
}

export async function getAllRoutines() {
	try {
		fetch("http://fitnesstrac-kr.herokuapp.com/api/routines", {
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((result) => {
				console.log("Data from getAllRoutines: ");
				console.log(result);
				return result;
			})
			.catch(console.error);
	} catch (error) {
		throw error;
	}
}

export async function getUserRoutines({token, username}) {
  try {
    console.log(token)
    fetch(`${BASE_URL}/users/${username}/routines`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
  } catch (error) {
    console.error(error, token)

  }
}

export async function createUserRoutines ({ name, goal, isPublic, token }) {
  try {
    fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
        'Content-type': 'Application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic
      })
    })
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error)
  } catch (error) {
    throw error
  }
}

export async function editUserRoutines({ routineId, name, goal, isPublic, token }) {
  try {
    fetch(`${BASE_URL}/routines/:routineId`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      })
    })
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
  } catch (error) {
    throw error
  }
}