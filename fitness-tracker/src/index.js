import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <Router>
    <App />
  </Router>
);