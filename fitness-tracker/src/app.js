import React, { useState, useEffect } from "react"; //import useEffect hooks (whatever is needed)
import { Routes, Route } from "react-router-dom";
import { fetchAllActivities, fetchAllRoutines } from "./api";

//import components
import {
    Navbar,
    Home,
    Routines,
    MyRoutines,
    Activities,
    LogIn,
    Register,
    LogOut,
    CreateActivity,
    Routine
} from "./components"

const App = () => {
    //possibly set state here top level
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState();
    const [activitiesList, setActivitiesList] = useState();
    const [routinesList, setRoutinesList] = useState();

    useEffect(() => {
        fetchAllActivities().then((results) => {
            // console.log("results from fetchAllActivities-->", results)
            setActivitiesList(results)
        });

    })

    useEffect(() => {
       fetchAllRoutines().then((results) => {
            // console.log("results from fetchAllRoutines-->", results)
            setRoutinesList(results)
        });

    })

    //return routes in here
    return (
        <div>
            <Navbar token={token} isLoggedIn={isLoggedIn} />

            {/* Routes Below */}
            <Routes>

                <Route exact path="/" element={<Home />}></Route>

                <Route
                    path="/routines"
                    element={<Routines 
                        routinesList={routinesList}
                    />
                    }
                ></Route>

                <Route path="/myroutines" element={<MyRoutines />}></Route>

                <Route
                    path="/activities"
                    element={
                        <Activities 
                            token={token}
                            activitiesList={activitiesList}
                            isLoggedIn={isLoggedIn}
                        />
                    }
                ></Route>

                <Route
                    path="/activities"
                    element={
                        <CreateActivity 
                            token={token}
                            activitiesList={activitiesList}
                            setActivitiesList={setActivitiesList}
                        />
                    }
                ></Route>

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

                <Route
                    path="/logout"
                    element={
                        <LogOut 
                            setIsLoggedIn={setIsLoggedIn}
                            setToken={setToken}
                        />
                    }
                ></Route>

            </Routes>
           
        </div>
    );
};

export default App;