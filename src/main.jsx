import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";
import "animate.css/animate.min.css"; // Importa animate.css
import "./index.css";

// Inicializar WOW.js
import { WOW } from "wowjs";
new WOW().init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
