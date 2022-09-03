
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
            password: password
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
            password: password
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
  }
  catch (error) {
    console.error(error);
  }
}

export async function createNewActivity({token, name, description}) {
  try {
    return fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description
      })
    })
      .then((response) => response.json())
      .then((result) => {
      return result;
    });
  }
  catch (error) {
    console.error(error)
  }
}

export async function fetchAllRoutines() {
  try {
    return fetch(`${BASE_URL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
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