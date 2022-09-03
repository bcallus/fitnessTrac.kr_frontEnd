import React, { useState, useEffect } from "react"; //import useEffect hooks (whatever is needed)
import { Routes, Route } from "react-router-dom";

//import components
import {
    Navbar,
    Home,
    Routines,
    MyRoutines,
    Activities,
    LogIn,
    Register,
} from "./components"

const App = () => {
    //possibly set state here top level
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState();

    useEffect(() => {
        onLoad();
    }, []);

    function onLoad() {
        try{
            const storedToken = JSON.parse(localStorage.getItem('token'))
            if (storedToken) {
                setToken(storedToken)
            }
        } catch (e) {
            if (e !== "No current user") {
                alert(e);
            }
        }
    }

    //return routes in here
    return (
        <div>
            <Navbar token={token} isLoggedIn={isLoggedIn} />

            {/* Routes Below */}
            <Routes>

                <Route exact path="/" element={<Home />}></Route>
                <Route path="/routines" element={<Routines />}></Route>
                <Route path="/myroutines" element={<MyRoutines />}></Route>
                <Route path="/activities" element={<Activities />}></Route>

                <Route
                    path="/register"
                    element={
                        <Register 
                        setToken={setToken}
                        username={username}
                        setUsername={setUsername}
                        password={password}
                        setPassword={setPassword}
                        />
                    }
                ></Route>

                <Route
                    path="/login"
                    element={
                        <LogIn 
                        username={username}
                        setUsername={setUsername}
                        password={password}
                        setPassword={setPassword}
                        setToken={setToken}
                        isLoggedin={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                        />
                    }
                ></Route>

            </Routes>
           
        </div>
    );
};

export default App;