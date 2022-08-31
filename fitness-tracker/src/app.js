import React from "react"; //import useState or useEffect hooks (whatever is needed)
import { Link, Routes, Route } from "react-router-dom";

//import components
import {
    Home
} from "./components"

const App = () => {
    //possibly set state here top level

    //return routes in here
    return (
        <div>
            {/* Navbar Below */}
            <div className = "navbar">
                <h1>Fitness Tracker</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                         </li>
                        <li>
                            <Link to="/routines">Routines</Link>
                         </li>
                         <li>
                            <Link to="/activities">Activities</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Routes Below */}
            <Routes>

                <Route exact path="/" element={<Home />}></Route>
                <Route></Route>
                <Route></Route>

            </Routes>
           
        </div>
    );

}

export default App;