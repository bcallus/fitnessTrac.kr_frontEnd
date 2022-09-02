import React from "react";
import { useNavigate } from "react-router-dom";

const LogOut = ({ setIsLoggedIn, setToken }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken();
    alert("You have successfully been logged out.");
    navigate("/");
  };

  return (
      <div>
          <p>Log Out Page Test</p>
      <button className="logout-button" onClick={handleLogout}>
        Click here to log out.
      </button>
    </div>
  );
};

export default LogOut;