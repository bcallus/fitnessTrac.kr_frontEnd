
export const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

export async function registerUser({ username, password }) {
    try {
      return fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
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
          user: {
            username: username,
            password: password,
          },
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