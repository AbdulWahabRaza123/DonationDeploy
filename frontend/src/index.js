import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
const root = ReactDOM.createRoot(document.getElementById("root"));
const element = (
  <>
    <HashRouter>
      <App />
    </HashRouter>
  </>
);
root.render(element);
