import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import FunctionalComponent from "./FunctionalComponent.jsx";
import ClassComponent from "./ClassComponent.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FunctionalComponent />
  </React.StrictMode>
);
