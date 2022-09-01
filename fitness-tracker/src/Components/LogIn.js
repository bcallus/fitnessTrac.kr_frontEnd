import React from 'react';
import { useNavigate } from "react-router-dom";
import { logInUser } from "../api";

const LogIn = ({
    username,
    password,
    setUsername,
    setPassword,
    setToken,
    setIsLoggedIn,
}) => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
    
        const data = await logInUser({
            username,
            password,
        });
        console.log("data from logInUser-->", data)

          if (data.success) {
            setIsLoggedIn(true);
            const token = data.data.token;
            setToken(token);
            alert(`${data.data.message}`);
            navigate("/myroutines"); //check on this
          } else {
            alert(`${data.message}`);
          }
        };

    return (
        <form className="form" onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <label>
          <p>Username</p>
          <input
            type="text"
            onChange={(event) => setUsername(event.target.value)}
            minLength="8"
            required
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            minLength="8"
            required
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
};

export default LogIn;