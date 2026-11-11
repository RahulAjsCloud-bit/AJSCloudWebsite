import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* 🌍 Global vendor styles */
import "bootstrap/dist/css/bootstrap.min.css";

/* ⚙️ Bootstrap JS (dropdown, toggle, collapse) */
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* 🌈 Your global styles */
import "./css/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



////////////////////////////////////////////////////////////////
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
