import React from "react"; //import useState or useEffect hooks (whatever is needed)
import { Routes, Route } from "react-router-dom";

//import components
import {
    Navbar,
    Home,
    Routines,
    MyRoutines,
    Activities,
    LogIn
} from "./components"

const App = () => {
    //possibly set state here top level

    //return routes in here
    return (
        <div>
            <Navbar />

            {/* Routes Below */}
            <Routes>

                <Route exact path="/" element={<Home />}></Route>
                <Route path="/routines" element={<Routines />}></Route>
                <Route path="/myroutines" element={<MyRoutines />}></Route>
                <Route path="/activities" element={<Activities />}></Route>
                <Route path="/login" element={<LogIn />}></Route>

            </Routes>
           
        </div>
    );
};

export default App;