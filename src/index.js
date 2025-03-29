import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Header.css"; // Ensure styles are applied
import "./styles/Footer.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
