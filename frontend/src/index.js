import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
const root = ReactDOM.createRoot(document.getElementById("root"));
const element = (
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
root.render(element);
